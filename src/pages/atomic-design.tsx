import React from 'react'
import styled from 'styled-components'
import CorrectHeader from '../components/organism/CorrectHeader'

export default function AtomicDesign() {
  return (
    <>
      <StyledH1>Poorly made component</StyledH1>
      <CorrectHeader />
    </>
  )
}

const StyledH1 = styled.h1`
  font-family: 'Fira Code';
  font-weight: 400;

  margin: 0 0 30px 0;
`
