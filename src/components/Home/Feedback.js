import React, { useRef, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Client from "../../images/client.svg";
import play from "../../images/play.svg";
import pause from "../../images/pause.png";
import "../../styles/Home/Feedback.scss";
import Video from "../../video/video.mp4";

const Feedback = () => {
    const videoClip = useRef();
    const playClick = useRef();
    const PauseClick = useRef();
    const textPlay = useRef();
    const textPause = useRef();
    const Play = () => {
        videoClip.current.play();
        playClick.current.style.display = "none";
        PauseClick.current.style.display = "block";
        textPlay.current.style.display = "none";
        textPause.current.style.display = "block";
    };
    const Pause = () => {
        videoClip.current.pause();
        playClick.current.style.display = "block";
        PauseClick.current.style.display = "none";
        textPlay.current.style.display = "block";
        textPause.current.style.display = "none";
    };
    useEffect(() => {
        playClick.current.style.display = "block";
        PauseClick.current.style.display = "none";
        textPlay.current.style.display = "block";
        textPause.current.style.display = "none";
    });
    return (
        <Box className="feedback" sx={{ mt:{xs:4,md:6} }}>
            <Container>
                <Grid container>
                    <Grid item xs={12} lg={6}>
                        <Box sx={{ py: 3 }}>
                            <Typography className="poppins" variant="h1">
                                Finsweet was a Dream to work with
                            </Typography>
                            <Typography className="poppins" sx={{ pt: 2 }} variant="h4">
                                Maecenas efficitur scelerisque lorem, et varius lacus tincidunt vel. Pellentesque a arcu vitae diam dapibus mattis vel vel orci. Vivamus eleifend nec felis vel auctor.
                            </Typography>
                            <Box sx={{ display: "flex", pt:5 }}>
                                <Box>
                                    <img src={Client} alt="picture_of_client" />
                                </Box>
                                <Box sx={{ pt:{xs:0.5,md:1.3}, pl: 2 }}>
                                    <Typography className="poppins" variant="h5">
                                        Chikelu Neo
                                    </Typography>
                                    <Typography className="poppins" variant="h6">
                                        CEO at MazeAI
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6} sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-start" } }} className="video_main">
                        <Box className="video_size">
                            <Box className="video_overlay" sx={{ display: "flex", alignItems: "center" }}>
                                <img src={play} ref={playClick} alt="play-icon" className="playicon" onClick={Play} />
                                <img src={pause} ref={PauseClick} alt="play-icon" className="pauseicon" onClick={Pause} />
                                <Typography variant="h5" className="poppins" ref={textPlay} sx={{ pl:{xs:1,sm:2} }}>
                                    Play
                                </Typography>
                                <Typography variant="h5" className="poppins" ref={textPause} sx={{ pl:{xs:1,sm:2} }}>
                                    Pause
                                </Typography>
                            </Box>
                            <Box sx={{display:"flex",justifyContent:{xs:"center",lg:"flex-start"}}}>
                                <video className="video" ref={videoClip}>
                                    <source src={Video} />
                                </video>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Feedback;
