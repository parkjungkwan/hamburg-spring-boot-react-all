import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import '../component/list.css';

const FeedBoardList = () => {
    const [fds, setFds] = useState([]);

    const fetchList = () => {
        axios
            .get('http://localhost:8080/feeds/list')
            .then((res) => {
                console.log(res);
                setFds(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        console.log('렌더링...');
        fetchList();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>게시판 번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>본문 내용</th>
                    <th>위치</th>
                    <th>해쉬 태그</th>
                    <th>등록 일자</th>
                    <th>상세 보기</th>
                </tr>
            </thead>
            <tbody>
                {fds.map((fds) => {
                    return (
                        <tr key={fds.feedNo}>
                            <td>{fds.feedNo}</td>
                            <td>{fds.title}</td>
                            <td>{fds.writer}</td>
                            <td>{fds.content}</td>
                            <td>{fds.addLocation}</td>
                            <td>{fds.hashTag}</td>
                            <td>{fds.regDate}</td>
                            <td>
                                <Link to={`/FeedBoardRead/${fds.feedNo}`} className="linkto-fds">
                                    <button
                                        onClick={() => {
                                            localStorage.setItem('select', `${fds.feedNo}`);
                                        }}
                                    >
                                        자세히 보기
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
export default FeedBoardList;
