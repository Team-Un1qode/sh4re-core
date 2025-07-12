import styled from 'styled-components';

export const SidebarLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  width: 18rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.background};
  padding: 24px 20px;
  box-sizing: border-box;
`;
