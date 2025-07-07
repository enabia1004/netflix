import React, { useEffect, useState } from 'react'
import "../css/allmovie.css"
import axios from "../api/axios.js";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';// 양쪽버튼생성  
import 'swiper/css/scrollbar'


const Allmovie = (props) => {
    //영화정보20개를 기억하는 상태변수
    const [movie,setMovie] = useState([])

    // 개발자가 함수를 호출하지 않아도 react가
    // 시작하자마자 자동으로 실행되는 함수
    useEffect(()=>{
        // 실행할함수이름
        getData();
    },[])

    // api서버에 data를 요청해서 data를 가져오는 함수
    // 비동기 방식으로 요청한다
    const getData = async()=>{
        const request = await axios.get(props.url)
        console.log(request)
        setMovie(request.data.results)
    }
    console.log("넥플릭스data",movie)


    return (
    <div className='allmovie'>
        <h2>{props.title}</h2>
        <Swiper
            // modules추가
            modules={[Navigation,Autoplay,Pagination]}
            spaceBetween={5}
            slidesPerView={7}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            navigation
            autoplay={true}
        >  
        <div className='poster'>
            {
                movie.map((item)=><SwiperSlide>
                    <div className='imgbox'>
                        <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}></img>
                    </div>
                    </SwiperSlide>
                )
            }
        </div>
        </Swiper>
    </div>
    )
}

export default Allmovie
