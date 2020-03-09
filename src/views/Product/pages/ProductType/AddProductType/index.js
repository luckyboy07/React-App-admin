import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GridContainer from "../../../../../components/Grid/GridContainer";
import GridItem from "../../../../../components/Grid/GridItem";
import Card from "../../../../../components/Card/Card";
import CardBody from "../../../../../components/Card/CardBody";
import Typography from "@material-ui/core/Typography";
import {title} from "../../../../../assets/maetrial-palette";
import {withMobileDialog} from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import BootstrapInput from '../../../components/BootstrapInput'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CustomInput from "../../../../../components/CustomInput/CustomInput";
import Button from "@material-ui/core/Button";

const useStyle = makeStyles((theme) => ({
    root: {}

}))
function AddProductType() {
    const classes = useStyle
    return (
        <div className={classes.root}>
            <GridContainer>
                <GridItem container spacing={2}>
                    <GridItem xs={8}>
                        <Card>
                            9
                        </Card>
                    </GridItem>
                    <GridItem xs={4}>
                        <Card>
                        4
                        </Card>
                    </GridItem>
                </GridItem>
            </GridContainer>
        </div>
    )

}

export default AddProductType