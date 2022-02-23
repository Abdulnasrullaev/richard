import styled from "styled-components";
import bgImage2 from '../../assest/bgImage-2.png'

export const Data = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .data {
    width: 50%;
    text-align: center;
    font-size: 58px;
    line-height: 80px;
    margin: 16px auto;

    span {
      line-height: 24px;
      text-align: center;
      font-size: 18px;
    }
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .data {
      text-align: center;
      margin: 30px auto;
      width: 100%;
      font-size: 50px;
      line-height: 40px;

      span {
        width: 100%;
        line-height: 20px;
      }
    }
  }
`

export const Lists = styled.div`
  width: 100%;
  margin: 120px auto;
  display: flex;

  .list {
    width: 30%;
    margin: 50px auto;

    span {
      font-size: 12px;
      color: #A8A8A8;
      text-transform: uppercase;
    }

    .title-5 {
      font-size: 38px;
    }

    .lorem {
      color: #6B6B6B;

    }
  }

  .hello-again {
    margin: 40px auto;
    width: revert;
    background-size: cover;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    display: table-footer-group;
    .list {
      padding: 10px;
      margin: 20px auto;
      width: fit-content;
    }
  }

  @media screen and (max-width: 480px) {
    width: fit-content;
    padding: 13px;
    text-align: center;
    .hello-again {
      width: 90%;
    }

  }
`

export const LogoCompany = styled.div`
  width: 100%;
  text-align: center;
  color: white;

  .logo {
    width: 94%;
    margin: 40px auto;
  }

  .bgImage {
    width: 100%;
    margin: 20px 0;
    background-size: 100%;

  }

  .bg-Images {
    margin: -62px 0 0 0;
    background-image: url(${bgImage2});
    background-size: 100%;
    text-align: center;
    padding-bottom: 30px;

    p {
      padding: 100px 0 10px 0;
      font-size: 38px;
    }

    button {
      border: none;
      padding: 15px 20px;
      margin: 10px 20px;
      text-transform: capitalize;
      background: transparent;
      border: 1px solid #B04BB3;
      box-sizing: border-box;
      color: white;
    }

    #download {
      background: #FC0A7E;

    }
  }


  @media screen and (max-width: 768px) {
    width: 100%;
    .bg-Images {
      background-size: cover;
      width: 100%;
    }
    .bgImage{
      width: 100%;
    }
  }
  @media screen and (max-width: 480px) {
    width: fit-content;
    text-align: center;
    .logo {
      padding: 10px;
      width: 90%;
    }

    .bgImage {
      width: 100%;
    }
  }
`

export const Footer = styled.div`
  width: 100%;
  margin: -40px 0;
  background: #1B1B1B;
  color: white;
  text-align: center;
  padding-bottom: 30px;

  .get {
    padding: 40px 0 10px 0;
    font-size: 38px;
    line-height: 40px;

    span {
      font-size: 16px;
      color: #6B6B6B;
    }
  }

  #text {
    border: none;
    outline: none;
    padding: 16px 50px;
  }

  button {
    outline: none;
    background: #FC0A7E;
    border: none;
    padding: 16px 30px;
  }

  img {
    margin: 30px auto;
  }

  nav {
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 10px auto;

    li {
      text-align: center;
      text-transform: capitalize;
      margin: 10px 20px;

      a {
        text-decoration: none;
        color: #6B6B6B;
      }
    }
  }

  @media screen and(max-width: 768px) {
    width: fit-content;

    nav {
      width: fit-content;
      margin: 20px auto;
      text-align: center;
    }
  }

  @media screen and(max-width: 480px) {
    .get {
      font-size: 20px;
    }

    #text {
      padding: 8px 40px;
    }
  }

`