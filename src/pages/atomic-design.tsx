import React from 'react'
import styled from 'styled-components'
import CorrectHeader from '../components/organism/CorrectVersionHeader'
import SwiperLauncher from '../components/organism/SwiperLauncher'
import IconUser from '../../public/assets/icons/IconUser.svg'
import WrongVersionHeader from '../components/organism/WrongVersionHeader'

export default function AtomicDesign() {
  return (
    <StyledContainerPage>
      <StyledH1>Correct made component</StyledH1>
      <CorrectHeader />
      <StyledH1>Poorly made component</StyledH1>
      <WrongVersionHeader />
      {/* For some reason it had to have some slide outside the header for the header slide to work */}
      <SwiperLauncher />
    </StyledContainerPage>
  )
}

const StyledH1 = styled.h1`
  font-family: 'Fira Code';
  font-weight: 400;

  margin: 0 0 30px 0;
`

const StyledContainerPage = styled.main`
  height: 100vh;

  background-color: #d4d4d4;
`
