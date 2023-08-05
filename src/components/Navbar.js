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
import MenuItem from '@mui/material/MenuItem';


import '../styles/Navbar.css';
// import logo from '../images/alpha5logo_final.png';
// import LogoTwo from '../images/alpha5(1).png';
// import uv from '../images/uv.jpeg';


export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                letterSpacing: '.3rem',
                            }}
                        >
                            {/* Desktop logo */}
                            <NavLink className="bizName navBtn" to="/">
                                Fort Defiance Firearms Training
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

                                {/* <MenuItem onClick={handleCloseNavMenu}>
                                    <NavLink className='mobile-nav-btn' to='/'>
                                        <Typography textAlign="center">Home</Typography>
                                    </NavLink>
                                </MenuItem> */}
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <NavLink className='mobile-nav-btn' to='https://training.usconcealedcarry.com/instructor/403f6128-6d56-11eb-aad4-02420a020192' target="_blank">
                                        <Typography textAlign="center">Classes</Typography>
                                    </NavLink>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <NavLink className='mobile-nav-btn' to='/about'>
                                        <Typography textAlign="center">Instructor</Typography>
                                    </NavLink>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <NavLink className='mobile-nav-btn' to='/articles'>
                                        <Typography textAlign="center">Articles</Typography>
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

                            <NavLink className="bizName mobileBizName navBtn" to="/">
                                Fort Defiance Firearms Training
                            </NavLink>

                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: { xs: 'flex-end' }, paddingRight: { xs: '5rem' } }}>
                            {/* <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <NavLink className='desktop-nav-btn' to='/'>Home</NavLink>
                            </Button> */}
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
                                <NavLink className='desktop-nav-btn' to="/about">Instructor</NavLink>
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <NavLink className='desktop-nav-btn' to="/articles">Articles</NavLink>
                            </Button>
                            {/* <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <NavLink className='desktop-nav-btn' to="/contact">Contact</NavLink>
                            </Button> */}
                        </Box>

                        {/* Contact */}
                        <Box sx={{ flexGrow: 0 }}>
                            <Button
                                className="contact-btn"
                                onClick={handleOpenUserMenu}
                                variant="contained"
                                color="info"
                                size="small"
                                elevation="6"
                            >
                                Contact
                            </Button>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >

                                <MenuItem onClick={handleCloseUserMenu}>
                                    <a className="contact-links" href="tel:864-420-8261">
                                        <Typography textAlign="center">Call</Typography>
                                    </a>
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <a className="contact-links" href="mailto:vaf5@protonmail.com">
                                        <Typography textAlign="center">Send Email</Typography>
                                    </a>
                                </MenuItem>
                                <MenuItem className="contact-links" onClick={handleCloseUserMenu}>
                                    <a className="contact-links" href="https://training.usconcealedcarry.com/instructor/403f6128-6d56-11eb-aad4-02420a020192" target="_blank" rel="noreferrer">
                                        <Typography textAlign="center">Book a class</Typography>
                                    </a>
                                </MenuItem>

                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
