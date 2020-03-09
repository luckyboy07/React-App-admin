import React from 'react'
import {
    fade,
    withStyles,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: 35,
        },
        'label': {
            marginLeft: '-10px'
        }
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
    label: {
        marginLeft: '-10px'
    }
}))(InputBase);

export default BootstrapInput;