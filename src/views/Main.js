import React from 'react'
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Header from '../components/header'
import NavBar from '../components/navbar'
import Container from '@material-ui/core/Container';
import Product from "./Product/Product";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import routes from '../routes/index'
import {ThemeProvider} from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        backgroundColor: '#F8F8F8'
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    }
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: 'rgb(0,128,128)',
        }
    },
});

const listRoute = (
    <Switch>
        {routes.map((props, key) => {
            console.log('----', props)
            if (props.name === 'Product') {
                return (
                    <Route path={props.parent + props.path}

                           render={() => <Product child={props.children}/>}
                           key={key}
                    />
                )
            } else {
                return (
                    <Route path={props.parent + props.path}
                           exact
                           component={props.component}
                           childrens={props.children}
                           key={key}
                    />
                )
            }

        })
        })}
        <Redirect from="/main" to="/main/dashboard"/>
    </Switch>
);

function Main() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        console.log('handleDrawerOpen---')
        setOpen(true);
    };

    const handleDrawerClose = () => {
        console.log('handleDrawerClose')
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Header open={open} handleDrawerOpen={handleDrawerOpen}/>
            <NavBar open={open} routes={routes}/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <ThemeProvider theme={theme}>
                    <Container maxWidth="lg" className={classes.container}>
                        {listRoute}
                    </Container>
                </ThemeProvider>
            </main>
        </div>
    )
}

export default withRouter(Main);
