import React, { useState } from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import MainImg from "../../images/main1.png";
import MainLogoOne from "../../images/main_logo_1.svg";
import MainLogoTwo from "../../images/main_logo_2.svg";
import MainLogoThree from "../../images/main_logo_3.svg";
import "../../styles/Home/Main.scss";

const Main = () => {
    const [stateOne, setstateOne] = useState("main_btn_yellow");
    const [stateTwo, setstateTwo] = useState("main_btn_transparent");

    const changeColorOne=()=>{
        setstateOne("main_btn_yellow");
        setstateTwo("main_btn_transparent");
    }

    const changeColorTwo = () => {
        setstateOne("main_btn_transparent");
        setstateTwo("main_btn_yellow");
    };

    return (
        <Box className="main" sx={{ pt: { xs: 7, md: 9, lg: 10 } }}>
            <Container>
                <Grid container sx={{ display: "flex" }}>
                    <Grid item xs={12} lg={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Box className="main_text">
                            <Typography className="poppins" variant="h1" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                                Prosper with our bespoke solutions
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-start" } }}>
                                <Typography sx={{ pt: { xs: 2, lg: 3 }, pb: { xs: 3, sm: 4, lg: 3 }, textAlign: { xs: "center", lg: "left" } }} className="poppins" variant="h5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
                                </Typography>
                            </Box>
                            <Box className="main_btns" sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", lg: "flex-start" }, alignItems: { xs: "center", lg: "flex-start" } }}>
                                <Button className={stateOne} onClick={changeColorOne}>
                                    See our services
                                </Button>
                                <Button className={stateTwo} onClick={changeColorTwo} sx={{ ml: { xs: 0, sm: 5 }}}>
                                    See All Services
                                </Button>
                            </Box>
                            <Box sx={{ pt: { xs: 4, sm: 5, md: 6 } }}>
                                <Box sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-start" } }}>
                                    <Typography className="poppins" variant="h6">
                                        Worked with 100+ Companies
                                    </Typography>
                                </Box>
                                <Box className="main_logos" sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", lg: "flex-start" }, pt: 3, pb: { xs: 7, sm: 9 } }}>
                                    <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" }, pt: { xs: 3, sm: 0 } }}>
                                        <img src={MainLogoOne} alt="logo_brand" />
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" }, py: { xs: 6, sm: 0 } }}>
                                        <img className="Main_logo_2" src={MainLogoTwo} alt="logo_brand" />
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}>
                                        <img src={MainLogoThree} alt="logo_brand" />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6} sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-start" }, alignItems: "flex-end" }}>
                        <Box className="main_img">
                            <img src={MainImg} alt="picture_of_a_man" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Main;
