import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import IconSearchDsk from '../../../../public/assets/icons/IconSearchDsk.svg'
import IconUser from '../../../../public/assets/icons/IconUser.svg'
import ButtonWithIcon from '../../molecules/ButtonWithIcon'
import {
  StyledFirstLayer,
  StyledContentLayerContainer,
  StyledSecondLayer,
  StyledThirdLayer
} from './styles'

export default function CorrectVersionHeader() {
  const swiperRef = useRef<unknown>()

  return (
    <header>
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
            <ButtonWithIcon
              icon={IconUser}
              style={{ backgroundColor: '#c22637' }}
            >
              Account
            </ButtonWithIcon>
          </div>
        </StyledContentLayerContainer>
      </StyledFirstLayer>
      <StyledSecondLayer className="second-layer">
        <StyledContentLayerContainer>
          <button className="previous-slide">{'<'}</button>
          <Swiper
            spaceBetween={0}
            slidesPerView={13}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => (swiperRef.current = swiper)}
            direction="horizontal"
          >
            {[
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18
            ].map(element => {
              return (
                <SwiperSlide key={element}>
                  <ButtonWithIcon
                    style={{ backgroundColor: '#36373b', color: '#fff' }}
                    icon={IconUser}
                  >
                    Example
                  </ButtonWithIcon>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <button className="next-slide">{'>'}</button>
        </StyledContentLayerContainer>
      </StyledSecondLayer>
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
    </header>
  )
}
