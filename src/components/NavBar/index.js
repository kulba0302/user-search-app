import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";

import { DEFAULT_URL } from "../../constants/common";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 10,
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: '#FFFFFF',
        width: 30
    }
}));

const renderBackIcon = (classes, shouldBeRendered) => {
    if(!shouldBeRendered) {
        return null;
    }

    return (
        <Link to={DEFAULT_URL} className={classes.link}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <ArrowBack />
            </IconButton>
        </Link>
    );
};

const NavBar = () => {
    const match = useRouteMatch(DEFAULT_URL);
    const classes = useStyles();
    const currentPageText = !match.isExact ? 'Specific user page' : 'Users list page';

    return (
        <div className="navigation-bar">
            <AppBar position="static">
                <Toolbar>
                    {renderBackIcon(classes, !match.isExact)}
                    <Typography variant="h6" className={classes.title}>
                        {currentPageText}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
