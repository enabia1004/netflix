import axios from "axios"

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3/',
    timeout:1000,

    params:{
        api_key:'0bda5d6b5a7917e8209f970a2db952ee',
        language:'ko-KR'
    }
});

export default instance