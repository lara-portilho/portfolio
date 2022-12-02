import styled from 'styled-components';
import { IoMdHome, IoMdPerson, IoMdCode, IoMdMail } from 'react-icons/io';
import { SidebarItem } from './SidebarItem';

export const Sidebar = () => {
  const sidebarIconSize = '40px';

  return (
    <SidebarComponent>
      <SidebarItem
        pageName="Home"
        to="/"
        icon={<IoMdHome color="var(--white)" size={sidebarIconSize} />}
      />

      <SidebarItem
        pageName="Sobre mim"
        to="/about"
        icon={<IoMdPerson color="var(--white)" size={sidebarIconSize} />}
      />
      <SidebarItem
        pageName="Projetos"
        to="/projects"
        icon={<IoMdCode color="var(--white)" size={sidebarIconSize} />}
      />
      <SidebarItem
        pageName="Contato"
        to="/contact"
        icon={<IoMdMail color="var(--white)" size={sidebarIconSize} />}
      />
    </SidebarComponent>
  );
};

const SidebarComponent = styled.nav`
  height: 100vh;
  width: var(--sidebar-width);
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 1023px) {
    width: 100vw;
    background-color: var(--gray);
    height: var(--sidebar-height-responsive);
    flex-direction: row;
    bottom: 0;
    justify-content: space-around;

    & > * {
      margin-bottom: 0;
    }
  }
`;
