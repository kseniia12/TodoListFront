import styled from "styled-components";

export const TodoList = styled.div<{ completed: string }>`
  user-select: none;
  height: 58.8px;
  width: 550px;
  font-size: 24px;
  font-weight: 400;
  color: "#00000";
  display: flex;
  border: 0.1px solid #484848;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px 0px 10px;
  
  &:hover {
    .cross {
      visibility: visible;
    }
  }

  &:focus-within .cross {
    visibility: hidden;
  }

  .text {
    display: flex;
    gap: 20px;
    text-decoration: ${({ completed }) => completed === "true" ? "line-through" : 'none'};   
    align-items: center;
    width: 100%;
  }

  .check-box {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: ${({ completed }) => completed === "true" ? `0.4px solid green` : `0.4px solid #484848`};
    background: ${({ completed }) => completed === "true" ? `url(https://img.icons8.com/?size=100&id=115828&format=png&color=000000)
      center no-repeat` : `none`}; ;
    background-size: 20px;
  }

  .item { 
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  .cross {
    visibility: hidden;
    display: flex;
    align-items: center;
    width: 30px;
    justify-content: space-between;
  }

  .input-form{
    border: 1px solid red;
    width: 680px;
    height: 57px;
  }
`;