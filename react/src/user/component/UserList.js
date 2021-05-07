import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUserList } from '../reducer/user.reducer'

const UserList = () => {
    const users = useSelector(state => {
        console.log("state: " + JSON.stringify(state))
        return state.users
    });
    const dispatch = useDispatch()
    useEffect(()=>{
        alert(`1. useEffect `)
        dispatch(getUserList())
    }, [])

    return (
        <>
        <h1>User List</h1>
        <table style={{border: "10"}}>
            <thead>
                <tr>
                    <th>username</th>
                    <th>name</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
            {users.map((user, id) => {
                return (
                    <tr key={id}>
                            <td>{user.username}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                    </tr>)
            })}
            </tbody>
        </table>
        </>
    )
    
}

export default UserList;
