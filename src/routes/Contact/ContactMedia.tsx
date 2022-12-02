import styled from 'styled-components';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { CiMail } from 'react-icons/ci';

export const ContactMedia = () => {
  return (
    <MediaComponent>
      <h2>
        Gostaria de entrar em contato?
        <br />
        Me envie um email ao lado!
      </h2>
      <CiMail size="12rem" />

      <h3>Minhas redes sociais:</h3>
      <div>
        <IconLink
          href="https://github.com/lara-portilho"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoGithub size="2rem" />
          GitHub
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/lara-portilho-marques/"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoLinkedin size="2rem" />
          LinkedIn
        </IconLink>
      </div>
    </MediaComponent>
  );
};

const MediaComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    text-align: center;
  }

  h3 {
    margin-top: 20px;
  }

  div {
    display: flex;
    margin-top: 10px;
  }

  @media screen and (max-width: 1023px) {
    h2,
    h2 + svg {
      display: none;
    }

    h3 {
      margin-top: 0;
    }
  }
`;

const IconLink = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 10px;
  transition: 0.2s ease-in;

  svg {
    margin-right: 5px;
  }

  :hover {
    transform: scale(1.2) perspective(1px);
  }

  :visited,
  :active,
  :link {
    color: var(--white);
  }
`;
