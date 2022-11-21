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
