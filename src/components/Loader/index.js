import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
}));

const Loader = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress size={100}/>
        </div>
    );
};

export default Loader;

