import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

type SidebarItemProps = {
  to: string;
  pageName: string;
  icon: React.ReactElement;
};

export const SidebarItem = ({ to, pageName, icon }: SidebarItemProps) => {
  const router = useRouter();
  const isActive = router.pathname === to ? 'isActive' : '';

  return (
    <StyledLink href={to} className={isActive}>
      {icon}
      <span>{pageName}</span>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  color: var(--white);
  width: 10rem;
  display: flex;
  align-items: center;
  transition: 0.2s ease-out;
  text-decoration: none;
  padding: 8px;
  border-radius: var(--radius-button);

  &.isActive {
    background-color: var(--dark-gray);
    box-shadow: 1px 1px var(--blue), 2px 2px var(--blue), 3px 3px var(--blue);
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
  }

  :hover {
    background-color: var(--dark-gray);
    box-shadow: 1px 1px var(--blue), 2px 2px var(--blue), 3px 3px var(--blue);
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
  }

  span {
    color: var(--white);
    font-family: var(--secondary-font);
    margin-left: 12px;
    text-decoration: none;
  }

  @media screen and (max-width: 1023px) {
    width: auto;
    span {
      display: none;
      margin-left: 0;
    }
  }
`;
