import Axios from 'axios';

import * as Types from '../constants/actionTypes';
import { BASE_API_URL, USERS_FETCH_LIMIT } from "../constants/common";

export const getUsersList = () => {
    return async dispatch => {
        dispatch({ type: Types.GET_USERS_ATTEMPT });

        try {
            const result = await Axios.get(`${BASE_API_URL}?results=${USERS_FETCH_LIMIT}`);
            const { data } = result;

            dispatch({ type: Types.GET_USERS_SUCCESS, users: data.results });

            return result;

        } catch (e) {
            console.error(e);
        }
    }
};

export const getSpecificUser = (userId) => {
    return async dispatch => {
        dispatch({ type: Types.GET_USER_ATTEMPT });

        try {
            const result = await Axios.get(`${BASE_API_URL}?id=${userId}`);
            const { data } = result;
            // sorry about that (user: data.results[0]) but the service is always returning the list of random users even if I'm passing some specific id
            dispatch(setSpecificUser(data.results[0]));

            return result;
        } catch (e) {
            console.error(e);
        }
    }
};

export const setSpecificUser = (user) => ({
    type: Types.GET_USER_SUCCESS,
    user
});

export const filterUsers = (filterRequest) => ({
    type: Types.FILTER_USERS,
    filterRequest
});

export const clearFilter = () => ({
    type: Types.CLEAR_FILTER
});
