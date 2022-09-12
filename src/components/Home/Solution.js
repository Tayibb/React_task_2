import React from "react";
import { Box, Container, Grid, Typography, CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconOne from "../../images/solution_icon_1.svg";
import IconTwo from "../../images/solution_icon_2.svg";
import IconThree from "../../images/solution_icon_3.svg";
import "../../styles/Home/Solution.scss";

const SolutionCard = [
    {
        imageName: IconOne,
        cardHeading: "Invoicing",
        cardParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ",
    },
    {
        imageName: IconTwo,
        cardHeading: "Support",
        cardParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,  ",
    },
    {
        imageName: IconThree,
        cardHeading: "Surveying",
        cardParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,  ",
    },
];

const Solution = () => {
    return (
        <Box className="solution" sx={{ mt:{xs:3,sm:4,md:6}, pb:{xs:7,lg:8} }}>
            <Container>
                <Grid container sx={{ display: "flex", justifyContent: "space-between", pt: { xs: 6, sm: 7 } }}>
                    <Grid sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }} item xs={12} lg={6}>
                        <Typography sx={{ textAlign: { xs: "center", md: "left" } }} className="poppins" variant="h2">
                            We are building software solution that solves your business challenges
                        </Typography>
                    </Grid>
                    <Grid item sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }} xs={12} lg={5}>
                        <Typography sx={{ pt: 3, textAlign: { xs: "center", md: "left" } }} className="poppins" variant="h5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={3} sx={{ pt: { xs: 5, lg: 8 } }}>
                    {SolutionCard.map((val) => (
                        <Grid item xs={12} md={4}>
                            <Card className="card" sx={{ boxShadow: "none" }}>
                                <CardActionArea>
                                    <CardContent sx={{ pl: 4 }}>
                                        <Box sx={{ py: 4 }}>
                                            <img src={val.imageName} alt="Card_icon_picture" />
                                        </Box>
                                        <Typography className="poppins" gutterBottom variant="h4">
                                            {val.cardHeading}
                                        </Typography>
                                        <Typography sx={{ pt: 1, pb: 3 }} className="poppins" variant="h6">
                                            {val.cardParagraph}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Solution;
