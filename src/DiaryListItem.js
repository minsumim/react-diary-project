import { useRef, useState } from "react";

const DiaryListItem = ({onEdit ,onRemove, author, content, create_date, emotion, id})=>{

    const localContentInput = useRef();

    const[isEdit, setIsEdit] = useState(false);
    //수정 중인지, 수정 중이 아닌지 트루와 폴스로 분류해서 보관

    const toggleIsEdit = ()=> setIsEdit(!isEdit);

    const [localContent, setLocalContent] = useState(content);

    const handleRemove = ()=>{
        console.log(id);
        if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)){
            onRemove(id);
        }
    }

    const handleQuitEdit = ()=>{
        setIsEdit(false);
        setLocalContent(content);
    }

    const handleEdit = ()=>{
        if(localContent.length < 5){
            localContentInput.current.focus();
            return;
        }

        if(window.confirm(`${id}번째 일기를 수정하시겠습니까?`))
        onEdit(id, localContent);
        toggleIsEdit();
    }


    return(
        <div className="DiaryListItem">
            <div className="info">
                <span>
                    작성자 : {author} | 감정점수 : {emotion}<br/>
                </span>
                <span className="date">  
                    현재시간 : {new Date(create_date).toLocaleTimeString()}
                </span>
            </div>
            <div className="content">
                {isEdit ? (
                    <>
                        <textarea ref={localContentInput}
                                  value={localContent} 
                         onChange={(e)=>{setLocalContent(e.target.value)}}/>
                    </>
                ) : (
                    <>
                        {content}
                    </>
                )}
            </div>
            {isEdit ? 
            <>
                <button onClick={handleQuitEdit}>수정 취소</button>
                <button onClick={handleEdit}>수정 완료</button>
            </> : 
            <>
                <button onClick={handleRemove}>삭제하기</button>
                <button onClick={toggleIsEdit}>수정하기</button>
            </>}
        </div>
    )
}

export default DiaryListItem;