
import { useContext } from 'react'
import { MovieDBApp } from './Context'
import './App.css'
import Navbar from './Component/Navbar/Navbar';
import Search from './Component/SearchBox/Search';
import MovieContainer from './Component/MovieContainer/MovieContainer '

function App() {


  return (
    <>
      <Navbar />
      <Search />

      <MovieContainer />
    </>
  )
}

export default App
