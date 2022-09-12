import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import GirlImage from "../../images/main-girl.png";
import "../../styles/Home/Experience.scss";

const Experience = () => {
    return (
        <Box className="experience" sx={{ pt: { xs: 5, sm: 8 }, pb: { xs: 3, sm: 8 } }}>
            <Container>
                <Grid spacing={4} container>
                    <Grid item xs={12} lg={6}>
                        <Box sx={{ pt: { lg: 6 } }}>
                            <Box sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-start" } }}>
                                <Typography sx={{ textAlign: { xs: "center", lg: "left" } }} className="poppins" variant="h2">
                                    The energy of a start-up combined with 30 years of experience.
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-start" } }}>
                                <Typography sx={{ py: { xs: 3, sm: 4 }, textAlign: { xs: "center", lg: "left" } }} className="poppins" variant="h3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, pt: 2 }}>
                            <Box>
                                <Typography sx={{ textAlign: { xs: "center", lg: "left" } }} className="Inter" variant="h4">
                                    15+
                                </Typography>
                                <Typography sx={{ py: 2, textAlign: { xs: "center", lg: "left" } }} className="poppins" variant="h5">
                                    Awards received
                                </Typography>
                                <Box sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-start" } }}>
                                    <Typography sx={{ textAlign: { xs: "center", lg: "left" } }} className="poppins" variant="h6">
                                        Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ pt: { xs: 5, sm: 0 } }}>
                                <Typography sx={{ textAlign: { xs: "center", lg: "left" } }} className="Inter" variant="h4">
                                    500+
                                </Typography>
                                <Typography sx={{ py: 2, textAlign: { xs: "center", lg: "left" } }} className="poppins" variant="h5">
                                    Clients served
                                </Typography>
                                <Box sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-start" } }}>
                                    <Typography sx={{ textAlign: { xs: "center", lg: "left" } }} className="poppins" variant="h6">
                                        Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-start" }, pt: { xs: 1, sm: 3, lg: 0 } }}>
                            <img src={GirlImage} alt="picture_of_a_girl" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Experience;
