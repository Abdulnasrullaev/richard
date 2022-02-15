import styled from "styled-components";

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

  img {
    margin: 0px auto;
    width: fit-content;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`