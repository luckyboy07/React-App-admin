import React from 'react'
import {fade, makeStyles, useTheme} from "@material-ui/core/styles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Box from '@material-ui/core/Box'
import Button from "@material-ui/core/Button";
import Table from '../../components/Table'
import Toolbar from '../../components/Toolbar'
import TabPanel from '../../components/TabPanel'
import {withRouter} from 'react-router-dom';

const useStyle = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    },
    gridHeader: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        width: '100%',
        padding: '15px',
        height: '100%',
    },
    TabBackcolor: {
        backgroundColor: '#F8F8F8'
    }
}));


function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function AllProduct() {
    const classes = useStyle();
    const [value, setValue] = React.useState({index: 0, title: 'All Product'});
    const theme = useTheme()

    const handleChange = (event, newValue) => {
        setValue({index: newValue, title: newValue ? 'Archived': 'All Product'});
    };

    const handleChangeIndex = index => {
        setValue({index: index, title: index ? 'Archived': 'All Product'});
    };

    return (
        <div className={classes.root}>
            <Tabs value={value.index}
                  onChange={handleChange}
                  className={classes.TabBackcolor}

            >
                <Tab label="All Products" {...a11yProps(0)}  />
                <Tab label="Archived" {...a11yProps(1)} />
            </Tabs>
            <Toolbar value={value} page={'Product'}/>
            <SwipeableViews axis="x-reverse"
                            index={value.index}
                            onChangeIndex={handleChangeIndex}>


                <TabPanel value={value.index} index={0} dir={theme.direction}>
                    <Table/>
                </TabPanel>
                <TabPanel value={value.index} index={1} dir={theme.direction}>
                    <Table />
                </TabPanel>

            </SwipeableViews>
        </div>

    )
}

export default withRouter(AllProduct);