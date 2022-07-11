import {useState, useEffect, useRef} from 'react';
import './App.css';
import DiaryEditer from './DiaryEditer';
import DiaryList from './DiaryList';

// const dummyList = [
//   {
//     id:1,
//     author:"minsu",
//     content:"하이 1234",
//     emotion:1,
//     create_date: new Date().getTime()
//   },
//   {
//     id:2,
//     author:"hyesu",
//     content:"안녕하세요",
//     emotion:5,
//     create_date: new Date().getTime()
//   },
//   {
//     id:3,
//     author:"kevin",
//     content:"Guten Morgen",
//     emotion:4,
//     create_date: new Date().getTime()
//   }
// ]

function App() {

  const [data, setData] = useState([]);

  const dataId = useRef();

  const onCreate = (author, content, emotion)=>{
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  }

  return (
    <div className="App">
      <DiaryEditer onCreate = {onCreate}/>
      <DiaryList dieryList = {data} />
    </div>
  );
}

export default App;
