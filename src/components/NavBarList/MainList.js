import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: theme.spacing(4),
        marginLeft: '20px'
    }
}));

function MainListItems(props) {
    const classes = useStyles();
    // console.log('classes', classes)
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    }
    return (
        <div>
            <ListItem button>
                <ListItemText primary="Dashboard"/>
            </ListItem>
            <ListItem button onClick={handleClick}>

                <ListItemText primary="Products"/>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="All Product" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Add Product"/>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Product"/>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Price Book"/>
                    </ListItem>
                </List>
            </Collapse>
            <ListItem button>
                <ListItemText primary="Customers"/>
            </ListItem>
            <ListItem button>
                <ListItemText primary="Reports"/>
            </ListItem>
            <ListItem button>
                <ListItemText primary="Integrations"/>
            </ListItem>
        </div>
    );
}

// function SecondaryListItems() {
//     return (
//         <div>
//             <ListSubheader>Saved reports</ListSubheader>
//             <ListItem button>
//                 <ListItemIcon>
//                     <AssignmentIcon/>
//                 </ListItemIcon>
//                 <ListItemText primary="Current month"/>
//             </ListItem>
//             <ListItem button>
//                 <ListItemIcon>
//                     <AssignmentIcon/>
//                 </ListItemIcon>
//                 <ListItemText primary="Last quarter"/>
//             </ListItem>
//             <ListItem button>
//                 <ListItemIcon>
//                     <AssignmentIcon/>
//                 </ListItemIcon>
//                 <ListItemText primary="Year-end sale"/>
//             </ListItem>
//         </div>
//     );
// }
export default MainListItems;
