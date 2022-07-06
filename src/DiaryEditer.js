import { useRef, useState } from "react";

const DiaryEditer = ()=>{

    const authorInput = useRef();
    //useRef() => 돔요소를 선택해줌

    const contentTextarea = useRef();

    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        });
    }
    
    const handleSubmit = () =>{
        if(state.author.length < 1){
            authorInput.current.focus();
            return;
        }

        if(state.content.length < 5){
            contentTextarea.current.focus();
            return;
        }

        alert('저장 완');
    }

    return(
        <div className="DiaryEditer">
            <h2>오늘의 일기</h2>
            <div>
                <input 
                    ref = {authorInput}
                    name = "author"
                    value = {state.author} 
                    onChange = {handleChangeState}/>

            </div>
            <div>
                <textarea        
                    ref = {contentTextarea}       
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