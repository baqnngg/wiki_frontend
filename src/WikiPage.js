import { useParams } from "react-router-dom"

function wikiPage() {
    const {Param} = useParams();
    return(
        <div className="container">
            <h1>위키 정보가 들어갈 곳 입니다.</h1>
            <div>{Param}</div>
        </div>
    )
}

export default wikiPage;