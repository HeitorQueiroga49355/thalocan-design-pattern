import React from 'react'
import styled from 'styled-components'
import { axiosInstance } from '../services/baseAxios'

interface axiosExampleProps {
  stringResponseApi: string
}

export default function axiosExample({ stringResponseApi }: axiosExampleProps) {
  return (
    <StyledContainerPage>
      <StyledH1>Study how the axios was utilized in the code</StyledH1>
      {stringResponseApi}
    </StyledContainerPage>
  )
}

export async function getServerSideProps() {
  const responseApi = await axiosInstance('/api/hello')
  const stringResponseApi = JSON.stringify(responseApi.data)
  return {
    props: {
      stringResponseApi
    }
  }
}

const StyledContainerPage = styled.main`
  height: 100vh;

  padding: 30px 0 0 0;

  background-color: #d4d4d4;
`

const StyledH1 = styled.h1`
  font-family: 'Fira Code';
  font-weight: 400;

  margin: 0 0 30px 0;
`
