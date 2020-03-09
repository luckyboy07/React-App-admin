import React, {useState, useEffect} from "react";
import Container from '@material-ui/core/Container';
import {makeStyles, withStyles,createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Checkbox from '@material-ui/core/Checkbox';
import {Redirect, withRouter} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
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
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: 'rgb(0,128,128)',
        textTransform: 'unset'
    },
    card: {
        minWidth: 275,
    },
    title: {
        fontSize: 25,
    },
    grid: {
        padding: 30
    },
    '&:hover, &$focusVisible': {
        backgroundColor: 'rgb(0,128,128)'
    },
    focused: {},
    pullLeft: {
        textAlign: 'left'
    }

}));

const CustomTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'rgb(0,128,128)',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'rgb(0,128,128)',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(0,128,128)',
            },
        },
    },
})(TextField);

const CustomCheckBox = withStyles( {
    root: {
        color: 'rgb(0,128,128)',
        '&$checked': {
            color: 'rgb(0,128,128)',
        },
    }
})(props => <Checkbox color="default" {...props} />)

const theme = createMuiTheme({
    palette: {
        primary: {
            main: 'rgb(0,128,128)',
        }
    },
});

function SignIn(props) {
    const classes = useStyles();
    const Login = (e) => {
        e.preventDefault()
        props.history.push('/main/dashboard');
        return <Redirect to='/main/dashboard'/>
    }

    useEffect(() => {

    }, [])

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline/>
            <Paper variant="outlined" className={classes.paper}>
                <div>Logo</div>
                <Grid container  className={classes.grid + " " + classes.pullLeft}>

                    <h1>Log In to Stitch</h1>
                    <form className={classes.form} noValidate onSubmit={Login}>
                        <Grid xs={12}>
                            <CustomTextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />

                            <CustomTextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <ThemeProvider theme={theme}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Log In
                                </Button>
                                <FormControlLabel
                                    control={<CustomCheckBox value="remember"/>}
                                    label="Remember me"
                                />
                            </ThemeProvider>
                        </Grid>
                        {/*<Grid item xs>*/}
                        {/*    <Link href="#" variant="body2">*/}
                        {/*        Forgot password?*/}
                        {/*    </Link>*/}
                        {/*</Grid>*/}
                        {/*<Grid item>*/}
                        {/*    <Link href="#" variant="body2">*/}
                        {/*        {"Don't have an account? Sign Up"}*/}
                        {/*    </Link>*/}
                        {/*</Grid>*/}
                    </form>
                </Grid>
            </Paper>
            <Box mt={8}>
                Footer
            </Box>
        </Container>
    )
}

export default withRouter(SignIn);