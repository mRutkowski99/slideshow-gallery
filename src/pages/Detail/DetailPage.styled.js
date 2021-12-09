import styled from "styled-components";

export const StyledDetailPage = styled.main`
  padding: 2rem;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;

    & > section:first-child {
      flex: 0 0 60%;
    }
  }
`;
