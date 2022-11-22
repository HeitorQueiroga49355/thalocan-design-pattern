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
      <StyledH1>See how next{"'"}s server side rendering works</StyledH1>
      {stringResponseApi}
      <div>{hours}</div>
    </StyledContainerPage>
  )
}

export async function getServerSideProps() {
  const responseApi = await fetch('http://localhost:3000/api/hello')
  const stringResponseApi = JSON.stringify(await responseApi.json())

  const hours = new Date().getTime()

  return {
    props: {
      stringResponseApi,
      hours
    }
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
