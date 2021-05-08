import { createGlobalStyle } from 'styled-components'
// import FontOpenSans from 'assets/fonts/OpenSans-Regular.ttf'

export default createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Open Sans', sans-serif;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    overflow-x: hidden;
  }
  body {
    scroll-behavior: smooth;

  }
  html, body {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    background-color: #fff;
  }

  html.noOverflow {
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  p {
    font-weight: 300;
  }

  ::selection {
    background: #018cb7;
    color: #fff;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
  }

  .main-content {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;

    @media screen and (max-width: 1280px) {
      margin-top: 14px;
    }
  }

  &::-webkit-scrollbar {
    height: 7px;
    width: 7px;
    background-color: #fff;
    border-radius: 7px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-color: #fff;
  }

  .with-custom-scroll {
    &::-webkit-scrollbar {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #fff;
    }
  }
`
