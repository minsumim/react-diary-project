const DiaryListItem = ({onDelete, author, content, create_date, emotion, id})=>{
    return(
        <div className="DiaryListItem">
            <div className="info">
                <span>
                    작성자 : {author} | 감정점수 : {emotion}<br/>
                </span>
                <span className="date">  
                    현재시간 : {new Date(create_date).toLocaleString()}
                </span>
            </div>
            <div className="content">
                {content}
            </div>
            <button onClick={()=>{
                console.log(id);
                if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)){
                    onDelete(id);
                }
            }}>삭제하기</button>
        </div>
    )
}

export default DiaryListItem;