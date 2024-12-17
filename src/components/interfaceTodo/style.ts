import styled from "styled-components";

export const StyleForAllProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 80px;
    color: #b83f45;
    font-weight: 200;
  }
  .section-input-noactiv {
    border: 1px solid (255, 0, 0, 0.1);
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
  .section-input-activ {
    border: 1px solid red;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
  .no-activ-form-input {
    height: 60px;
    width: 489px;
  }
  .activ-form-input {
    border: 1px solid red;
    height: 60px;
    width: 489px;
  }
  .activ-icon {
    background: url(https://img.icons8.com/?size=100&id=48464&format=png&color=000000)
      center no-repeat;
    background-size: 30px;
    height: 30px;
    width: 30px;
  }
  .no-activ-icon {
    visibility: hidden;
  }
  .input {
    margin-top: 20px;
    padding: 16px 16px 16px 60px;
    height: 65px;
    width: 498px;
    font-style: oblique;
    font-size: 24px;
    border: 1px solid #ffffff;
  }
`;