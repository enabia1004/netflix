import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Allmovie from './components/Allmovie';
import Banner from './components/Banner';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Allmovie title="최근상영중인영화" url="movie/now_playing"></Allmovie>
      <Allmovie title="최신인기영화" url="movie/top_rated"></Allmovie>
      <Allmovie title="최신액션영화" url="discover/movie?with_genres=28"></Allmovie>
      <Allmovie title="최신로맨스영화" url="discover/movie?with_genres=10749"></Allmovie>
      <Allmovie title="최신코메디영화" url="discover/movie?with_genres=35"></Allmovie>
      <Footer></Footer>
    </div>
  );
}

export default App;
