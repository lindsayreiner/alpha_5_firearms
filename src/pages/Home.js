import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';

import '../styles/Home.css';
import hero from '../images/concealed_carry_cross(1).jpg';
import range from '../images/gun_range.jpg';
import concealed from '../images/concealed2.jpg';
import pink from '../images/handgun_pink.jpg';
import woman from '../images/woman_shooting.jpg';
// import level from '../images/level1_instructor.svg';
// import rso from '../images/rso-badge.svg';
// import conceal from '../images/concealed_carry_badge.svg';
// import Reviews from '../components/Reviews';


export default function Home() {
    return (
        <>
            <Box class="hero-content">
                <img className="hero-img hide" src={hero} alt="holstered pistol on a wooden frame" />
            </Box>
            <Box class="sub-header background">
                <h1 className="hero-title">
                    Gun training saves lives
                </h1>
                <h2 className="hero-subtitle">
                    Register for a class today!
                </h2>
            </Box>
            <Box className="grid">
                <Card className="class-card" sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image={pink}
                            alt="handgun and cartridge on a table"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                HANDGUN FUNDAMENTALS
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                If you are new to handguns this class is a great start.
                                <br />
                                <br />
                                Click 'Enroll' to read full class description.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Enroll
                        </Button>
                    </CardActions>
                </Card>

                <Card className="class-card" sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image={concealed}
                            alt="two guns in holsters on a wood deck"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                SC CONCEALED WEAPONS PERMIT TRAINING
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This class is designed for someone who desires to carry a concealed weapon in the state of South Carolina and its reciprocal states.
                                <br />
                                <br />
                                Click 'Enroll' to read full class description.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Enroll
                        </Button>
                    </CardActions>
                </Card>

                <Card className="class-card" sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image={range}
                            alt="man shooting down range"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                INTUITIVE SHOOTING FUNDAMENTALS LEVEL 2
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This 4-hour course moves from the classroom to the range, building on the skills learned in the Firearms Handling and Safety class and applying them into live fire drills.
                                <br />
                                <br />
                                Click 'Enroll' to read full class description.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Enroll
                        </Button>
                    </CardActions>
                </Card>

                {/* <Card className="class-card" sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image={woman}
                            alt="woman wearing pink earmuffs firing a handgun outdoors"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Enroll
                        </Button>
                    </CardActions>
                </Card> */}

            </Box>

        </>
    )
}
