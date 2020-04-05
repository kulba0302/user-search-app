import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { DEFAULT_URL } from "../constants/common";

import UsersList from '../components/User/UsersList';
import User from '../components/User';

export default () => (
    <Switch>
        <Route exact path="/" component={() => <UsersList />} />
        <Route exact path="/user/:id" component={() => <User />} />
        <Redirect exact to={DEFAULT_URL}/>
    </Switch>
);

