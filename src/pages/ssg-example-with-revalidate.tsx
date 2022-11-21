import React from 'react'
import styled from 'styled-components'

interface axiosExampleProps {
  stringResponseApi: string
  hours: string
}

export default function axiosExample({
  stringResponseApi,
  hours
}: axiosExampleProps) {
  return (
    <StyledContainerPage>
      <StyledH1>Study how the axios was utilized in the code</StyledH1>
      {stringResponseApi}
      <div>{hours}</div>
    </StyledContainerPage>
  )
}

export async function getStaticProps() {
  let responseApi
  let stringResponseApi
  try {
    responseApi = await fetch('http://localhost:3000/api/hello')
    stringResponseApi = JSON.stringify(await responseApi.json())
  } catch (_) {
    responseApi = {}
    stringResponseApi = '{}'
  }

  const hours = new Date().getTime()

  return {
    props: {
      stringResponseApi,
      hours
    },
    revalidate: 5
  }
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
