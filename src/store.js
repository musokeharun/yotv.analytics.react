import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from "./modules/partner/auth/authSlice";

export const store = configureStore({
    reducer: { auth : AuthReducer},
})