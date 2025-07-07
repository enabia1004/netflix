import React from 'react'
import "../css/header.css";

const Header = () => {
    return (
        <div className='header'>
            <div className='left'>
                <h1 onClick={()=>window.location.href='/netflix/index.html'}>
                    <img src="https://images.ctfassets.net/4cd45et68cgf/4nBnsuPq03diC5eHXnQYx/d48a4664cdc48b6065b0be2d0c7bc388/Netflix-Logo.jpg" alt='넷플릭스로고'></img>
                </h1>
                <ul className='gnb'>
                    <li>홈</li>
                    <li>시리즈</li>
                    <li>영화</li>
                    <li>NEW!요즘 대세 콘텐츠</li>
                    <li>내가 찜한 리스트</li>
                    <li>언어별로 찾아보기</li>
                </ul>
            </div>
                <div className='icon_wrap'>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 21L15 15M3 10C3 10.9193 3.18106 11.8295 3.53284 12.6788C3.88463 13.5281 4.40024 14.2997 5.05025 14.9497C5.70026 15.5998 6.47194 16.1154 7.32122 16.4672C8.1705 16.8189 9.08075 17 10 17C10.9193 17 11.8295 16.8189 12.6788 16.4672C13.5281 16.1154 14.2997 15.5998 14.9497 14.9497C15.5998 14.2997 16.1154 13.5281 16.4672 12.6788C16.8189 11.8295 17 10.9193 17 10C17 9.08075 16.8189 8.1705 16.4672 7.32122C16.1154 6.47194 15.5998 5.70026 14.9497 5.05025C14.2997 4.40024 13.5281 3.88463 12.6788 3.53284C11.8295 3.18106 10.9193 3 10 3C9.08075 3 8.1705 3.18106 7.32122 3.53284C6.47194 3.88463 5.70026 4.40024 5.05025 5.05025C4.40024 5.70026 3.88463 6.47194 3.53284 7.32122C3.18106 8.1705 3 9.08075 3 10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div>
                        키즈
                    </div>
                    
                    <div className='kids'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 21H14C14 22.1 13.1 23 12 23C10.9 23 10 22.1 10 21ZM21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2C13.1 2 14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19ZM17 11C17 8.2 14.8 6 12 6C9.2 6 7 8.2 7 11V18H17V11Z" fill="white"/>
                        </svg>
                        <div className='bell'>

                        </div>
                    </div>
                    <div className='profll'><img src='https://i.pinimg.com/1200x/b4/0b/51/b40b51418293936a6e0ad09ffa229cb7.jpg' alt='아바타아이콘3'></img></div>
                </div>
        </div>
    )
}

export default Header
