import React from "react";
import './mainPage.css'
import { Link } from "react-router-dom";
import Logo from './svg/logo.svg';
import Reversal from "./svg/Reversal.svg";

function Main(){
  return(
    <div className="Main">
      <div className="Header">
        <img src={Logo} width={60}/>
        <div className='MainJoinButton'>
          <div className='MainPageLoginButton'><Link to='/Login' style={{textDecoration:'none', color:'black'}}>로그인</Link></div>
          <div className='MainPageJoinButton'><Link to='/join' style={{textDecoration:'none', color:'#fff'}}>회원가입</Link></div>
        </div>
      </div>
      <div className="MainBody">
        <div className="Body">
          <div className="MainFont">쉽고 간편하게 완성하는 그림</div>
          <div className="MainFont">혁명적인 그림판</div>
          <div className="MainFontSmall">내가 그린 기린 그림으로</div>
          <div className="MainFontSmall2">당신의 멋진 그림을 완성해보세요!</div>  
        </div>
      </div>
        <div className="MainFooter">
          <div className="MainButton">
            <button className="startButton">로그인 후 시작하기 →</button>
          </div>
          <img src={Reversal} width={220} className="ReversalImg"/>
        </div>
        <div className="Section"></div>
    </div>
  )
}

export default Main