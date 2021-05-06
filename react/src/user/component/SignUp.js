//import '../component/signupForm.css';
import React, { useCallback, useState } from 'react';
import axios from 'axios';

const SignUp = () => {

    const {username, password, email, address, phoneNumber} = useState({})

    const handleChange = () => {}

    const handleSubmit = () => {}
  
    return (
        <form onSubmit={handleSubmit} method="post">
            <div className="signUpContainer">
                <h1>회원가입</h1>

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
                <input type="text" onChange={handleChange} placeholder="email" name="email" value={email} required />

                <label htmlFor="userAddress">
                    <b>주소</b>
                </label>
                <input type="text" onChange={handleChange} placeholder="Address" name="address" value={address} required />

                <label htmlFor="userPhoneNumber">
                    <b>핸드폰 번호</b>
                </label>
                <input type="text" onChange={handleChange} placeholder="PhoneNumber" name="phoneNumber" value={phoneNumber} required />

                <div className="clearfix">
                    <button type="button" className="cancelButton">
                        Cancel
                    </button>
                    <button type="submit" className="signupButton">
                        회원가입 버튼
                    </button>
                </div>
            </div>
        </form>
    );
};
export default SignUp;
