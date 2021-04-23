//import '../component/userDetail.css';
import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserDetail = () => {
    const [inputs, setInputs] = useState({
        userNo: '',
        username: '',
        password: '',
    });

    const { userNo, username, password } = inputs;

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

    const login = (e) => {
        e.preventDefault();
        console.log(setInputs);
        alert('userNo = ' + userNo);
        alert('username = ' + username);
        alert('password = ' + password);

        axios
            .post(`http://localhost:8080/users/login`, {
                userNo: userNo,
                username: username,
                password: password,
            })
            .then((res) => {
                alert('로그인 되셨습니다');
                console.log(res);
                if (typeof Storage == res) {
                    localStorage.setItem('username', '');
                }
                alert('res = ' + JSON.stringify(res));
                alert('res.data = ' + JSON.stringify(res.data));
                // alert('res.data.data = ' + res.data.data);
                // alert('JOSN.stringify(res.data.data) = ' + JSON.stringify(res.data.data));

                alert('inputs = ' + inputs);
                alert('JOSN.stringify(res.inputs) = ' + JSON.stringify(res.inputs));
                setInputs(res.data);
            })
            .catch(() => {
                alert('가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.');
            });
    };

    return (
        <>
            <form onSubmit={login}>
                <h2>로그인</h2>

                <div className="imgcontainer">
                    <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                </div>

                <div className="userDetailContainer">
                    <label htmlFor="username">
                        <b>ID</b>
                    </label>
                    <input type="text" placeholder="Enter Username" name="username" value={inputs.username || ''} onChange={handleChange} required />

                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input type="password" placeholder="Enter Password" name="password" value={inputs.password || ''} onChange={handleChange} required />

                    <button type="submit" onClick={() => localStorage.setItem('select', `${inputs.username}`)}>
                        로그인
                    </button>

                    <div className="userDetailContainer" />
                    <Link to="/">
                        <button type="submit" className="cancelbtn">
                            취소
                        </button>
                    </Link>
                </div>
            </form>
        </>
    );
};

export default UserDetail;
