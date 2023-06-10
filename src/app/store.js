import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../pages/login/loginSlice'
export default configureStore({
  reducer: {
    login:loginReducer,
  },
})