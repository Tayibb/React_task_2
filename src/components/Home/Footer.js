import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import FooterLogo from "../../images/footer_logo.svg";
import Fb from "../../images/facebook.svg";
import Yt from "../../images/youtube.svg";
import Insta from "../../images/instagram.svg";
import Twitter from "../../images/twitter.svg";
import FooterLeftIcon from "../../images/icon-left.svg";
import FooterRightIcon from "../../images/icon-right.svg";
import "../../styles/Home/Footer.scss";

const Footer = () => {
    return (
        <Box className="footer" sx={{ pt: 8, pb:{xs:5,md:6} }}>
            <img className="left_icon" src={FooterLeftIcon} alt="background_overlay_image" />
            <img className="right_icon" src={FooterRightIcon} alt="background_overlay_image" />
            <Container>
                <Grid container>
                    <Grid item xs={12} md={5} lg={4}>
                        <Box>
                            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                                <img src={FooterLogo} alt="Logo_image_for_footer" />
                            </Box>
                            <Typography className="poppins" variant="h1" sx={{ py: 3, textAlign: { xs: "center", md: "left" } }}>
                                Bespoke software solutions
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                                <Box>
                                    <img src={Fb} alt="Social_media_icon_facebook" />
                                </Box>
                                <Box sx={{ pl: 2 }}>
                                    <img src={Yt} alt="Social_media_icon_Youtube" />
                                </Box>
                                <Box sx={{ pl: 2 }}>
                                    <img src={Insta} alt="Social_media_icon_instagram" />
                                </Box>
                                <Box sx={{ pl: 2 }}>
                                    <img src={Twitter} alt="Social_media_icon_twitter" />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3} lg={2}>
                        <Box sx={{ py: { xs: 6, md: 0 } }}>
                            <Typography sx={{ textAlign: { xs: "center", lg: "left" } }} className="poppins" variant="h4">
                                Company
                            </Typography>
                            <Typography className="poppins" sx={{ pt: 3, textAlign: { xs: "center", lg: "left" } }} variant="h5">
                                About Us
                            </Typography>
                            <Typography className="poppins" sx={{ pt: 2.5, textAlign: { xs: "center", lg: "left" } }} variant="h5">
                                Careers
                            </Typography>
                            <Typography className="poppins" sx={{ pt: 2.5, textAlign: { xs: "center", lg: "left" } }} variant="h5">
                                Services
                            </Typography>
                            <Typography className="poppins" sx={{ pt: 2.5, textAlign: { xs: "center", lg: "left" } }} variant="h5">
                                Blog
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3} lg={2}>
                        <Box>
                            <Typography sx={{ textAlign: { xs: "center", lg: "left" } }} className="poppins" variant="h4">
                                Connect
                            </Typography>
                            <Typography className="poppins" sx={{ pt: 3, textAlign: { xs: "center", lg: "left" } }} variant="h5">
                                hi@finsweet.com
                            </Typography>
                            <Typography className="poppins" sx={{ pt: 2.5, textAlign: { xs: "center", lg: "left" } }} variant="h5">
                                +(123) 456-7890
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={4} sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-start" }, pt: { xs: 8, lg: 0 } }}>
                        <Box>
                            <Typography sx={{ textAlign: { xs: "center", lg: "left" } }} className="poppins" variant="h4">
                                Join Newsletter
                            </Typography>
                            <input className="poppins" type="text" placeholder="Type email here" />
                            <Box sx={{ pt: 2.5, display: "flex", justifyContent: { xs: "center", lg: "flex-start" } }}>
                                <Button className="footer_btn poppins">Subscribe</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" }, justifyContent: { xs: "center", lg: "space-around", xl: "space-between" }, pt: 10 }}>
                    <Typography sx={{ textAlign: { xs: "center", lg: "left" }, pt: { xs: 2, md: 0 } }} className="poppins" variant="h5">
                        © All rights reserved – Finsweet
                    </Typography>
                    <Typography sx={{ pl: {sm:5, md: 6, lg: 0 }, textAlign: { xs: "center", lg: "left" } }} className="poppins" variant="h5">
                        Privacy Policy <span>Terms & Conditions</span>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
