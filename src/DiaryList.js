import DiaryListItem from "./DiaryListItem";

const DiaryList = ({dieryList})=>{
    return(
        <div className="DiaryList">
            <h2>일기리스트</h2>
            <h4>{dieryList.length}개의 일기가 있습니다.</h4>
            <div>
                {dieryList.map((it)=>(
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