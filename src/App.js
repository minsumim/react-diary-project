import {useState, useEffect, useRef} from 'react';
import './App.css';
import DiaryEditer from './DiaryEditer';
import DiaryList from './DiaryList';

function App() {

  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onEdit = (targetId, newContent)=>{
    setData(
      data.map((it) => it.id === targetId ? {...it, content:newContent} : it)
    )
  }

  const onCreate = (author, content, emotion)=>{
    const create_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      create_date,
      id : dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  }

  const onRemove = (targetId)=>{
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it)=>it.id !== targetId);
    setData(newDiaryList);
  }

  return (
    <div className="App">
      <DiaryEditer onCreate = {onCreate}/>
      <DiaryList diaryList = {data} onRemove = {onRemove} onEdit={onEdit} />
    </div>
  );
}

export default App;
