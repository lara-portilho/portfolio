import { BaseSyntheticEvent } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

type ContactFormData = {
  name: string;
  email: string;
  about: string;
  message: string;
};

export const ContactForm = () => {
  const { register, handleSubmit } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      about: '',
      message: '',
    },
  });

  const onSubmit = (
    data: ContactFormData,
    e: BaseSyntheticEvent | undefined,
  ) => {
    console.log(data);
    e?.target.reset();
  };
  return (
    <FormComponent onSubmit={handleSubmit(onSubmit)}>
      <Divider />
      <h2>Entre em contato!</h2>
      <label htmlFor="name">Seu nome</label>
      <input
        id="name"
        type="text"
        placeholder="Seu Nome Aqui"
        {...register('name', {
          required: true,
        })}
      />
      <label htmlFor="email">Seu email</label>
      <input
        id="email"
        type="email"
        placeholder="exemplo@exemplo.com"
        {...register('email', {
          required: true,
        })}
      />
      <label htmlFor="about">Assunto</label>
      <input
        id="about"
        type="text"
        placeholder="Seu assunto"
        {...register('about', {
          required: true,
        })}
      />
      <label htmlFor="message">Mensagem</label>
      <textarea
        id="message"
        placeholder="Sua mensagem aqui..."
        {...register('message', {
          required: true,
        })}
      />
      <button type="submit">Enviar</button>
    </FormComponent>
  );
};

const Divider = styled.div`
  display: none;

  @media screen and (max-width: 1023px) {
    display: block;
    width: 100%;
    height: 0;
    margin: 30px 0;
    border: 0.5px solid var(--white);
  }
`;

const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  width: 26rem;

  h2 {
    display: none;
  }

  & > input,
  & > textarea {
    background-color: var(--white);
    border-radius: var(--radius-input);
    border: none;
    outline: none;
    padding: 8px;
  }

  & > label:not(:first-child) {
    margin-top: 15px;
  }

  & > input:not(:first-child) {
    margin-top: 5px;
  }

  & > textarea {
    height: 10rem;
    margin-top: 5px;
    font-family: var(--primary-font);
    font-size: 12px;
  }

  & > button {
    padding: 8px;
    margin-top: 15px;
    width: 30%;
    align-self: flex-end;
    border: 2px solid var(--blue);
    background: none;
    color: var(--white);
    border-radius: var(--radius-button);
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.5s;
    background-size: 200% 100%;
    background-image: linear-gradient(
      to left,
      var(--blue) 50%,
      transparent 50%
    );
  }

  & > button:hover {
    background-position: -100% 0;
  }

  @media screen and (max-width: 1023px) {
    width: auto;

    h2 {
      display: block;
      margin-bottom: 0;
    }

    & > button {
      background: var(--blue);
      width: 60%;
    }
  }
`;
