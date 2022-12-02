import styled from 'styled-components';
import { ContactForm } from './ContactForm';
import { ContactMedia } from './ContactMedia';

export const Contact = () => {
  return (
    <ContactContainer>
      <ContactMedia />
      <ContactForm />
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  width: 100%;
  height: calc(100vh - var(--global-padding-2));
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 1 1 0;
  align-self: stretch;
  background-color: var(--dark-gray);
  box-shadow: 1px 1px var(--blue), 2px 2px var(--blue), 3px 3px var(--blue);
  border-radius: var(--radius-page);

  h2 {
    margin-bottom: 15px;
    font-size: 1.4rem;
  }

  & > div:not(:first-child) {
    margin-left: 8rem;
  }

  @media screen and (max-width: 1023px) {
    height: auto;
    justify-content: flex-start;
    flex-direction: column;
    padding: 2rem 0;

    & > div:not(:first-child) {
      margin-top: 2rem;
      margin-left: 0;
    }
  }
`;
