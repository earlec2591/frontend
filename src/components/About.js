import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from '@reach/router';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © SneakerSaga '}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          About Us
        </Typography>
        <form className={classes.form} noValidate>
          <p>SneakerSaga was founded by three friends who shared a love for Air Jordans, new and old. By utilizing their skills, they began to research and compile a list of every retro'd Jordan that has graced the very ground we walk on. SneakerSaga was built to share our passion.</p>
          <p>At SneakerSaga, we wanted to give you a platform that allows you to leave reviews on Jordans you own, add them to a wishlist, and get incredible details on the sneakers you love. SneakerSaga is a safe place for any and all lovers of footwear. Enjoy!</p>
        </form>
      </div>
      <div>
        <h3><Link to='/signin'>Login</Link> or <Link to='/signup'>signup</Link> to enter.</h3>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}