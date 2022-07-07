const DiaryListItem = ({author, content, create_date, emotion, id})=>{
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
        </div>
    )
}

export default DiaryListItem;