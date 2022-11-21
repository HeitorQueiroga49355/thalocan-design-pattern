import styled from 'styled-components'

export const StyledSecondLayer = styled.div`
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

export const SlideContent = styled.a`
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
