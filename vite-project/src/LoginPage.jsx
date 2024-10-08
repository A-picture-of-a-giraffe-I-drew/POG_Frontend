import { useState } from 'react'
import './LoginPage.css'
import Logo from './svg/logo.svg'
import { Link, useNavigate } from 'react-router-dom'

function App() {
  
  const [id, setid] = useState({
    userId:"",
  });

  const onChange = e =>{
    setid(e.target.value);
    console.log(e.target.value);
  }

  const [passward, setpassward] = useState({
    userPassword:"",
  })

  const onChangePass = e =>{
    setpassward(e.target.value);
    console.log(e.target.value);
  }

  const [form, setform] = useState();
  const nav = useNavigate();
  const handleClick = () => {
    if(id.userId !== "" && id.userPassword !== ""){
      nav('/',{state:{form}});
    }
  }

  return (
    <div className='LoginMain'>
      <div className='LoginHeader'>
        <img className='LogoImg' src={Logo} width={60}/>
        <div className='button'>
          <div className='loginButton'><Link to='/Login' style={{textDecoration:'none', color:'black'}}>로그인</Link></div>
          <div className='joinButton'><Link to='/join' style={{textDecoration:'none', color:'#fff'}}>회원가입</Link></div>
        </div>
      </div>
      <div className='LoginPageMain'>
        <div className='LoginBody'>
          <div className='LoginFont'>로그인</div>
          <div className='Input'>
            <legend className='Legend'>
              <strong>아이디</strong>
              <input className='LoginInput'
              type='text'
              name='userId'
              value={id.userId}
              onChange={onChange}
              placeholder='아이디'
              ></input>
            </legend>
            <legend className='Legend'>
              <strong>비밀번호</strong>
              <input className='passwardInput'
              type='password'
              name='userpasswoed'
              value={passward.userPassword}
              onChange={onChangePass}
              placeholder='비밀번호'
              ></input>
            </legend>
            <button className='LoginButton' onClick={handleClick}>로그인 →</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
