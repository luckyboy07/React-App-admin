import React, {Component, useEffect} from 'react'
import GridItem from '../../components/Grid/GridItem'
import GridContainer from "../../components/Grid/GridContainer";
import Card from '../../components/Card/Card'
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'

import {
    Switch,
    Route,
    Redirect,
    withRouter
} from 'react-router-dom'
import Grid from "@material-ui/core/Grid";

const useStyle = makeStyles(() => ({
    containerTitle: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    title: {
        textAlign: 'left'
    },
    pullRight: {
        textAlign: 'right'
    }
}))


function ProductPages(props) {
    const classes = useStyle();
    const [isButtonHide, setButtonHide] = React.useState(true);
    const links = (
        <Switch>
            {props.child.map((row, key) => {
                return (
                    <Route path={row.parent + row.path}
                           exact
                           component={row.component}
                           key={key}>
                    </Route>
                )
            })

            }
            <Redirect to="/main/dashboard"/>
        </Switch>
    )
    const titleChange = () => {
        return props.child.map((row) => {
            let path = row.parent + row.path
            if (path === props.location.pathname) {
                return row.name
            }

        })
    }

    return (
        <div>
            <div className={classes.containerTitle}>
                <Grid container justify="center">
                    <Grid item xs={6}>
                        <h2 className={classes.title}>
                            {titleChange()}
                        </h2>
                    </Grid>
                    <Grid item xs={6} className={classes.pullRight}>
                        {props.location.pathname === '/main/product/add' ? '' : <Button variant="contained" color="primary">
                            Add product
                        </Button> }
                    </Grid>

                </Grid>
            </div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    {links}
                </GridItem>
            </GridContainer>
        </div>
    )
}

const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
    search: state.router.location.search,
    hash: state.router.location.hash,
})

export default withRouter(connect(mapStateToProps)(ProductPages));