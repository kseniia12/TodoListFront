import styled from "styled-components";
export const StylesforFooter = styled.div`
  padding-left: 20px;
  font-size: 15px;
  height: 50px;
  width: 550px;
  border: 0.4px solid #484848;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .buttons-filter {
    display: flex;
    gap: 20px;
  }
  .button-filter-activ {
    border: 1px solid red;
    padding: 5px;
  }
  .button-clear-active {
    border: none;
    padding: 5px;
  }
  .button-clear-hidden {
    border: none;
    padding: 5px;
    visibility: hidden;
  }
`;