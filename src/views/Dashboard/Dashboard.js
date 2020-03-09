import React from 'react'
import Card from '../../components/Card/Card'
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Icon from "@material-ui/core/Icon";
import Warning from "@material-ui/icons/Warning";
import Danger from "../../components/Typography/Danger";
import {makeStyles} from "@material-ui/core/styles";
import {successColor, grayColor, hexToRgb, whiteColor} from '../../assets/maetrial-palette'
import GridItem from '../../components/Grid/GridItem'
import GridContainer from "../../components/Grid/GridContainer";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import StoreIcon from '@material-ui/icons/Store';
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Accessibility from "@material-ui/icons/Accessibility";
import Update from "@material-ui/icons/Update";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import ChartistGraph from 'react-chartist';
import Table from "../../components/Table/Table";

import DashboardStyle from "../../assets/component/DashboardStyle";

import {
    dailySalesChart,
    emailsSubscriptionChart,
    completedTasksChart
} from "./Graph/Graphdata.js";

const useStyle = makeStyles(DashboardStyle)

var lineChartData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
        [5, 9, 7, 8, 5, 3, 5, 4]
    ]
}
var lineChartOptions = {
    low: 0,
    showArea: true
}

function Dashboard(props) {
    const classes = useStyle()
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="warning">
                                <FileCopyIcon/>
                            </CardIcon>
                            <p className={classes.cardCategory}>Used Space</p>
                            <h3 className={classes.cardTitle}>
                                49/50 <small>GB</small>
                            </h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <Danger>
                                    <Warning/>
                                </Danger>
                                <a href="#pablo" onClick={e => e.preventDefault()} className={classes.footerTitle}>
                                    Get more space
                                </a>
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="success" stats icon>
                            <CardIcon color="success">
                                <StoreIcon/>
                            </CardIcon>
                            <p className={classes.cardCategory}>Revenue</p>
                            <h3 className={classes.cardTitle}>$34,245</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <DateRange/>
                                Last 24 Hours
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="danger" stats icon>
                            <CardIcon color="danger">
                                <InfoOutlinedIcon/>
                            </CardIcon>
                            <p className={classes.cardCategory}>Fixed Issues</p>
                            <h3 className={classes.cardTitle}>75</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <LocalOffer/>
                                Tracked from Github
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="info" stats icon>
                            <CardIcon color="info">
                                <Accessibility/>
                            </CardIcon>
                            <p className={classes.cardCategory}>Followers</p>
                            <h3 className={classes.cardTitle}>+245</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <Update/>
                                Just Updated
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                        <CardHeader color="success">
                            <ChartistGraph
                                className="ct-chart"
                                data={dailySalesChart.data}
                                type="Line"
                                options={dailySalesChart.options}
                                listener={dailySalesChart.animation}
                            />
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Daily Sales</h4>
                            <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory}/> 55%
                </span>{" "}
                                increase in today sales.
                            </p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime/> updated 4 minutes ago
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                        <CardHeader color="warning">
                            <ChartistGraph
                                className="ct-chart"
                                data={emailsSubscriptionChart.data}
                                type="Bar"
                                options={emailsSubscriptionChart.options}
                                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                                listener={emailsSubscriptionChart.animation}
                            />
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                            <p className={classes.cardCategory}>Last Campaign Performance</p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime/> campaign sent 2 days ago
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                        <CardHeader color="danger">
                            <ChartistGraph
                                className="ct-chart"
                                data={completedTasksChart.data}
                                type="Line"
                                options={completedTasksChart.options}
                                listener={completedTasksChart.animation}
                            />
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Completed Tasks</h4>
                            <p className={classes.cardCategory}>Last Campaign Performance</p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime/> campaign sent 2 days ago
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <CardHeader color="warning" pullLeft>
                            <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                            <p className={classes.cardCategoryWhite}>
                                New employees on 15th September, 2016
                            </p>
                        </CardHeader>
                        <CardBody>
                            <Table
                                tableHeaderColor="warning"
                                tableHead={["ID", "Name", "Salary", "Country"]}
                                tableData={[
                                    ["1", "Dakota Rice", "$36,738", "Niger"],
                                    ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                                    ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                                    ["4", "Philip Chaney", "$38,735", "Korea, South"]
                                ]}
                            />
                        </CardBody>
                    </Card>
                </GridItem>

            </GridContainer>
        </div>
    )

}

export default Dashboard;