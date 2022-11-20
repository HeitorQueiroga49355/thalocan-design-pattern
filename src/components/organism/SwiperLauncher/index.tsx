import React, { useRef } from 'react'
import { Swiper } from 'swiper/react'
import 'swiper/css'

export default function SwiperLauncher() {
  const swiperRef = useRef<any>()

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSwiper={swiper => {
        swiperRef.current = swiper
      }}
    ></Swiper>
  )
}
