import { useState } from "react";

const DiaryEditer = ()=>{

    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    });

    // const [author, setAuthor] = useState("조민수");
    // const [content, setContent] = useState("");

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        });
    }
    
    const handleSubmit = () =>{
        console.log(state);
        alert('저장 완');
    }

    return(
        <div className="DiaryEditer">
            <h2>오늘의 일기</h2>
            <div>
                <input 
                    name = "author"
                    value = {state.author} 
                    onChange = {handleChangeState}/>

            </div>
            <div>
                <textarea               
                    name = "content"
                    value = {state.content} 
                    onChange = {handleChangeState}/>
            </div>
            <div>
                오늘의 감정 점수 : 
                <select name ="emotion"
                        value = {state.emotion}
                        onChange = {handleChangeState} >
                    <option value = {1}>1</option>
                    <option value = {2}>2</option>
                    <option value = {3}>3</option>
                    <option value = {4}>4</option>
                    <option value = {5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div>
        </div>
    )
}

export default DiaryEditer;