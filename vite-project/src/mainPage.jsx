import React from "react";
import { useState, useEffect } from "react";
import './mainPage.css'
import { Link } from "react-router-dom";
import Logo from './svg/logo.svg';
import Reversal from "./svg/Reversal.svg";
import Worried from "./svg/Worried.svg";
import Easy from './svg/easy.svg';
import chatWindow from './svg/chatWindow.svg';
import VeryEasy from './svg/VeryEasy.svg';
import Blackboard from './svg/blackboard.svg';
import SFooterMain from './svg/SFooterMain.svg';
import MyColor from './svg/MyColor.svg';


function Main(){
  
  const [position, setPosition] = useState(1);
  function onScroll(){
    console.log(window.scrollY);
    setPosition(window.scrollY);
  }
  useEffect(()=>{
    window.addEventListener("scroll",onScroll);
    return() => {
      window.removeEventListener("scroll",onScroll);
    };
  }, []);
  
  return(
    <div className="Main">
      <div className="Header">
        <img src={Logo} width={60}
        style={{
          opacity: {position}
        }}
        />
        <div className='MainJoinButton'>
          <div className='MainPageLoginButton'><Link to='/Login' style={{textDecoration:'none', color:'black'}}>로그인</Link></div>
          <div className='MainPageJoinButton'><Link to='/join' style={{textDecoration:'none', color:'#fff'}}>회원가입</Link></div>
        </div>
      </div>
      <div className="MainBody">
        <div className="Body">
          <img className="EasyImg" src={Easy} width={500}/> 
          <div className="MainButton">
            <button className="startButton"><Link to='/Login' style={{textDecoration:'none', color:'#fff'}}>로그인 후 시작하기 →</Link></button>
          </div>
        </div>
      </div>
        <div className="MainFooter">
          <div></div>
          <img src={Reversal} width={220} className="ReversalImg"/>
        </div>
        <div className="Section">
          <div className="SectionMain">
              <img src={Worried} width={500}
              style={{
                opacity: (position-100)/200
              }}
              />
             <img className="SMImg" src={chatWindow} width={700}
             style={{
              opacity: (position-300)/200
            }}
             />
          </div>
          <div className="SectionHenchman">
              <img className="SHImg" src={VeryEasy} width={600}
              style={{
                opacity: (position-700)/200
              }}
              />
              <img src={Blackboard} width={800}
              style={{
                opacity: (position-1000)/100
              }}
              />
          </div>
          <div className="SectionFooter">
            <div className="SFooterMain">
              <img src={SFooterMain} width={300}
              style={{
                opacity: (position-1600)/100
              }}/>
              <div className="SFooterDev">
                <img src={MyColor} width={300}
                style={{
                  opacity: (position-1600)/100
                }}
                />
                <button className="SFooterB"><Link to='/Login' style={{textDecoration:'none', color:'#fff'}}>로그인 후 시작하기 →</Link></button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main