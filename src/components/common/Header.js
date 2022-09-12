import * as React from "react";
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Button, Container, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../images/Logo.svg";
import "../../styles/common/Header.scss";

const navItems = ["About Us", "Careers", "Services", "Blog", "Contact us"];

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Box sx={{py:{xs:2,md:0}}}>
                <img src={Logo} alt="Logo_picture" />
            </Box>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Grid className="header_button" item xs={2} sx={{ display: { xs: "block", sm: "none" } }}>
                <Button className="header_btn poppins">Clone project</Button>
            </Grid>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box className="header">
            <AppBar className="appBar" component="nav">
                <Container>
                    <Toolbar className="toolBar">
                        <Grid item xs={2}>
                            <img src={Logo} alt="Logo_picture" />
                        </Grid>
                        <Grid item xs={8} sx={{ ml: "auto", mr: 3 }}>
                            <Box sx={{ display: { xs: "none", md: "block" } }}>
                                {navItems.map((item) => (
                                    <Button className="header_items poppins" sx={{ px: { md: 2, lg: 3 } }} key={item}>
                                        {item}
                                    </Button>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={2} sx={{ display: { xs: "none", sm: "block" }, mr: { sm: 2, md: 0 } }}>
                            <Button className="header_btn poppins">Clone project</Button>
                        </Grid>
                        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ display: { md: "none" } }}>
                            <MenuIcon></MenuIcon>
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    anchor="top"
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", md: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: "auto", height: "100vh" },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default Header;
