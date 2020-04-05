import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { getSpecificUser } from "../../actions";

import UserCard from './UserCard';
import Loader from '../Loader';


const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent:'center',
    },
}));

const User = () => {
    const { user, isLoading } = useSelector(state => state.users);
    const dispatch = useDispatch();
    const { id } = useParams();
    const classes = useStyles();

    useEffect(() => {
        const fetchUser = () => dispatch(getSpecificUser(id));

        if(!user) {
            fetchUser();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(isLoading || !user) {
        return <Loader />
    }

    return(
        <div className={classes.root}>
            <UserCard user={user} renderDetails />
        </div>
    )
};

export default User;
