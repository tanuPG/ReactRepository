import './App.css'
import {Counter} from './components/Counter'
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm';
import { Routes, Route } from 'react-router-dom';
import GenreSelect  from './components/GenreSelect';

function App() {
  return (
    <>
      <div>
        <Navbar title='React App'/>
      </div>
      <Routes>
          <Route path="/" element={<Counter message='The count value is' />} />
          <Route path="/SearchForm" element={<SearchForm />} />
          <Route path="/GenreSelect" element={<GenreSelect />} />
       </Routes>
   
      {/* <Counter message='The count value is' ></Counter>
      <SearchForm></SearchForm>
      <GenreSelect></GenreSelect> */}
    </>
  )
}

export default App;
