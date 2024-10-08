import { useState } from 'react'
import './JoinPage.css'
import Logo from './svg/logo.svg'
import { Link } from 'react-router-dom' 

function Join() {
  return (
    <div className='JoinMain'>
      <div className='JoinHeader'>
        <img className='JoinImg' src={Logo} width={60}/>
        <div className='JoinButton'>
          <div className='PageLoginButton'><Link to='/Login' style={{textDecoration:'none', color:'black'}}>로그인</Link></div>
          <div className='PageJoinButton'><Link to='/join' style={{textDecoration:'none', color:'#fff'}}>회원가입</Link></div>
        </div>
      </div>
      <div className='JoinPageMain'></div>
    </div>
  )
}

export default Join