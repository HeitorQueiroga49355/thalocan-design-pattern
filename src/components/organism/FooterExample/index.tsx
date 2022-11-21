import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import LogoFooterWithName from '../../../../public/assets/imgs/LogoFooterWithName.png'
import Facebook from '../../../../public/assets/imgs/socialMediaIcons/Facebook.png'
import Instagram from '../../../../public/assets/imgs/socialMediaIcons/Instagram.png'
import Twitter from '../../../../public/assets/imgs/socialMediaIcons/Twitter.png'
import Youtube from '../../../../public/assets/imgs/socialMediaIcons/Youtube.png'

export default function Footer() {
  return (
    <StyledFooter>
      <CompanyInformation>
        <div className="logo-and-email">
          <div className="wrapper-logo-image">
            <Image
              src={LogoFooterWithName}
              alt={'Logo da Paglaum'}
              layout="fill"
            />
          </div>
          <div className="text">Site description</div>
          <address className="text email">communicative@paglaum.io</address>
        </div>
        <span></span>
        <StyledFooterDivision>
          <div className="title-footer-division">Solutions</div>
          <div className="element-footer-division">Be part of it</div>
          <div className="element-footer-division">Partners</div>
        </StyledFooterDivision>
        <span></span>
        <StyledFooterDivision>
          <div className="title-footer-division">Institutional</div>
          <div className="element-footer-division">About Us</div>
          <div className="element-footer-division">Help</div>
          <div className="element-footer-division">Contact</div>
        </StyledFooterDivision>
        <span></span>
        <StyledFooterDivision>
          <div className="title-footer-division">Help Center</div>
          <div className="element-footer-division">Privacy Policy</div>
          <div className="element-footer-division">Help Center</div>
        </StyledFooterDivision>
      </CompanyInformation>
      <SecondLayerFooter>
        <span>© Copyright 2022. All rights reserved</span>
        <div className="social-media">
          <a target="_blank" rel="noreferrer" href="https://instagram.com">
            <Image src={Instagram} alt="Logo do Insta" layout="fill" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com">
            <Image src={Twitter} alt="Logo do Twitter" layout="fill" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://facebook.com">
            <Image src={Facebook} alt="Logo do Face" layout="fill" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://youtube.com">
            <Image src={Youtube} alt="Logo do Youtube" layout="fill" />
          </a>
        </div>
      </SecondLayerFooter>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  width: 100%;
  height: 315px;

  background: #280633;

  padding: 48px 0 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const CompanyInformation = styled.div`
  display: grid;
  grid-template-columns: 251px 200px 88px 188px 117px 188px 184px;
  height: 147px;

  div.logo-and-email {
    width: 251px;
    height: 143px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  div.text,
  address.text {
    font-family: 'Poppins';
    font-size: 16px;
    line-height: 24px;

    color: #d3c7db;
  }

  address.email {
    font-weight: 700;
    font-style: normal;

    color: #fbf5ff;
  }

  div.wrapper-logo-image {
    position: relative;
    width: 167px;
    height: 47px;
  }
`

const SecondLayerFooter = styled.div`
  display: flex;
  justify-content: space-between;

  height: 24px;
  width: 1216px;

  margin: 48px 0 0 0;

  span {
    font-family: 'Poppins';
    font-size: 15.5px;
    line-height: 24px;

    color: #d3c7db;
  }

  div.social-media {
    width: 168px;

    display: flex;
    justify-content: space-between;
  }

  a {
    position: relative;
    width: 24px;
    height: 24px;
  }

  img {
    object-fit: contain;
  }
`

const StyledFooterDivision = styled.div`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;

  color: #fbf5ff;

  div.element-footer-division {
    font-family: 'Poppins';
    font-size: 15px;
    line-height: 24px;
    font-weight: 400;

    color: #d3c7db;

    margin: 16px 0 0 0;

    cursor: pointer;
  }

  div.element-footer-division:hover {
    opacity: 0.5;
  }
`
