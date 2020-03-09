import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import clsx from 'clsx'
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Divider from '@material-ui/core/Divider';
import {NavLink} from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import classNames from "classnames";
import Collapse from "@material-ui/core/Collapse";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9)
        },
    },
    titleSideBar: {
        position: "relative",
        padding: "15px 15px",
        zIndex: "4",
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    titleLink: {
        fontSize: '25px',
        textDecoration: 'none',
        color: '#000000cc',
        letterSpacing: '2px'
    },
    itemList: {
        width: "auto",
        transition: "all 300ms linear",
        margin: "10px 15px 5px",
        borderRadius: "3px",
        position: "relative",
        display: "flex",
        padding: "10px 15px",
        backgroundColor: "transparent"
    },
    activeroute: {
        boxShadow: '0 12px 20px -10px rgba(107, 107, 107, 0.28), 0 4px 20px 0 rgba(0, 0, 0,.12), 0 7px 8px -5px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#EEEEEE'
    },
    item: {
        position: "relative",
        display: "block",
        textDecoration: "none",
        color: '#fffff'
    },
    nested: {
        paddingLeft: theme.spacing(4),
        marginLeft: '20px'
    },
    subActive: {
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
        color: '#00c2ce'
    }
}));

const links = (routes, classes) => {

    function isActive(routeName) {
        return window.location.href.indexOf(routeName) > -1 ? true : false;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = React.useState();
    const clickProductList = () => {
        setOpen(!open)
    }

    let listItemClass = (router) => {
        if(router.child) return  classNames({[" " + classes.subActive] : isActive(router.parent + router.path)})

        return classNames({
            [" " + classes.activeroute]: isActive(router.parent + router.path)
        })
    }
    return (
        <List>
            <div>
                {routes.map((prop, key) => {
                    if (prop.name === 'Product') {
                        return (
                            <div
                            >
                                <ListItem button className={classes.itemList + listItemClass(prop)}
                                          onClick={clickProductList}
                                          key={key}
                                >
                                    <ListItemText primary={prop.name} key={key}/>
                                    {open ? <ExpandLess/> : <ExpandMore/>}
                                </ListItem>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {prop.children.map((row, id) => {
                                            let itemclass, path;
                                            path = row.parent + row.path
                                            if(row.visible)
                                            return (
                                                <NavLink to={path}
                                                         activeClassName="active"
                                                         key={id}>

                                                    <ListItem button className={classes.nested + listItemClass(row)}
                                                              >
                                                        <ListItemText primary={row.name}/>
                                                    </ListItem>
                                                </NavLink>
                                            )
                                        })
                                        }
                                    </List>
                                </Collapse>
                            </div>
                        )
                    } else {
                        return (
                            <NavLink
                                to={prop.parent + prop.path}
                                className={classes.item}
                                activeClassName="active"
                                key={key}
                            >
                                <ListItem button className={classes.itemList + listItemClass(prop)} >
                                    <ListItemText primary={prop.name}>
                                    </ListItemText>
                                </ListItem>
                            </NavLink>
                        )
                    }

                })
                }
            </div>
        </List>
    )
}

function Navbar({open, routes}) {
    const classes = useStyles();

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <div className={classes.titleSideBar}>
                <a href="#" className={classes.titleLink}>
                    Stitch
                </a>
            </div>
            <Divider/>
            {links(routes, classes)}
            <Divider/>
            <List>
                <div>
                    <ListItem button>

                        <ListItemText primary="Current month"/>
                    </ListItem>
                    <ListItem button>

                        <ListItemText primary="Last quarter"/>
                    </ListItem>
                    <ListItem button>

                        <ListItemText primary="Year-end sale"/>
                    </ListItem>
                </div>
            </List>
        </Drawer>
    )
}

export default Navbar;