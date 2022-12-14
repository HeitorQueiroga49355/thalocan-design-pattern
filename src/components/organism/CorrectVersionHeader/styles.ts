import styled from 'styled-components'

export const StyledFirstLayer = styled.div`
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

export const StyledSecondLayer = styled.div`
  width: 100%;
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #211e1e;

  button.next-slide,
  button.previous-slide {
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

export const StyledThirdLayer = styled.div`
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
