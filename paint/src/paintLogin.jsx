import React from "react";
import styled from "styled-components";
import Logo from './svg/logo.svg';
import Look from './svg/look.svg';
 
function PaintLogin(){
  return(
    <>
    <Body>
      <Main>
        <Header>
          <LogoDiv>
            <LogoImg src={Logo} alt="logo"/>
          </LogoDiv>
          <LoginJoin>
            <Login><LoginButton>로그인</LoginButton></Login>
            <Join><JoinButton>회원가입</JoinButton></Join>
          </LoginJoin>
        </Header>
        <BodyMain>
          <Section>
            <BigFont>로그인</BigFont>
            <Legend>아이디</Legend>
              <LoginInput
              placeholder="아이디"
              >  
              </LoginInput>
            <Legend>비밀번호</Legend>
              <JoinInput
              placeholder="비밀번호"
              >
              </JoinInput>
              <ButtonDiv>
                <Button>로그인 →</Button>
              </ButtonDiv>
          </Section>
        </BodyMain>
      </Main>
    </Body>
    </>
  );
}

export default PaintLogin;


const Main = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  `;

const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  `;

const LogoDiv = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  margin-left: 30px;
  `;

const LogoImg = styled.img`
  height: 60px;
  `;

const LoginJoin = styled.div`
  display: flex;
  width: 300px;
  `;

const Login = styled.div`
`;

const Join = styled.div`
  
  `;

const LoginButton = styled.button`
  border: none;
  border-radius: 5px;
  width:100px;
  height: 40px;
  background-color: #fff;
  font-weight: 600;
  `;

const JoinButton = styled.button`
  background-color:#00B7A4;
  border: none;
  border-radius: 5px;
  width:100px;
  height: 40px;
  color: #fff;
  font-weight: 600;
  `;

  const Body = styled.div`
  `;

const BodyMain = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
`;

const Section =styled.div`
margin-top: 40px;
height: 100%;
width: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const BigFont = styled.div`
  font-size: 30px;
  font-weight: 1000;
  margin-bottom: 70px;
`;

const Legend = styled.div`
  font-weight: 600;
`;

const LoginInput = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 7px;
  outline: none;
  background: #EFF0F0;
  border: #fff;
  margin-bottom: 30px;
`;

const JoinInput = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 7px;
  outline: none;
  background: #EFF0F0;
  border: #fff;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
`;

  const Button = styled.button`
    background: #00B7A4;
    width: 400px;
    height: 40px;
    margin-top: 70px;
    border-radius: 7px;
    border: none;
    font-size: 15px;
    color: #fff;
    font-weight: 500;
  `;