import DiaryListItem from "./DiaryListItem";

const DiaryList = ({dummyList})=>{
    return(
        <div className="DiaryList">
            <h2>일기리스트</h2>
            <h4>{dummyList.length}개의 일기가 있습니다.</h4>
            <div>
                {dummyList.map((it)=>(
                    <DiaryListItem key = {it.id} {...it}/>
                ))}
            </div>
        </div>
    )
}

DiaryList.defaultProps = {
    dummyList:[],
}

export default DiaryList;