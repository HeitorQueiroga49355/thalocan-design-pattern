import React from 'react'
import styled from 'styled-components'

export default function Home() {
  return (
    <Wrapper>
      Welcome to the frontend design patterns tutorial that will be used at
      thalocan!! Below will be listed the links to the pages to be analyzed.
      Good studies 😁😁😁
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 20px;
  height: 100vh;
  align-items: center;
`
