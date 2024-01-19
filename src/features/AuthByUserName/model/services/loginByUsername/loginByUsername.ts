import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'
import {User, userActions} from "entities/User";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";
import React from "react";
import {ThunkConfig} from "app/providers/StoreProvider";

interface LoginByUsernameProps {
    username: string
    password: string
}

enum LoginErrors {

}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const {extra,rejectWithValue, dispatch } = thunkApi;
        try {
            const response = await extra.api.post<User>('/login',authData)

            if(!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))
            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)