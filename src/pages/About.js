import React from 'react'

import '../styles/About.css';

import Footer from '../components/Footer';
import UV from '../images/uv.jpeg';
import Hero from '../images/american_flag_grass.jpg'
import concealed from '../images/concealed_carry_badge.svg';
import level from '../images/level1_instructor.svg';
import rso from '../images/rso-badge.svg'

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';

import { amber, blue, pink, red } from '@mui/material/colors';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function About() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            <section className="about-container">
                <Card sx={{ maxWidth: 900 }} className="card-container box-shadow">
                    <CardHeader title="Vance Ferrigno" className="about-name" />
                    <CardHeader
                        avatar={
                            <Avatar sx={{ width: 100, height: 100 }} aria-label="Vance Ferrigno" src={UV}>
                            </Avatar>
                        }
                        title="Certified Firearms Instructor and Exercise Physiologist"
                        subheader="Greenville, SC"
                    />
                    <CardMedia
                        component="img"
                        className="uv"
                        height="195"
                        image={Hero}
                        alt="gun and flag"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Certified Firearms Instructor with a unique perspective on movement, efficiency and strength training encompassed in a holistic approach to firearms handling and defensive techniques.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Tooltip title="Visit my LinkedIn">
                            <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/vanceferrigno/">
                                <LinkedInIcon sx={{ color: blue[900], width: 40, height: 40 }} />
                            </IconButton>
                        </Tooltip>
                        {/* <Tooltip title="Visit my GitHub">
                        <IconButton aria-label="GitHub" href="https://github.com/lindsayreiner">
                            <GitHubIcon sx={{ color: amber[700], width: 40, height: 40 }} />
                        </IconButton>
                    </Tooltip> */}
                        <Tooltip title="Email me">
                            <IconButton aria-label="Email Me" href="mailto:vaf5@protonmail.com">
                                <EmailIcon sx={{ color: pink[900], width: 40, height: 40 }} />
                            </IconButton>
                        </Tooltip>
                        {/* <Tooltip title="Download my resume">
                        <IconButton aria-label="Resume Download" href={resume} download>
                            <ArticleIcon sx={{ color: red[900], width: 40, height: 40 }} />
                        </IconButton>
                    </Tooltip> */}

                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <Tooltip title="Show more/less">
                                <ExpandMoreIcon />
                            </Tooltip>
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph className="certs">
                                USCCA Firearms Instructor Certifications:

                                <Stack className="badges" sx={{ margin: '2em' }} direction="row" spacing={2}>
                                    <Tooltip title="Concealed Carry and Home Defense Fundamentals - Certified Instructor">
                                        <img className="avatar" sx={{ width: 100, height: 100, objectFit: 'unset' }} alt="Concealed Carry Badge" src={concealed} />
                                    </Tooltip>
                                    <Tooltip title="Range Safety Instructor">
                                        <img className="avatar" sx={{ width: 100, height: 100 }} alt="RSO Badge" src={rso} />
                                    </Tooltip>
                                    <Tooltip title="Defensive Shooting Funamentals - Level 1 - Certified Instructor">
                                        <img className=" avatar last-badge" sx={{ width: 100, height: 100 }} alt="Level 1 Instructor Badge" src={level} />
                                    </Tooltip>
                                </Stack>

                            </Typography>
                            <Typography paragraph className="about-para">
                                Vance is a strength and conditioning coach, exercise physiologist and movement specialist with a deep understanding of human biomechanics with over 35 years of experience. He has worked with a variety of populations on anything related to movement efficiency from sports performance to post-surgical corrective exercise. Clients have included PGA Champion Tour player Bernhard Langer and Gold Glove Shortstop Tony Fernandez. A large part of being an exercise physiologist is about educating clients in a way that ingrains in them a methodology on how to care for their bodies without oversight.
                            </Typography>
                            <Typography paragraph className="about-para">
                                As a firearms instructor, Vance has taken his love of teaching and experience in movement science to provide a wholistic approach to learning how to defend yourself and your family with confidence.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>

            </section >
        </>
    )
}
