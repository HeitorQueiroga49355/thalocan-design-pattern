import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { StyledContentLayerContainer } from '../index'
import { StyledFirstLayer } from './styles'
import IconSearchDsk from '../../../../../public/assets/icons/IconSearchDsk.svg'
import IconUser from '../../../../../public/assets/icons/IconUser.svg'

export default function FirstLayer() {
  return (
    <StyledFirstLayer>
      <StyledContentLayerContainer className="first-layer">
        <h1>Logo</h1>
        <div className="first-layer-actions">
          <Link href={'https://google.com'}>
            <a> Mobile app</a>
          </Link>
          <div className="wrapper-input">
            <input type="text" placeholder="Search" />
            <Image src={IconSearchDsk} alt="Magnifying glass icon" />
          </div>
          <button>
            <div className="user-icon-wrapper">
              <Image src={IconUser} alt="User icon" />
            </div>
            Account
          </button>
        </div>
      </StyledContentLayerContainer>
    </StyledFirstLayer>
  )
}
