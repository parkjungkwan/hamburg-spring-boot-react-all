import './src/uss/component/userList.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserList = () => {

    const [uss, setUss] = useState([]);

    const fetchList = () => {

        
    }

<table>
            <thead>
                <tr>
                    <th>유저 넘버</th>
                    <th>아이디</th>
                    <th>비밀번호</th>
                    <th>email</th>
                    <th>주소</th>
                    <th>핸드폰 번호</th>
                    <th>상세 보기</th>
                </tr>
            </thead>
            <tbody>
                {fds.map((uss) => {
                    return (
                        <tr key={uss.feedNo}>
                            <td>{uss.feedNo}</td>
                            <td>{uss.title}</td>
                            <td>{uss.writer}</td>
                            <td>{uss.content}</td>
                            <td>{uss.addLocation}</td>
                            <td>{uss.hashTag}</td>
                            <td>{uss.regDate}</td>
                            <td>
                                <Link to={`/FeedBoardRead/${uss.feedNo}`} className="linkto-uss">
                                    <button
                                        onClick={() => {
                                            localStorage.setItem('select', `${uss.feedNo}`);
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

export default UserList;
