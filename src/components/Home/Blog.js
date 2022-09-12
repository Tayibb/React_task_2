import React from "react";
import { Box, Container, Grid, Typography, Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardImageThree from "../../images/blog_img1.svg";
import CardImageTwo from "../../images/blog_img2.svg";
import CardImageOne from "../../images/blog_img3.svg";
import Arrow from "../../images/Icon.svg";
import "../../styles/Home/Blog.scss";

const cards = [
    {
        imageName: CardImageThree,
        cardHeading: "Why you have to digitalize in 2021",
        cardParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ",
        cardBtnText: "Learn More",
        cardBtnIcon: Arrow,
    },
    {
        imageName: CardImageTwo,
        cardHeading: "Our internal process and longerm vision",
        cardParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ",
        cardBtnText: "Learn More",
        cardBtnIcon: Arrow,
    },
    {
        imageName: CardImageOne,
        cardHeading: "Helping the next generation of leaders",
        cardParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ",
        cardBtnText: "Learn More",
        cardBtnIcon: Arrow,
    },
];

const Blog = () => {
    return (
        <Box className="blog" sx={{ mt:{xs:6,lg:7}, pb: 2 }}>
            <Container>
                <Box sx={{ pt: { xs: 5, sm: 7,lg:8} }}>
                    <Typography className="poppins" variant="h2">
                        Latest Blog & News
                    </Typography>
                </Box>
                <Grid container spacing={3} sx={{ pt: { xs: 5, sm: 6, md: 7 }, pb:{xs:4,sm:5,md:6} }}>
                    {cards.map((val) => (
                        <Grid item xs={12} md={4}>
                            <Card className="card" sx={{ boxShadow: "none" }}>
                                <CardActionArea>
                                    <CardMedia className="card_img" component="img" image={val.imageName} />
                                    <CardContent className="card_content" sx={{ pl: 3 }}>
                                        <Typography sx={{ py: 1 }} className="poppins" gutterBottom variant="h4">
                                            {val.cardHeading}
                                        </Typography>
                                        <Typography className="poppins" variant="h3">
                                            {val.cardParagraph}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className="card_btn" sx={{ pl: 3, pt: 0, pb: 2 }}>
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

export default Blog;
