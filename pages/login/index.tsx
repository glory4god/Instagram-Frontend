import Head from 'next/head';
import styled from '@emotion/styled';
import LoginImage from 'components/login/LoginImage';

const Login = () => {
  return (
    <>
      <Head>
        <title>instagram</title>
        <meta name="description" content="instagram" />
      </Head>

      <LoginMain role="main">
        <article>
          <LoginImage />
          <LoginWrapper>
          </LoginWrapper>
        </article>
      </LoginMain>
    </>
  );
};

export default Login;

const LoginMain = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-contnet: center;
  align-items: center;
  & > article {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: center;
    margin: 32px auto 0;
    max-width: 935px;
    padding-bottom: 32px;
    width: 100%;
    height: 100%;
  }
`;

const LoginWrapper = styled.div`
  color: #262626;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin-top: 12px;
  max-width: 350px;
`;