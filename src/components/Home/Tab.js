import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import TabImg from "../../images/tab_img.png";
import TabImg2 from "../../images/tab_img2.png";
import Arrow from "../../images/Icon.svg";
import Ribbon from "../../images/Ribbon.svg";
import "../../styles/Home/Tab.scss";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function BasicTab() {
    const [value, setValue] = React.useState(0);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className="tab" sx={{ mt: 3 }}>
            <Container className="bg">
                <Box className="tab_ribbon">
                    <img src={Ribbon} alt="picture_of_ribbon" />
                </Box>
                <Box sx={{ pt: 7, pl: { xs: 0, md: 3.4 }, display: "flex", justifyContent: { xs: "center", md: "flex-start" }, flexDirection: { xs: "column", sm: "row" } }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab className="tab_item poppins" label="Business strategy" {...a11yProps(0)} />
                        <Tab className="tab_item poppins" sx={{ mx: { xs: 0, sm: 3 }, my: { xs: 4, sm: 0 } }} label="Digitalization" {...a11yProps(1)} />
                        <Tab className="tab_item poppins" label="Risk assessment" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <Grid className="tab_content" sx={{ pt: { xs: 3, md: 6 }, pb: 4 }} container>
                    <Grid xs={12} md={6}>
                        <TabPanel value={value} index={0}>
                            <Box>
                                <Typography sx={{ textAlign: { xs: "center", md: "left" } }} className="poppins" variant="h1">
                                    Helping clients with research and strategy for their business
                                </Typography>
                                <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                                    <Typography sx={{ textAlign: { xs: "center", md: "left" }, py: 3 }} className="poppins" variant="h2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                                    <Typography sx={{ textAlign: { xs: "center", md: "left" } }} className="poppins" variant="h2">
                                        Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque.
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                                    <Button className="tab_btn poppins" sx={{ pl: 0, pt: 3 }}>
                                        See all services
                                        <span>
                                            <img src={Arrow} alt="Arrow_Icon_picture" />
                                        </span>
                                    </Button>
                                </Box>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Box>
                                <Typography sx={{ textAlign: { xs: "center", md: "left" } }} className="poppins" variant="h1">
                                    Helping clients with research and strategy for their business
                                </Typography>
                                <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                                    <Typography sx={{ textAlign: { xs: "center", md: "left" }, py: 3 }} className="poppins" variant="h2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                                    <Typography sx={{ textAlign: { xs: "center", md: "left" } }} className="poppins" variant="h2">
                                        Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque.
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                                    <Button className="tab_btn poppins" sx={{ pl: 0, pt: 3 }}>
                                        See all services
                                        <span>
                                            <img src={Arrow} alt="Arrow_Icon_picture" />
                                        </span>
                                    </Button>
                                </Box>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Box>
                                <Typography sx={{ textAlign: { xs: "center", md: "left" } }} className="poppins" variant="h1">
                                    Helping clients with research and strategy for their business
                                </Typography>
                                <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                                    <Typography sx={{ textAlign: { xs: "center", md: "left" }, py: 3 }} className="poppins" variant="h2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                                    <Typography sx={{ textAlign: { xs: "center", md: "left" } }} className="poppins" variant="h2">
                                        Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque.
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                                    <Button className="tab_btn poppins" sx={{pl:0}}>
                                        See all services
                                        <span>
                                            <img src={Arrow} alt="Arrow_Icon_picture" />
                                        </span>
                                    </Button>
                                </Box>
                            </Box>
                        </TabPanel>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <TabPanel value={value} index={0}>
                            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                                <img src={TabImg} alt="img for tabbing" />
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                                <img className="tab_img2" src={TabImg2} alt="img for tabbing" />
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                                <img src={TabImg} alt="img for tabbing" />
                            </Box>
                        </TabPanel>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default BasicTab;
