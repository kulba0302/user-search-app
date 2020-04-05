import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345,
        margin: 20,
        textDecoration: 'none'
    }
}));

const renderWithDetails = (renderDetails, user) => {
    if(!renderDetails) {
        return null;
    }

    return (
        <CardContent>
            <Typography>
                City:  {user.location.city}
            </Typography>
            <Typography>
                State:  {user.location.state}
            </Typography>
            <Typography>
                Country:  {user.location.country}
            </Typography>
            <Typography paragraph>
                Street:  {user.location.street.name} {user.location.street.number}
            </Typography>
            <Typography paragraph>Email: {user.email}</Typography>
            <Typography paragraph>Gender: {user.gender}</Typography>
            <Typography paragraph>Date of birthday: {new Date(user.dob.date).toLocaleDateString()}</Typography>
            <Typography paragraph>Phone: {user.phone}</Typography>
        </CardContent>
    );
};



const UserCard = ({ user, renderDetails = false}) => {
    const classes = useStyles();
    const { picture, name, login } = user;

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} src={picture.thumbnail} />
                }
                title={`Name: ${name.first} ${name.last}`}
                subheader={`Id: ${login.uuid}`}
            />
                {renderWithDetails(renderDetails, user)}
        </Card>
    );

};

export default UserCard;
