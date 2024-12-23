import styled from "styled-components";
export const StylesforFooter = styled.div<{ numberCompletedTasks: number }>`
  font-size: 15px;
  height: 50px;
  width: 550px;
  border: 0.4px solid #484848;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .button-clear-active-todos {
    border: none;
    padding: 5px;
    visibility: ${({ numberCompletedTasks }) => numberCompletedTasks >= 1 ? "visible" : 'hidden'};  
  }

  .buttons{
    display: flex;
    gap: 20px;
  }
  
  .button-filter {
    padding: 5px;
    border: 1px solid red;
  }
`;