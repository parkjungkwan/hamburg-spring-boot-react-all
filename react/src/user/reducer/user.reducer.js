import axios from 'axios'
import { getList } from '../service/user.service'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getUserList = createAsyncThunk(
  "users/findAll", 
  async () => {
  const response = await getList()
  return response.data
})

const isRejectedAction = action => (action.type.endsWith('rejected'))
const userSlice  = createSlice({
  name: 'users',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getUserList.fulfilled, (state, { payload }) =>{
      alert(`3 리덕스 내부 회원 목록 조회 성공 ${ payload }`)
      return [...payload]
    })
    .addMatcher(isRejectedAction, () => {})
    .addDefaultCase((state, action) => {})
  }
})

const { actions, reducer } = userSlice
export const { } = actions
export default reducer

