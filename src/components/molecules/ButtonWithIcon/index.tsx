/* eslint-disable react/jsx-no-undef */
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

interface StyleProps {
  color?: string
  backgroundColor?: string
}

interface ButtonWithIconProps {
  icon?: string
  children: ReactNode
  style?: StyleProps
}

export default function ButtonWithIcon({
  icon,
  children,
  style
}: ButtonWithIconProps) {
  return (
    <StyledButton style={style}>
      {icon && (
        <div>
          <Image src={icon} width={13} height={13} alt="Icon button" />
        </div>
      )}
      {children}
    </StyledButton>
  )
}

interface StyledButtonProps {
  style: StyleProps
}

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  border-radius: 4px;

  height: 30px;
  width: max-content;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #000;

  font-size: 13px;
  font-weight: 700;

  color: ${({ style }) => (style && style.color ? style.color : '#000')};
  background-color: ${({ style }) =>
    style && style.background ? style.background : '#fff'};

  div {
    margin: 0 8px 0 0;
  }
`
