import styled from "styled-components";
export const TodoList = styled.div`
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
  .strikethrough-text {
    display: flex;
    gap: 20px;
    text-decoration: line-through;
    align-items: center;
    width: 100%;
  }
  .not-strikethrough-text {
    display: flex;
    gap: 20px;
    align-items: center;
    width: 100%;
  }
  .unfulfilled-task {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 0.4px solid #484848;
  }
  .completed-task {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 0.4px solid green;
    background: url(https://img.icons8.com/?size=100&id=115828&format=png&color=000000)
      center no-repeat;
    background-size: 20px;
  }
  .activ-todo {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  .no-activ-cross {
    visibility: hidden;
    display: flex;
    align-items: center;
    width: 30px;
    justify-content: space-between;
  }
  .activ-cross {
    width: 30px;
  }
`;