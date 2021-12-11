import styled from "styled-components";

export const StyledDetailPage = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: 1200px) {
    flex-direction: row;

    & > section:first-child {
      flex: 0 0 60%;
    }
  }
`;
