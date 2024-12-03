import './wikipage.css'
import { useParams } from "react-router-dom";
import { useEffect,useState } from 'react';

function WikiPage() {
    const {searchQuery} = useParams();
    const [data,setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/anime/${searchQuery}`);
                if (response.ok) {
                    const myData = await response.json();
                    setData(myData);
                } else {
                    const errorMessage = await response.json()
                    setError(errorMessage.message);
                }
            } catch (error) {
                setError("데이터를 가져오는 중 오류가 발생했습니다.");
            };
        };
        fetchData();
    }, [searchQuery])
    return(
        <div className="container">
            <div>{searchQuery}</div>
            <h1>위키 정보가 들어갈 곳 입니다.</h1>
            <div className="article-container">
                {error ? (
                    <p>{error}</p>
                ) : data ? (
                    <div>
                        <h3>이름</h3>
                        <p style={{marginBottom:10}}>{data.이름}</p>
                        <h3>방영일</h3>
                        <p style={{marginBottom:10}}>{data.방영일}</p>
                        <h3>방영요일</h3>
                        <p style={{marginBottom:10}}>{data.방영요일}</p>
                        <h3>제작사</h3>
                        <p style={{marginBottom:10}}>{data.제작사}</p>
                        <h3>감독</h3>
                        <p style={{marginBottom:10}}>{data.감독}</p>
                        <h3>소개</h3>
                        <p>{data.소개}</p>
                    </div>
                ) : (
                    <p>데이터를 로드 중입니다.</p>
                )}
            </div>
        </div>
    );
}

export default WikiPage;