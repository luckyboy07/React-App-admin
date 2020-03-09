import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import Card from "../../../../components/Card/Card";
import CardBody from "../../../../components/Card/CardBody";
import Typography from "@material-ui/core/Typography";
import {withMobileDialog} from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import BootstrapInput from '../../components/BootstrapInput'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";
import Table from './component/Table'
import Modal from './component/Modal'
import CustomInput from "../../../../components/CustomInput/CustomInput";

const useStyle = makeStyles((theme) => ({
    root: {
        margin: '0px'
    },
    title: {
        textAlign: 'left',
        padding: '15px 20px 0px'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    labelStyle: {
        marginLeft: -10,
        fontSize: 20,
        marginBottom: 10
    },
    buttonContainer: {
        width: '100%',
        textAlign: 'left',
        marginTop: '10px',
        textTransform: 'none'
    },
    buttonSeparator: {
        marginLeft: '15px',
        marginRight: '15px'
    },
    marginTop: {
        marginTop: '10px'
    },
    headerTable: {
        width: '100%',
        textAlign: 'right',
        marginBottom: '10px'
    },
    marginBot: {
        marginBottom: 0
    }
}))


function AddProductPage(props) {
    const classes = useStyle();
    const [age, setAge] = React.useState('');
    const [isOpen, setOpenModal] = React.useState(false)
    const handleChange = event => {
        setAge(event.target.value);
    };
    const handleModalChange = e => {
        setOpenModal(!isOpen)
    }
    return (
        <div className={classes.root}>
            <GridContainer>
                <GridItem container spacing={2}>
                    <GridItem xs={9}>
                        <form className={classes.form} noValidate>
                            <GridContainer>
                                <Card className={classes.marginBot}>
                                    <Typography variant="h6" className={classes.title}>
                                        Product Information
                                    </Typography>
                                    <CardBody>
                                        <GridContainer>
                                            <GridItem xs={6}>
                                                <FormControl className={classes.margin} variant="filled" fullWidth>
                                                    <InputLabel shrink htmlFor="bootstrap-input"
                                                                className={classes.labelStyle}>
                                                        Product Type
                                                    </InputLabel>
                                                    <Select
                                                        labelId="demo-customized-select-label"
                                                        id="demo-customized-select"
                                                        value={age}
                                                        onChange={handleChange}
                                                        input={<BootstrapInput/>}
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={6}>
                                                <FormControl className={classes.margin} variant="filled" fullWidth>
                                                    <InputLabel shrink htmlFor="bootstrap-input"
                                                                className={classes.labelStyle}>
                                                        Product Name
                                                    </InputLabel>
                                                    <BootstrapInput placeholder="Product name" id="bootstrap-input"/>
                                                </FormControl>
                                            </GridItem>
                                            <GridItem item xs={6}>
                                                <FormControl className={classes.margin} variant="filled" fullWidth>
                                                    <InputLabel shrink htmlFor="bootstrap-input"
                                                                className={classes.labelStyle}>
                                                        SKU
                                                    </InputLabel>
                                                    <BootstrapInput placeholder="SKU" id="bootstrap-input"/>
                                                </FormControl>
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12}>
                                                <FormControl className={classes.margin} variant="filled" fullWidth>
                                                    <InputLabel shrink htmlFor="bootstrap-input"
                                                                className={classes.labelStyle}>
                                                        Description
                                                    </InputLabel>
                                                    <CustomInput
                                                        id="about-me"
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            multiline: true,
                                                            rows: 5
                                                        }}
                                                    />
                                                </FormControl>
                                            </GridItem>
                                            <GridItem xs={12}>
                                                <FormControl className={classes.margin} variant="filled" fullWidth>
                                                    <InputLabel shrink htmlFor="bootstrap-input"
                                                                className={classes.labelStyle}>
                                                        Product Images
                                                    </InputLabel>

                                                </FormControl>
                                                <div className={classes.buttonContainer}>
                                                    <Button variant="outlined" color="primary">Upload Image</Button>
                                                    <span className={classes.buttonSeparator}>or</span>
                                                    <Button variant="outlined" color="primary" onClick={handleModalChange}>Select from
                                                        Assets</Button>
                                                </div>
                                                <div className={classes.marginTop}>
                                                    <div className={classes.headerTable}>
                                                        <Button variant="outlined" color="secondary">Delete</Button>
                                                    </div>
                                                    <Table/>
                                                </div>

                                            </GridItem>
                                        </GridContainer>

                                    </CardBody>
                                </Card>
                            </GridContainer>
                            <GridContainer>
                                <GridItem  xs={12}>
                                    <Card className={classes.marginBot}>
                                        <Typography variant="h6" className={classes.title}>
                                            Pricing
                                        </Typography>
                                        <CardBody>
                                            <GridContainer>
                                                <GridItem xs={4}>
                                                    <FormControl className={classes.margin} variant="filled" fullWidth>
                                                        <InputLabel shrink htmlFor="bootstrap-input"
                                                                    className={classes.labelStyle}>
                                                            Purchase price
                                                        </InputLabel>
                                                        <BootstrapInput placeholder="Purchase price"
                                                                        id="bootstrap-input"/>
                                                    </FormControl>
                                                </GridItem>
                                                <GridItem xs={4}>
                                                    <FormControl className={classes.margin} variant="filled" fullWidth>
                                                        <InputLabel shrink htmlFor="bootstrap-input"
                                                                    className={classes.labelStyle}>
                                                            Markup price
                                                        </InputLabel>
                                                        <BootstrapInput placeholder="Markup price"
                                                                        id="bootstrap-input"/>
                                                    </FormControl>
                                                </GridItem>
                                                <GridItem xs={4}>
                                                    <FormControl className={classes.margin} variant="filled" fullWidth>
                                                        <InputLabel shrink htmlFor="bootstrap-input"
                                                                    className={classes.labelStyle}>
                                                            Retail price
                                                        </InputLabel>
                                                        <BootstrapInput placeholder="Retail price"
                                                                        id="bootstrap-input"/>
                                                    </FormControl>
                                                </GridItem>
                                            </GridContainer>
                                        </CardBody>
                                    </Card>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem  xs={12}>
                                    <Card className={classes.marginBot}>
                                        <Typography variant="h6" className={classes.title}>
                                            Supplier Information
                                        </Typography>
                                        <CardBody >
                                            <GridContainer>
                                                <GridItem xs={6}>
                                                    <FormControl className={classes.margin} variant="filled" fullWidth>
                                                        <InputLabel shrink htmlFor="bootstrap-input"
                                                                    className={classes.labelStyle}>
                                                            Supplier
                                                        </InputLabel>
                                                        <Select
                                                            labelId="demo-customized-select-label"
                                                            id="demo-customized-select"
                                                            value={age}
                                                            onChange={handleChange}
                                                            input={<BootstrapInput/>}
                                                        >
                                                            <MenuItem value="">
                                                                <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </GridItem>
                                                <GridItem xs={6}>
                                                    <FormControl className={classes.margin} variant="filled" fullWidth>
                                                        <InputLabel shrink htmlFor="bootstrap-input"
                                                                    className={classes.labelStyle}>
                                                            Store/Branch
                                                        </InputLabel>
                                                        <Select
                                                            labelId="demo-customized-select-label"
                                                            id="demo-customized-select"
                                                            value={age}
                                                            onChange={handleChange}
                                                            input={<BootstrapInput/>}
                                                        >
                                                            <MenuItem value="">
                                                                <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </GridItem>
                                            </GridContainer>
                                        </CardBody>
                                    </Card>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem  xs={12}>
                                    <Card className={classes.marginBot}>
                                        <Typography variant="h6" className={classes.title}>
                                            Stock and Store Pricing
                                        </Typography>
                                        <CardBody>

                                        </CardBody>
                                    </Card>
                                </GridItem>
                            </GridContainer>
                        </form>
                    </GridItem>

                    <GridItem item xs={3}>
                        <Card>
                            <CardBody >
                                <GridContainer>
                                    <GridItem xs={12}>
                                        <FormControl className={classes.margin} variant="filled" fullWidth>
                                            <InputLabel shrink htmlFor="bootstrap-input"
                                                        className={classes.labelStyle}>
                                                Category name
                                            </InputLabel>
                                            <Select
                                                labelId="demo-customized-select-label"
                                                id="demo-customized-select"
                                                value={age}
                                                onChange={handleChange}
                                                input={<BootstrapInput/>}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem xs={12}>
                                        <FormControl className={classes.margin} variant="filled" fullWidth>
                                            <InputLabel shrink htmlFor="bootstrap-input"
                                                        className={classes.labelStyle}>
                                                Tag
                                            </InputLabel>
                                            <Select
                                                labelId="demo-customized-select-label"
                                                id="demo-customized-select"
                                                value={age}
                                                onChange={handleChange}
                                                input={<BootstrapInput/>}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </GridItem>
                                </GridContainer>
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridItem>

            </GridContainer>
           <Modal setOpen={handleModalChange} open={isOpen}/>
        </div>
    )
}

export default AddProductPage;