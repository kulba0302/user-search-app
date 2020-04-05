import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { filterUsers, clearFilter } from '../../actions';

const useStyles = makeStyles(() => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        margin: '15px auto'
    },
    input: {
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const FilterInput = () => {
    const { filterRequest } = useSelector(state => state.users);
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Type to search"
                inputProps={{ 'aria-label': 'type to search' }}
                value={filterRequest}
                onChange={(e) => dispatch(filterUsers(e.target.value))}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
                color="primary"
                className={classes.iconButton}
                aria-label="directions"
                onClick={() => dispatch(clearFilter())}
                disabled={!filterRequest}
            >
                <CloseIcon />
            </IconButton>
        </Paper>
    );
};

export default FilterInput;
