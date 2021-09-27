import dark from './images/desktop-dark.jpg'
import light from './images/desktop-light.jpg'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(p=>p.theme === 1 ? '#cacde8' : '#9394a5')};
  background-image: ${(p=>p.theme === 1 ? `url(${dark})` : `url(${light})`)};
  background-size: 100%;
  background-repeat: no-repeat;

  footer {
    display: flex;
    color: hsl(236, 9%, 61%);
  }

`

export const Header = styled.div`
  display: flex;
  align-items: center;

  title {
    margin: 25% 16rem 3rem 0;
    display: flex;
    font-size: 2.2rem;
    font-weight: 700;
    letter-spacing: 1rem;
    color: #fff;
  }

  .sun, .moon {
    margin: 25% 0 3.2rem 0;
    display: flex;
    cursor: pointer;
  }

`
