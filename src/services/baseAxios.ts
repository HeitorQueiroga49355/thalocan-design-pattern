/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from 'axios'
import { apiBase } from '../utils/apiBase'
import { tokenRefresh } from './tokenRefresh'

let isRefreshing = false
let failedRequestQueue: any = []

export const axiosInstance = axios.create({
  baseURL: apiBase,
  headers: {
    Authorization: `Bearer Token`
  }
})

axiosInstance.interceptors.request.use(async (req: any) => {
  req.headers.Authorization = `Bearer token`
  return req
})

axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  async function (error) {
    if (error.response.status === 401) {
      const originalConfig = error.config
      if (!isRefreshing) {
        isRefreshing = true

        tokenRefresh()
          .then(res => {
            axiosInstance.defaults.headers.common = {
              Authorization: `Bearer Token`
            }
            originalConfig.headers.Authorization = `Bearer ${res}`
            axiosInstance(originalConfig)

            failedRequestQueue.forEach(
              (error: any) =>
                // Some treatment for above error
                error
            )
            failedRequestQueue = []
          })
          .catch(() => {
            failedRequestQueue.forEach((onFailure: any) => onFailure(error))
            failedRequestQueue = []
          })
          .finally(() => {
            isRefreshing = false
          })
      } else {
        return new Promise((resolve, reject) => {
          failedRequestQueue.push({
            onSuccess: (token: string) => {
              originalConfig.headers.Authorization = `Bearer ${token}`
              resolve(axiosInstance(originalConfig))
            },
            onFailure: (err: AxiosError) => {
              reject(err)
            }
          })
        })
      }
    }
    throw error
  }
)
