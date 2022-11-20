import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import styled from 'styled-components'
import IconSearchDsk from '../../../../public/assets/icons/IconSearchDsk.svg'
import IconUser from '../../../../public/assets/icons/IconUser.svg'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function CorrectHeader() {
  const swiperRef = useRef<any>()

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
            <button>
              <div className="user-icon-wrapper">
                <Image src={IconUser} alt="User icon" />
              </div>
              Account
            </button>
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

const StyledFirstLayer = styled.div`
  width: 100%;
  height: 47.5px;

  display: flex;
  justify-content: center;

  font-family: Arial;

  background: #2d2e30;

  a {
    font-family: Arial;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;

    color: rgb(255, 255, 255);

    margin: 0px 12px;

    cursor: pointer;
  }

  h1 {
    font-size: 25px;
    color: #fff;

    display: flex;
    align-items: center;
  }

  div.first-layer-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 426px;
  }

  button {
    background: #c22637;

    color: #fff;
    font-weight: bold;

    width: 95px;
    height: 33px;

    border: none;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  div.user-icon-wrapper {
    margin: 0 8px 0 0;
  }

  input {
    border: none;

    width: 180px;
    height: 19px;

    margin: 0 0 0 5px;
  }

  div.wrapper-input {
    background: #fff;

    width: 212px;
    height: 33px;

    border-radius: 4px;

    display: flex;
    align-items: center;
  }
`

const StyledContentLayerContainer = styled.div`
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

const StyledSecondLayer = styled.div`
  width: 100%;
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #211e1e;

  button {
    background: rgb(90, 93, 98);

    font-weight: 800;
    font-size: 20px;

    border: none;

    width: 25px;
    height: 30px;

    color: #fff;
  }

  button.next-slide {
    border-radius: 0 4px 4px 0;
  }

  button.previous-slide {
    border-radius: 4px 0 0 4px;
  }
`

const SlideContent = styled.a`
  display: flex;

  height: 30px;
  width: max-content;

  padding: 8px;

  background: #36373b;
  border-radius: 4px;

  font-weight: 800;
  font-size: 13px;
  color: #fff;

  div.icon-wrapper {
    margin: 0 5px 0 0;
  }
`

const StyledThirdLayer = styled.div`
  background: #fff;

  height: 45px;

  display: flex;
  justify-content: center;

  nav {
    width: 100%;

    font-family: Arial;
    font-weight: 500;
    font-size: 13px;
    color: rgb(83, 84, 89);
  }

  li {
    list-style: none;

    padding: 0;
    margin: 0 24px 0 0;

    width: 57.83px;
  }

  ul {
    display: flex;

    margin: 0;
    padding: 0;
  }
`
