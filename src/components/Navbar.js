import React from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


import '../styles/Navbar.css';
import logo from '../images/ag_logo_2.png';

// const pages = ['Home', 'Courses', 'Meet Your Instructor', 'Contact'];

// const pages = [
//     { name: 'Home', url: '/' },
//     { name: 'Courses', url: 'https://training.usconcealedcarry.com/instructor/403f6128-6d56-11eb-aad4-02420a020192' },
//     { name: 'Meet Your Instructor', url: '/about' },
//     { name: 'Contact', url: '/contact' }
// ]


export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Fira Sans',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            {/* Desktop logo */}
                            <NavLink className="navBtn" to="/">
                                <img className="logo" src={logo} alt="alpha firearms logo" />
                            </NavLink>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <NavLink className='mobile-nav-btn' to='/'>
                                        <Typography textAlign="center">Home</Typography>
                                    </NavLink>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <NavLink className='mobile-nav-btn' to='https://training.usconcealedcarry.com/instructor/403f6128-6d56-11eb-aad4-02420a020192' target="_blank">
                                        <Typography textAlign="center">Classes</Typography>
                                    </NavLink>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <NavLink className='mobile-nav-btn' to='/about'>
                                        <Typography textAlign="center">Meet the Instructor</Typography>
                                    </NavLink>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <NavLink className='mobile-nav-btn' to='/contact'>
                                        <Typography textAlign="center">Contact</Typography>
                                    </NavLink>
                                </MenuItem>

                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'inherit',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            {/* Mobile logo */}
                            <NavLink className="navBtn" to="/">
                                <img className="logo" src={logo} alt="alpha firearms logo" />
                            </NavLink>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <NavLink className='desktop-nav-btn' to='/'>Home</NavLink>
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <NavLink
                                    className='desktop-nav-btn'
                                    to="https://training.usconcealedcarry.com/instructor/403f6128-6d56-11eb-aad4-02420a020192" target="_blank">Classes</NavLink>
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <NavLink className='desktop-nav-btn' to="/about">Meet the Instructor</NavLink>
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <NavLink className='desktop-nav-btn' to="/contact">Contact</NavLink>
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {/* <nav class="top-nav">

                <NavLink className="navBtn" to="/">
                    <img className="logo" src={logo} alt="alpha firearms logo" />
                </NavLink>
                <ul class="menu">
                    <li>
                        <NavLink className="navBtn" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="navBtn" to="https://training.usconcealedcarry.com/instructor/403f6128-6d56-11eb-aad4-02420a020192" target="_blank">Courses</NavLink>
                    </li>
                    <li>
                        <NavLink className="navBtn" to="/about">Meet Your Instructor</NavLink>
                    </li>
                     <li>
                        <NavLink className="navBtn" to="/blog">Blog</NavLink>
                    </li> 
                    <li>
                        <NavLink className="navBtn" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav> */}
        </>
    )
}
