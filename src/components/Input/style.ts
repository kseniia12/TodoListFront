import styled from "styled-components";

export const StyleInput = styled.div<{ lengthTodo: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .title {
    font-size: 80px;
    color: #b83f45;
    font-weight: 200px;
    margin-bottom: 50px;
  }

  .section{
    display: flex;
    align-items: center;
    padding-left: 18px;
  }

  .input {
    margin-top: 20px;
    padding: 16px 16px 16px 60px;
    height: 65px;
    width: 500px;
    font-style: oblique;
    font-size: 24px;
    border: 1px solid #ffffff;
  }
  &:focus-within .section {
    border: 1px solid red; 
  }

  .icon {
    background: ${({ lengthTodo }) => lengthTodo >= 1 ? `url(https://img.icons8.com/?size=100&id=48464&format=png&color=000000)
      center no-repeat` : 'none'};    
    background-size: 30px;
    height: 30px;
    width: 30px;
  }
`;