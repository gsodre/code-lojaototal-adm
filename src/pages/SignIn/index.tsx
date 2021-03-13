import React, { useCallback, useRef } from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/images/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Wrapper, Content } from './styles';

interface SignInFormData {
  user: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          user: Yup.string().required('Informe o Usuário'),
          password: Yup.string().required('Informe a Senha'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          user: data.user,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Ops... um erro.',
          description: 'Ocorreu um erro ao fazer o login!',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Wrapper>
      <Content>
        <img src={logo} alt="Lojão Total" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="user" icon={FiUser} type="text" placeholder="Usuário" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
        </Form>
      </Content>
    </Wrapper>
  );
};

export default SignIn;
