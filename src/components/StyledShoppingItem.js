import styled from "styled-components";

const StyledShoppingItem = styled.li`
  background-color: #c0edff;
  border: 2px solid #c0edff;
  width: 100px;
  border-radius: 30px;
  margin: 10px;
  padding: 10px;
  list-style: none;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: transparent;
  }
`;

export default StyledShoppingItem;
