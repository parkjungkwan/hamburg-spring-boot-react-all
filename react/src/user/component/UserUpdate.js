import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserUpdate = () => {
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
        userEmail: '',
        userAddress: '',
        userPhoneNumber: '',
    });

    const { username, password, userEmail, userAddress, userPhoneNumber } = inputs;

    const handleChange = useCallback(
        (e) => {
            const { value, name } = e.target;
            setInputs({
                ...inputs,
                [name]: value,
            });
        },
        [inputs]
    );

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            console.log('handleSubmit 작동');
            alert('handleSubmit 작동');
            alert('inputs.username = ' + inputs.username);
            alert('username = ' + username);

            axios
                .put(`http://localhost:8080/users/${localStorage.getItem('select')}`, {
                    username,
                    password,
                    userEmail,
                    userAddress,
                    userPhoneNumber,
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => console.log(err));
        },
        [username, password, userEmail, userAddress, userPhoneNumber]
    );

    return (
        <form onSubmit={handleSubmit} method="post">
            <div className="container">
                <h1>마이 페이지</h1>
                <hr />

                <label htmlFor="username">
                    <b>아이디</b>
                </label>
                <input type="text" onChange={handleChange} placeholder="Username" name="username" value={username} required />

                <label htmlFor="password">
                    <b>비밀번호</b>
                </label>
                <input type="password" onChange={handleChange} placeholder="Password" name="password" value={password} required />

                <label htmlFor="userEmail">
                    <b>Email</b>
                </label>
                <input type="text" onChange={handleChange} placeholder="UserEmail" name="userEmail" value={userEmail} required />

                <label htmlFor="userAddress">
                    <b>주소</b>
                </label>
                <input type="text" onChange={handleChange} placeholder="UserAddress" name="userAddress" value={userAddress} required />

                <label htmlFor="userPhoneNumber">
                    <b>핸드폰 번호</b>
                </label>
                <input type="text" onChange={handleChange} placeholder="UserPhoneNumber" name="userPhoneNumber" value={userPhoneNumber} required />

                <div className="clearfix">
                    <button type="button" className="cancelbtn">
                        <Link to="/">홈으로</Link>
                    </button>
                    <button type="submit" className="updatebtn">
                        <Link to={`/UserUpdate/${username}`}>정보 수정</Link>
                    </button>
                    <button type="button" className="deletebtn">
                        회원 탈퇴
                    </button>
                </div>
            </div>
        </form>
    );
};
export default UserUpdate;

// 로그인 되면 홈으로 이동
// 홈에서 마이페이지로 이동
// 마이페이지에서 회원 수정 및 탈퇴
// 로그아웃은 홈페이지에서
