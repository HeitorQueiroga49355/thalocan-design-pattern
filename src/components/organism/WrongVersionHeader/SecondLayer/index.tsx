import Image from 'next/image'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { StyledContentLayerContainer } from '../index'
import { SlideContent, StyledSecondLayer } from './styles'
import IconUser from '../../../../../public/assets/icons/IconUser.svg'

export default function SecondLayer() {
  const swiperRef = useRef<unknown>()

  return (
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
                <SlideContent>
                  <div className="icon-wrapper">
                    <Image src={IconUser} alt="Image Example" />
                  </div>
                  Example
                </SlideContent>
              </SwiperSlide>
            )
          })}
        </Swiper>
        <button className="next-slide">{'>'}</button>
      </StyledContentLayerContainer>
    </StyledSecondLayer>
  )
}
