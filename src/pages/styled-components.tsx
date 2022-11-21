import React from 'react'
import styled from 'styled-components'
import FooterExample from '../components/organism/FooterExample'

export default function styledComponents() {
  return (
    <StyledContainerPage>
      <StyledH1>
        Study how the styled-component was used in this component below
      </StyledH1>
      <FooterExample />
    </StyledContainerPage>
  )
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
