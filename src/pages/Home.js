import React from 'react';
import {
    Button,
    CardActions,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Stack,
    Divider
} from '@mui/material';



import '../styles/Home.css';
import Footer from '../components/Footer'
import hero from '../images/concealed_carry_cross(1).jpg';
import range from '../images/gun_range.jpg';
import concealed from '../images/concealed2.jpg';
import pink from '../images/handgun_pink.jpg';
// import woman from '../images/woman_shooting.jpg';
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
                    <CardMedia
                        component="img"
                        height="300"
                        image={pink}
                        alt="handgun and cartridge on a table"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            INTRO TO FIREARMS SAFETY AND MARKSMANSHIP
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            If you are new to handguns this class is a great start. It will cover all aspects of handling a firearm safely.
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button size="small" color="primary" href="https://training.usconcealedcarry.com/class/intro-to-firearms-safety-and-marksmanship/278d62c6-7c59-11eb-b67d-02420a00017e">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>

                <Card className="class-card" sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={range}
                        alt="man shooting down range"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            DEFENSIVE SHOOTING FUNDAMENTALS
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This 4-hour course moves from the classroom to the range, building on the skills learned in the 'Intro to Firearms Safety and Marksmanship' class and applying them into live fire drills.
                            <br />
                            <br />
                            Click on your desired location to Learn More!
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Stack spacing={1}>
                            <Button size="small" color="primary" href="https://training.usconcealedcarry.com/class/defensive-shooting-fundamentals/4da04ed8-8dfb-11ec-8d43-0242ac120003">
                                Riverbend Sportsman Club in Inman, SC
                            </Button>
                            <Button size="small" color="primary" href="https://training.usconcealedcarry.com/class/defensive-shooting-fundamentals/76b7caee-628f-11ed-9ad0-0242ac120007">
                                MADS Range in Salem, SC
                            </Button>
                        </Stack>
                    </CardActions>
                </Card>

                <Card className="class-card" sx={{ maxWidth: 345 }}>

                    <CardMedia
                        component="img"
                        height="300"
                        image={concealed}
                        alt="two guns in holsters on a wood deck"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            SOUTH CAROLINA CONCEALED WEAPON PERMIT
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This class is designed for someone who desires to carry a concealed weapon in the state of South Carolina and its reciprocal states.
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button size="small" color="primary" href="https://training.usconcealedcarry.com/class/south-carolina-concealed-weapon-permit/97da97a4-7678-11ed-95c5-02420a000289">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}
