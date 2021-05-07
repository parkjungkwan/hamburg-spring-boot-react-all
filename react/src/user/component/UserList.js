import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import getUserList from '../reducer/user.reducer'

const UserList = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        alert(`1. useEffect `)
        dispatch(getUserList())
    }, [])
    return <h1>사용자 목록</h1>
    
}

export default UserList;
