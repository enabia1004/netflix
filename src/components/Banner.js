import React, { useEffect, useState } from 'react'
import axios from "../api/axios"
import "../css/banner.css"

const Banner = () => {
    // 영화정보 30개
    const [movie,setMovie] = useState([])

    useEffect(()=>{
        getData()
    },[])

    // api서버에서 비동기식 호출 현재 상영중인 영화데이터를 요청해 가져옴
    const getData = async()=>{
        const movieData = await axios.get("movie/now_playing")
        console.log('자료받기',movieData)
        setMovie(movieData.data.results)
    }
    console.log("데이터받기",movie)

    return (
    <div className='banner' style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie[0].backdrop_path})`}}>
        
    </div>
    )
}

export default Banner
