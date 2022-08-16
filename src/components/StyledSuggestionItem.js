import styled from "styled-components";

const StyledSuggestionItem = styled.li`
  background-color: #ecf5ad;
  border: 2px solid #ecf5ad;
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

export default StyledSuggestionItem;
