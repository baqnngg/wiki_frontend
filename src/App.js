import './App.css';
import { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handlekeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log(searchQuery)
      navigate(`/wiki/${searchQuery}`)
    }
  }
  
  return (
    <>
      <div className='container'>
        <Routes>
          <Route path='/wiki/:searchQuery' element={<wikiPage></wikiPage>}></Route>
        </Routes>
        <header>
          <h1>Anime wiki</h1>
          <div className='search-container'>
            <div className='search-icon'>🔍</div>
            <input 
              type='text'
              className='search-input'
              placeholder='검색하기'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} 
              onKeyDown={handlekeyPress}
            ></input>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
