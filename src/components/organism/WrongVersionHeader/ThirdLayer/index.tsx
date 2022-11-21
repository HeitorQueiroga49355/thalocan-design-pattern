import React from 'react'
import { StyledContentLayerContainer } from '..'
import { StyledThirdLayer } from './styles'

export default function ThirdLayer() {
  return (
    <StyledThirdLayer>
      <StyledContentLayerContainer className="third-layer">
        <nav>
          <ul>
            <li>Page</li>
            <li>Page</li>
            <li>Page</li>
          </ul>
        </nav>
      </StyledContentLayerContainer>
    </StyledThirdLayer>
  )
}
