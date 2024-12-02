import './wikipage.css'
import { useParams } from "react-router-dom";

function WikiPage() {
    const {searchQuery} = useParams();
    return(
        <div className="container">
            <h1>위키 정보가 들어갈 곳 입니다.</h1>
            <div>{searchQuery}</div>
            <div className="article-container">
                <h2>내용이 없습니다.</h2>
            </div>
        </div>
    );
}

export default WikiPage;