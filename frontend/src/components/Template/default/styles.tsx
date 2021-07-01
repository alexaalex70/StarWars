import styled from "styled-components";

const DefaultPageContainer = styled.div`
  padding: 24px;
`;

const DefaultGridView = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(280px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
`;

export { DefaultPageContainer, DefaultGridView };
