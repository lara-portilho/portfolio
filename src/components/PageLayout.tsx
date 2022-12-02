import styled from 'styled-components';

export const PageLayout = styled.div`
  margin-left: var(--sidebar-width);
  padding: var(--global-padding);

  @media screen and (max-width: 1023px) {
    margin-left: 0;
    margin-bottom: var(--sidebar-height-responsive);
  }
`;
