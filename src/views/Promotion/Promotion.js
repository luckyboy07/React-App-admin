import React from 'react'
import GridItem from '../../components/Grid/GridItem'
import GridContainer from "../../components/Grid/GridContainer";
import Card from '../../components/Card/Card'
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

function PromotionPage() {
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        PROMOTION
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    )
}
export default PromotionPage;