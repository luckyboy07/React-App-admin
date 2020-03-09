import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import imageData from './imageData'
import shoes1 from '../../../images/shoes1.png'
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Checkbox from "@material-ui/core/Checkbox";

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },


});
const useStyle = makeStyles(theme => ({
    gridList: {
        width: 700,
        height: 450,
    },
    actionButton: {
        background: 'none',
        display: 'block'
    }, gridRoot: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        fontSize: 15,
        bottom: 0,
        position: 'absolute',
        color:'#878a8d'
    }
}))
const DialogTitle = withStyles(styles)(props => {
    const {children, classes, onClose, ...other} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function CustomizedDialogs({open, setOpen}) {
    const classes = useStyle()
    const handleClose = () => {
        setOpen(!open);
    };
    return (
        <div>
            <Dialog onClose={handleClose}
                    open={open}
                    maxWidth="md">
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Modal title
                </DialogTitle>
                <DialogContent dividers>
                    <div className={classes.gridRoot}>
                        <GridList cellHeight={160} className={classes.gridList} cols={3} fullWidth>
                            {imageData.map((tile) => {
                                return (
                                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                                        <img src={shoes1} alt={tile.title}/>
                                        <GridListTileBar
                                            titlePosition="top"
                                            className={classes.actionButton}
                                            actionIcon={
                                                <Checkbox
                                                    defaultChecked
                                                    value="secondary"
                                                    color="primary"
                                                    inputProps={{'aria-label': 'secondary checkbox'}}
                                                />
                                            }
                                        >

                                        </GridListTileBar>
                                        <div className={classes.title}>{tile.title}</div>
                                    </GridListTile>
                                )
                            })
                            }
                        </GridList>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
