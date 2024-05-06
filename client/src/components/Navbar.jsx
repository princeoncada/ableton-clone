import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AddIcon from '@mui/icons-material/Add';
import { useTheme, styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Slide from '@mui/material/Slide';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import { Stack } from '@mui/material';

export default function Navbar() {
    const LINKS = ['Live', 'Push', 'Link', 'Shop', 'Packs', 'Help'];
    const MORE_ON = ['Blog', 'Ableton for the Classroom', 'Ableton for Colleges and Universities', 'Certified Training', 'About Ableton', 'Jobs'];
    const MORE_FROM = [
        {
            title: 'Loop',
            desc: "Watch Talks, Performances and Features from Ableton's Summit for Music Makers"
        },
        {
            title: 'Learning Music',
            desc: 'Learn the fundamentals of music making right in your browser'
        },
        {
            title: 'Learning Synths',
            desc: 'Get started with synthesis using a web-based synth and accompanying lessons'
        },
        {
            title: 'Making Music',
            desc: 'Some tips from 74 Creative Strategies for Electronic Producers'
        }
    ]
    const StyledLink = styled(Link)(({ theme }) => ({
        textDecoration: 'none',
        letterSpacing: '-0.02rem',
        fontSize: '1.2rem',
        [theme.breakpoints.down('lg')]: {
            fontSize: '1rem'
        },
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }));

    const LargeMenuLink = styled(Link)(({ theme }) => ({
        fontFamily: 'Roboto',
        textDecoration: 'none',
        color: 'black',
        letterSpacing: '-0.02rem',
        fontSize: '1.1rem',
        [theme.breakpoints.down('lg')]: {
            fontSize: '1rem'
        }
    }));

    const theme = useTheme();

    const [menuView, setMenuView] = useState(false);
    const [largeMenuView, setLargeMenuView] = useState(false);

    function handleLargeMenuView() {
        setLargeMenuView(x => !x);
    }

    function handleMenuView() {
        setMenuView(x => !x);
    }
    return (
        <>
            <Slide 
                direction='down' 
                in={menuView} 
                mountOnEnter 
                unmountOnExit
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    zIndex: 20,
                    backgroundColor: 'blue',
                    position: 'absolute',
                    width: '100%',
                    padding: '6.5rem 1.75rem 1.25rem',
                    [theme.breakpoints.up('md')]: {
                        display: 'none'
                    }
                }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.75rem'
                }}>
                {
                    LINKS.map(function (link) {
                        return (
                            <Link key={link} href="#" sx={{
                                color: 'white',
                                textDecoration: 'none',
                                letterSpacing: '-0.02rem',
                                fontSize: '1.2rem',
                            }}>
                                <div className='roboto-regular'>{link}</div>
                            </Link>
                        );
                    })
                }
                
                    <Link href="#" sx={{
                        color: 'white',
                        textDecoration: 'none',
                        letterSpacing: '-0.02rem',
                        fontSize: '1.2rem',
                    }}>
                        <div className='roboto-regular'>Try Live 12 for free</div>
                    </Link>
                    <Link href="#" sx={{
                        color: 'white',
                        textDecoration: 'none',
                        letterSpacing: '-0.02rem',
                        fontSize: '0.8rem',
                    }}>
                        <div className='roboto-regular'>Log in or register</div>
                    </Link>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '.80rem',
                        }}>
                            <Typography 
                            component={'div'}
                            sx={{
                                color: 'white',
                                fontSize: '1.2rem'
                            }}>
                                <div className='roboto-regular'>More on Ableton.com: </div>
                            </Typography>
                            {
                                MORE_ON.map(function (link) {
                                    return (
                                        <Link key={link} href="#" sx={{
                                            color: 'white',
                                            textDecoration: 'none',
                                            letterSpacing: '-0.02rem',
                                            fontSize: '0.8rem',
                                        }}>
                                            <div className='roboto-regular'>{link}</div>
                                        </Link>
                                    );
                                })
                            }
                        </Box>

                        <Typography 
                        component={'div'}
                        sx={{
                            color: 'white',
                            fontSize: '1.2rem'
                        }}>
                            <div className='roboto-regular'>More from Ableton.com: </div>
                        </Typography>

                    
                        
                        <Grid container spacing={2}>
                        {
                            MORE_FROM.map(function(link) {
                                return (
                                    <Grid key={link.title} item sm={3} xs={6}>
                                        <Link href="#" sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            color: 'white',
                                            textDecoration: 'none'
                                        }}>
                                            <Typography 
                                            component={'div'}
                                            sx={{
                                                fontSize: '0.8rem',
                                                letterSpacing: '-0.02rem',
                                                fontWeight: 'bold'
                                            }}>
                                                {link.title}
                                            </Typography>
                                            <Typography 
                                            component={'div'}
                                            sx={{
                                                fontSize: '0.8rem',
                                                letterSpacing: '-0.02rem',
                                            }}>
                                                {link.desc}
                                            </Typography>
                                        </Link>
                                    </Grid>
                                )
                            })
                        }
                        </Grid>
                    </Box>
                </Box>
            </Slide>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '1.25rem 2rem 1.25rem',
                [theme.breakpoints.down('lg')]: {
                    padding: '1.25rem 1.4rem 1.25rem',
                }
                
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2.5rem',
                    [theme.breakpoints.down('lg')]: {
                        gap: '2rem'
                    }
                }}>

                    <Link href="#" sx={{
                        color: 'black',
                        zIndex: 21,
                        [theme.breakpoints.down('md')]: {
                            display: 'none'
                        }
                    }}>
                        <AcUnitIcon sx={{
                            fontSize: '4rem'
                        }} />
                    </Link>

  
                    <Link href="#" sx={{
                        color: menuView ? 'white' : 'black',
                        zIndex: 21,
                        [theme.breakpoints.up('md')]: {
                            display: 'none'
                        },
                        transition: 'color .1s ease-in-out'
                    }}>
                        <AcUnitIcon sx={{
                            fontSize: '4rem'
                        }}/>
                    </Link>

                    {/* small view menu */}
                    <Link 
                    href="#" 
                    onClick={handleMenuView}
                    sx={{
                        zIndex: 21,
                        display: 'flex',
                        flexDirection: 'row',
                        color: menuView ? 'white' : 'black',
                        textDecoration: 'none',
                        letterSpacing: '-0.02rem',
                        fontSize: '1.2rem',
                        [theme.breakpoints.up('md')]: {
                            display: 'none'
                        },
                        transition: 'color .1s ease-in-out'
                    }}>
                        <div className='roboto-regular'>Menu</div>
                        {
                            menuView ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />
                        }
                    </Link>

                    {
                        LINKS.map(function(text) {
                            return (
                                <StyledLink key={text} href='#' sx={{
                                    color: 'black'
                                }}>
                                    <div className='roboto-regular'>{text}</div>
                                </StyledLink>
                            )
                        })
                    }
                    
                    <Button 
                    onClick={handleLargeMenuView}
                    disableRipple
                    size={"small"} 
                    sx={{
                        backgroundColor: 'white',
                        color: 'orange',
                        borderRadius: '0rem',
                        letterSpacing: '-0.02rem',
                        fontSize: '1.2rem',
                        '&.MuiButton-root:hover': {
                            bgcolor: 'transparent'
                        },
                        margin: 0,
                        padding: 0,
                        minWidth: 0,
                        textTransform: 'capitalize',
                        fontWeight: '400',
                        [theme.breakpoints.down('lg')]: {
                            fontSize: '1rem'
                        },
                        [theme.breakpoints.down('md')]: {
                            display: 'none'
                        }
                    }}>
                        More
                        {
                            !largeMenuView ? <AddIcon sx={{
                            fontSize: '1.4rem',
                            [theme.breakpoints.down('lg')]: {
                                fontSize: '1.2rem'
                                }
                            }} /> : <RemoveIcon sx={{
                                fontSize: '1.4rem',
                                [theme.breakpoints.down('lg')]: {
                                    fontSize: '1.2rem'
                                }
                            }} />
                      
                        }
                    </Button>

                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2.5rem',
                    [theme.breakpoints.down('lg')]: {
                        gap: '2rem'
                    }
                }}>
                    <StyledLink href="#" sx={{
                        color: 'blue',
                    }}>
                        <div className='roboto-regular'>Try Live 12 for free</div>
                    </StyledLink>
                    <Link href="#" sx={{
                        color: 'black',
                        textDecoration: 'none',
                        letterSpacing: '-0.03rem',
                        fontSize: '1.2rem',
                        [theme.breakpoints.down('lg')]: {
                            fontSize: '1rem'
                        },
                        [theme.breakpoints.down('md')]: {
                            display: 'none'
                        }
                    }}>
                        <Typography 
                        component={'div'}
                        sx={{
                            fontFamily: '"Roboto", sans-serif',
                            fontSize: '70%',
                            fontWeight: 'bold',
                        }}>
                            Log in or register
                        </Typography>
                    </Link>
                </Box>
            </Box>

            <Box sx={{
                display: !largeMenuView ? 'none' : 'flex',
                flexDirection: 'column',
                margin: 'auto',
                fontFamily: 'Roboto',
                marginLeft: '2rem',
                marginRight: '2rem',
                marginBottom: '3rem',
                gap: '3rem',
                [theme.breakpoints.down('md')]: {
                    display: 'none'
                }
            }}>
                <Box>
                    <Typography sx={{
                        fontSize: '2rem',
                        marginBottom: '1rem',
                        [theme.breakpoints.down('lg')]: {
                            fontSize: '1.8rem'
                        }
                    }}>
                        More on Ableton.com
                    </Typography>
                    <Stack
                        direction='row'
                        spacing={4}
                    >
                        <LargeMenuLink href="#">
                            Blog
                        </LargeMenuLink>
                        <LargeMenuLink href="#">
                            Ableton for the Classroom
                        </LargeMenuLink>
                        <LargeMenuLink href="#">
                            Ableton for Colleges and Universities
                        </LargeMenuLink>
                        <LargeMenuLink href="#">
                            Certified Training
                        </LargeMenuLink>
                        <LargeMenuLink sx={{color: 'orange'}} href="#">
                            About Ableton
                        </LargeMenuLink>
                        <LargeMenuLink href="#">
                            Jobs
                        </LargeMenuLink>
                        <LargeMenuLink href="#">
                            Apprenticeships
                        </LargeMenuLink>
                    </Stack>
                </Box>

                <Box>
                    <Typography sx={{
                        fontSize: '2rem',
                        marginBottom: '1rem',
                        [theme.breakpoints.down('lg')]: {
                            fontSize: '1.8rem'
                        }
                    }}>
                        More from Ableton.com
                    </Typography>
                    <Grid container spacing={12}>
                        <Grid item xs>
                            <LargeMenuLink href="#">
                                <div style={{
                                    fontWeight: '500'
                                }}>Loop</div>
                                Watch Talks, Performances and Features from Ableton's Summit for Music Makers
                            </LargeMenuLink>
                        </Grid>
                        <Grid item xs>
                            <LargeMenuLink href="#">
                                <div style={{
                                    fontWeight: '500'
                                }}>Learning Music</div>
                                Learn the fundamentals of music making right in your browser.
                            </LargeMenuLink>
                        </Grid>
                        <Grid item xs>
                            <LargeMenuLink href="#">
                                <div style={{
                                    fontWeight: '500'
                                }}>Learning Synths</div>
                                Get started with synthesis using a web-based synth and accompanying lessons.
                            </LargeMenuLink>
                        </Grid>
                        <Grid item xs>
                            <LargeMenuLink href="#">
                                <div style={{
                                    fontWeight: '500'
                                }}>Making Music</div>
                                Some tips from 74 Creative Strategies for Electronic Producers.
                            </LargeMenuLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}