import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { uid } from 'react-uid';
import { makeStyles } from '@material-ui/core/styles';

import { SPECIFIC_USER_URL } from '../../../constants/common';

import { getUsersList, setSpecificUser } from '../../../actions';

import UserCard from '../UserCard';
import Loader from '../../Loader';
import FilterInput from '../../FilterInput';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent:'space-between',
        flexWrap: 'wrap',
    },
    link: {
        textDecoration: 'none'
    },
    form: {
        width: '50%',
        margin: '0 auto'
    }
}));

const renderCard = (user, className, handleClick) => (
    <Link
        to={`${SPECIFIC_USER_URL}/${user.login.uuid}`}
        onClick={() => handleClick(setSpecificUser(user))}
        key={uid(user)}
        className={className}
    >
        <UserCard user={user} />
    </Link>
);

const UsersList = () => {
    const { users, isLoading, filteredUsers, filterRequest } = useSelector(state => state.users);
    const dispatch = useDispatch();
    const classes = useStyles();
    const usersToShow = !filterRequest ? users : filteredUsers;

    useEffect(() => {
        dispatch(getUsersList())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(isLoading) {
        return <Loader />
    }

    const cards = usersToShow.map((user) => renderCard(user, classes.link, dispatch));

    return (
        <div>
            <FilterInput />
            <div className={classes.root}>
                {cards}
            </div>
        </div>
    );

};

export default UsersList;
