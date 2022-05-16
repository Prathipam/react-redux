import { UserModel, UserArrayModel } from '../models/user-model'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialUserState: UserArrayModel = {
  all_users: [],
  individual_user: {
    id: '',
    name: '',
    username: '',
    email: '',
    phone:''
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUsers(state, action: PayloadAction<UserModel[]>) {
      state.all_users = action.payload
    },
    setIndividualUser(state, action: PayloadAction<UserModel>) {
      state.individual_user = action.payload
    }
  },
})
export default userSlice
