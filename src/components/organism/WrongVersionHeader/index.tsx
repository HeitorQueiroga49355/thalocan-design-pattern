import React from 'react'
import styled from 'styled-components'
import FirstLayer from './FirstLayer'
import SecondLayer from './SecondLayer'
import ThirdLayer from './ThirdLayer'

export default function FirstVersionHeader() {
  return (
    <header>
      <FirstLayer />
      <SecondLayer />
      <ThirdLayer />
    </header>
  )
}

export const StyledContentLayerContainer = styled.div`
  display: flex;

  width: 1292px;
  max-width: 1292px;

  &.first-layer {
    justify-content: space-between;
  }

  &.third-layer {
    align-items: center;
  }
`
