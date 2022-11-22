import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function axiosExample() {
  const [stringResponseApi, setStringResponseApi] = useState('')
  const [hours, setHours] = useState(0)

  useEffect(() => {
    setResponseApi()
    setInterval(() => {
      setHours(new Date().getTime())
    }, 1000)
  }, [])

  async function setResponseApi() {
    const response = await fetch('http://localhost:3000/api/hello')
    const responseString: string = JSON.stringify(response.json())
    if (response) setStringResponseApi(responseString)
  }

  return (
    <StyledContainerPage>
      <StyledH1>See how next{"'"}s client data fetching works</StyledH1>
      {stringResponseApi}
      <div>{hours}</div>
    </StyledContainerPage>
  )
}

const StyledContainerPage = styled.main`
  height: 100vh;

  font-size: 30px;

  padding: 30px 0 0 0;
`

const StyledH1 = styled.h1`
  font-family: 'Fira Code';
  font-weight: 400;
  font-size: 40px;

  margin: 0 0 30px 0;
`
