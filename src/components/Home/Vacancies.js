import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import "../../styles/Home/Vacancies.scss";
import CorporateImg from "../../images/corporate.svg";

const Vacancies = () => {
    return (
        <Box class="vacancies">
            <Grid container sx={{ display: "flex", justtifyContent: "center" }}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: "flex" }}>
                        <img src={CorporateImg} alt="picture_of_girl" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }} className="vacancies_content">
                    <Box className="vacancies_content" sx={{ pl: { xs: 0, sm: 8 } }}>
                        <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }} className="vacancies_heading">
                            <Typography sx={{ textAlign: { xs: "center", sm: "left" } }} className="poppins" variant="h1">
                                Energy of a start-up combined with 30 years of experience.
                            </Typography>
                        </Box>
                        <Box sx={{ pt: { xs: 3, sm: 4 }, display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}>
                            <Button className="vacancies_btn poppins">See Job Vacancies</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Vacancies;
