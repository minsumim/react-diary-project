import {useState, useEffect} from 'react';
import './App.css';
import DiaryEditer from './DiaryEditer';
import DiaryList from './DiaryList';

function App() {
  return (
    <div className="App">
      <DiaryEditer/>
      <DiaryList />
    </div>
  );
}

export default App;
