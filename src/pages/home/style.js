import styled from "styled-components";

export const Navbar = styled.div`
  width: 100%;
  background: linear-gradient(287.15deg, #450E4B 0%, #3C0C41 24.48%, rgba(207, 0, 99, 0) 100%),
  linear-gradient(0deg, #CF0063, #CF0063);
  display: flex;
  justify-content: space-between;

  img {
    width: fit-content;
    margin: 17px 80px;
    height: fit-content;
  }

  nav {
    width: fit-content;
    text-transform: capitalize;
    margin: 27px auto;
    display: flex;
    list-style: none;

    li {
      margin: 0px 20px;

      a {
        text-decoration: none;
        color: white;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    img{
      margin: 20px;
      width: 14%;
    }
    nav{
      margin: 24px auto;
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    display: flow-root;
    img{
      width: fit-content;
      margin: 20px 160px;
    }
    nav{
      display: grid;
      margin: 24px auto;
   li{
     margin: 10px auto;
   }
    }
  }
`;

export const Homes = styled.div`
  width: 100%;
  display: flex;
  color: white;
  background: linear-gradient(287.15deg, #450E4B 0%, #3C0C41 24.48%, rgba(207, 0, 99, 0) 100%),
  linear-gradient(0deg, #CF0063, #CF0063);

  .text {
    margin: 50px 80px;

    .logo {
      font-size: 80px;
      width: fit-content;
      padding: 0;
    }

    .launch {
      margin: -60px 0 20px 0;
      font-size: 30px;
    }

    button {
      background: #FC0A7E;
      border: none;
      border-radius: 3px;
      color: white;
      font-size: 16px;
      margin: -1010px 0;
      padding: 16px 30px;
    }
  }

  .image-1 {
    margin: 20px 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    display: flow-root;
    .text{
      width: fit-content;
      margin: 50px auto;
      button{
        margin: 20px auto;
      }
      .logo{ font-size: 60px;
      }
      .launch{
        font-size: 18px;
      margin: -40px 0 20px 0;
      }
    }
    .image-1{
      width: 70%;
      position: center;
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    align-items: center;
    text-align: center;
    display: flow-root;
    .text{
      text-align: center;
      width: fit-content;
      .logo{
        line-height: 120px;
        margin: auto;
        font-size: 35px;
        padding: 40px 0;
      }
      .launch{
        padding: 20px 0;
        font-size: 18px;
      }
    }
    .image-1{
      width: 90%;
      margin: 10px auto;
    }
  }
`

export const SectionTwo = styled.div`
  width: 100%;
  color: white;
  margin: -12px 0px 10px 0;
  background: #1B1B1B;

  .title {
    padding: 55px 0;
    text-align: center;
    font-size: 12px;
    width: 50%;
    margin: auto;

    span {
      padding: 20px 0;
      font-size: 38px;
    }
  }

  img {
    width: 100%;
    background: transparent;
    margin: 0px auto;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    text-align: center;
    .title{
      font-size: 20px;
      span{
        font-size: 18px;
        margin: 30px 0;
      }
    }
  }
`

export const SectionThree = styled.div`
  width: 100%;
  margin: 70px 0;
  display: flex;
  justify-content: center;

  .titlee {
    color: #A8A8A8;

    margin: 120px auto;
    padding: 30px 10px;

    .text-1 {
      color: black;
      font-size: 38px;
    }

    .text-2 {
      color: #6B6B6B;

    }
  }

  img {
    margin: 10px auto;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    text-align: center;
   display: flow-root;
    .title{
      width: 100%;
      line-height: 30px;
    }
  }
`

export const SectionFour = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .card {
    width: 28%;
    text-align: center;
    margin: 20px auto;

    .title-4 {
      font-weight: bold;
      font-size: 18px;
      text-transform: capitalize;
    }

    .details {
      color: #6B6B6B;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    text-align: center;
    display: flow-root;
    .card{
      width: fit-content;
      margin: 40px 0;
    text-align: center;
      .title-4{
        margin: 30px auto;
      width: fit-content;
    }
      
    }
  }
`