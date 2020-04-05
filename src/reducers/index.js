import * as Types from '../constants/actionTypes';

const defaultState = {
    users: [],
    user: false,
    isLoading: false,
    filteredUsers: [],
    filterRequest: ''
};

const filterUsers = (users, filterRequest) => (
    users.filter((user) =>
        user.name.first.toLowerCase().indexOf(filterRequest) !== -1 ||
        user.name.last.toLowerCase().indexOf(filterRequest) !== -1)
);

export default function (state = defaultState, action = {}) {
    switch (action.type) {
        case Types.GET_USERS_ATTEMPT:
            return { ...state, isLoading: true};

        case Types.GET_USERS_SUCCESS:
            return { ...state, users: action.users, isLoading: false };

        case Types.GET_USER_ATTEMPT:
            return { ...state, isLoading: true};

        case Types.GET_USER_SUCCESS:
            return { ...state, user: action.user, isLoading: false };

        case Types.FILTER_USERS:
            return {
                ...state,
                filteredUsers: filterUsers(state.users, action.filterRequest.toLowerCase()),
                filterRequest: action.filterRequest
            };

        case Types.CLEAR_FILTER:
            return { ...state, filteredUsers: [], filterRequest: '' };

        default:
            return state;
    }
}

