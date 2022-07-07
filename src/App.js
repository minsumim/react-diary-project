import {useState, useEffect} from 'react';
import './App.css';
import DiaryEditer from './DiaryEditer';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id:1,
    author:"minsu",
    content:"하이 1234",
    emotion:1,
    create_date: new Date().getTime()
  },
  {
    id:2,
    author:"hyesu",
    content:"안녕하세요",
    emotion:5,
    create_date: new Date().getTime()
  },
  {
    id:3,
    author:"kevin",
    content:"Guten Morgen",
    emotion:4,
    create_date: new Date().getTime()
  }
]

function App() {
  return (
    <div className="App">
      <DiaryEditer/>
      <DiaryList dummyList = {dummyList} />
    </div>
  );
}

export default App;
