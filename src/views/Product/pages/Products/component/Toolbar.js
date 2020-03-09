import React from "react";
import {fade, makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from "@material-ui/core/IconButton";
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';
import RefreshIcon from '@material-ui/icons/Refresh';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Button from "@material-ui/core/Button";
import HelpIcon from '@material-ui/icons/Help';

const useStyle = makeStyles(theme => ({
    tableHeader: {
        padding: '20px 20px 0px'
    },
    headerTitle: {
        textAlign: 'left',
        fontSize: '20px',
        marginBottom: '10px'
    },
    pullRight: {
        textAlign: 'right'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        display: 'flex'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '280px',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
        border: '1px solid #e0e0e0',
        borderRadius: '3px'
    },
    gridFlex: {
        display: 'flex',
        height: '100%'
    },
    button: {
        textTransform: 'none',
        marginRight: '10px'
    },
    paginationLabel: {
        padding: '10px'
    },
    helpMargin: {
        marginTop: '-10px'
    }
}));

function Toolbar({value}) {
    const classes = useStyle();

    let importandExport = (
        <div>
            <Button
                color="default"
                className={classes.button}
                startIcon={<VerticalAlignTopIcon/>}
            >
                Import
            </Button>
            <Button
                color="default"
                className={classes.button}
                startIcon={<VerticalAlignBottomIcon/>}
            >
                Export
            </Button>
        </div>
    )

    return (
        <Grid container className={classes.tableHeader}>
            <Grid item xs={6} className={classes.headerTitle + " " + classes.gridFlex}>
                <div>{value.title}</div>
                {value.index ?
                    <HelpIcon/> : ''}
            </Grid>
            <Grid item xs={6} className={classes.pullRight}>
                {!value.index ? importandExport : ''}
            </Grid>
            <Grid item xs={6} className={classes.gridFlex}>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon/>
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{'aria-label': 'search'}}
                    />

                </div>
                <Button
                    variant="outlined"
                    color="default"
                    size="small"
                    className={classes.button}
                    startIcon={<FilterListIcon/>}
                >
                    Filter
                </Button>
            </Grid>

            <Grid item xs={6} className={classes.pullRight}>
                <IconButton variant="outlined">
                    <RefreshIcon/>
                </IconButton>
                <span className={classes.paginationLabel}>| 1-4 of 5</span>
                <IconButton variant="outlined">
                    <KeyboardArrowLeftIcon/>
                </IconButton>
                <IconButton variant="outlined">
                    <KeyboardArrowRightIcon/>
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default Toolbar;