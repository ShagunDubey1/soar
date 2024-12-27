import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User } from '../components/ui/QuickTransferCard'

interface ServiceState {
  isAuthenticated: boolean
  user: null | User
}

interface AuthServicesState {
  auth: ServiceState
}

const initialState: AuthServicesState = {
  auth: { isAuthenticated: false, user: null },
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setAuthState: (state, action) => {
      state.auth.isAuthenticated = action.payload
    },
    authLogin: (state, action: PayloadAction<User>) => {
      state.auth.isAuthenticated = true
      state.auth.user = action.payload
    },
    authLogout: (state) => {
      state.auth.isAuthenticated = false
      state.auth.user = null
    },
    setAuthUser: (state, action: PayloadAction<User>) => {
      state.auth.user = action.payload
    },
  },
})

export const { authLogin, authLogout, setAuthState, setAuthUser } =
  authSlice.actions
export default authSlice.reducer
