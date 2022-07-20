import DiaryListItem from "./DiaryListItem";

const DiaryList = ({diaryList, onRemove, onEdit})=>{
    return(
        <div className="DiaryList">
            <h2>일기리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {diaryList.map((it,i)=>(
                    <DiaryListItem key = {i} {...it} onRemove = {onRemove} onEdit = {onEdit}/>
                ))}
            </div>
        </div>
    )
}

DiaryList.defaultProps = {
    dummyList:[],
}

export default DiaryList;