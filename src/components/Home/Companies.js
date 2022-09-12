import React from "react";
import { Box, Container, Grid, Typography, Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardImageThree from "../../images/companies_3.svg";
import CardImageTwo from "../../images/companies_2.svg";
import CardImageOne from "../../images/companies_1.svg";
import Arrow from "../../images/Icon.svg";
import "../../styles/Home/Companies.scss";

const cards = [
    {
        imageName: CardImageThree,
        cardHeading: "Business strategy",
        cardParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ",
        cardBtnText: "Learn More",
        cardBtnIcon: Arrow,
    },
    {
        imageName: CardImageTwo,
        cardHeading: "Digitalization",
        cardParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ",
        cardBtnText: "Learn More",
        cardBtnIcon: Arrow,
    },
    {
        imageName: CardImageOne,
        cardHeading: "Risk assessment",
        cardParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ",
        cardBtnText: "Learn More",
        cardBtnIcon: Arrow,
    },
];

const Companies = () => {
    return (
        <Box className="companies">
            <Container>
                <Box sx={{ pt: { xs: 6, sm: 8, lg: 9} }}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-start" } }}>
                        <Typography sx={{ textAlign: { xs: "center", lg: "left" } }} className="poppins" variant="h2">
                            We help more than 1500 companies from all sectors
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-start" } }}>
                        <Typography sx={{ pt: { xs: 2, sm: 3 }, textAlign: { xs: "center", lg: "left" } }} className="poppins" variant="h5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
                        </Typography>
                    </Box>
                </Box>
                <Grid container spacing={3} sx={{ pt: { xs: 5, lg: 8 } }}>
                    {cards.map((val) => (
                        <Grid item xs={12} md={4}>
                            <Card className="card" sx={{ boxShadow: "none" }}>
                                <CardActionArea>
                                    <CardMedia component="img" image={val.imageName} />
                                    <CardContent sx={{ pl: 0 }}>
                                        <Typography sx={{ py: 1 }} className="poppins" gutterBottom variant="h4">
                                            {val.cardHeading}
                                        </Typography>
                                        <Typography className="poppins" variant="h3">
                                            {val.cardParagraph}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions sx={{ pl: 0, pt: 0 }}>
                                    <Button className="card_btn poppins" sx={{ pl: 0 }}>
                                        {val.cardBtnText}
                                        <span>
                                            <img src={val.cardBtnIcon} alt="Arrow_Icon_picture" />
                                        </span>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Companies;
