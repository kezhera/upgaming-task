import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: p-reg;
    font-weight: 400;
    src: url(./font/Poppins-Regular.ttf);
    font-display : swap;
  }

  @font-face {
    font-family: p-bold;
    font-weight: bold;
    src: url(./font/Poppins-Bold.ttf);
    font-display : swap;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: p-reg;
    line-height: 100%;
  }
  
  body{
    background-color: #383838;
  }

  a{
    text-decoration: none;
  }

  ul , li{
    list-style-type: none;
  }

  button{
    background-color: transparent;
    border : none; 
    outline: none;
    cursor: pointer;
  }

  .hide{
    display: none;
  }
`

export default GlobalStyle