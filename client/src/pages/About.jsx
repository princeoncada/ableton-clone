import Navbar from '../components/Navbar.jsx';
import Sticky from '../components/Sticky.jsx';
import Footer from '../components/Footer.jsx';
import { Typography, Box, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function About() {
    const theme = useTheme();
    return (
        <>
            <Navbar />
            <div style={{
                backgroundColor: 'rgb(241, 241, 241)',
                height: '0.15rem'
            }}>
            </div>
            <Sticky />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8rem',
                [theme.breakpoints.down('md')]: {
                    gap: '4rem'
                },
                [theme.breakpoints.down('sm')]: {
                    gap: '2rem'
                }
            }}>
                <Box sx={{
                    backgroundImage: 'url(/header-image.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: 'calc(100vh - 120px)',
                    width: '85%',
                    margin: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography sx={{
                        color: 'orange',
                        fontSize: '8rem',
                        letterSpacing: '1rem',
                        [theme.breakpoints.down('lg')]: {
                            fontSize: '6rem'
                        },
                        [theme.breakpoints.down('md')]: {
                            fontSize: '4.25rem'
                        },
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '2rem'
                        }
                    }}>
                        <div className="roboto-bold">
                            Abletone
                        </div>
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    width: '70%',
                    margin: 'auto',
                    [theme.breakpoints.up('lg')]: {
                        width: '60%'
                    },
                    [theme.breakpoints.down('md')]: {
                        width: '85%'
                    }
                }}>
                    <Typography sx={{
                        fontSize: '1.875rem',
                        [theme.breakpoints.down('lg')]: {
                            fontSize: '1.25rem'
                        }
                    }}>
                        <div className='roboto-bold'>
                            We make <span style={{
                                color: 'blue'
                            }}>Live</span>, <span style={{
                                color: 'blue'
                            }}>Push</span>, <span style={{
                                color: 'blue'
                            }}>Note</span> and <span style={{
                                color: 'blue'
                            }}>Link</span> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.
                        </div>
                    </Typography>
                    <Typography sx={{
                        fontSize: '1.25rem',
                        [theme.breakpoints.down('lg')]: {
                            fontSize: '1rem'
                        }
                    }}>
                        <div className='roboto-regular'>
                            Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.
                        </div>
                    </Typography>
                </Box>

                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'end',
                }}>
                    <Box sx={{
                        position: 'relative',
                        backgroundColor: '#FBFFA7!important',
                        width: '927.367px',
                        height: '927.367px',
                        zIndex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        [theme.breakpoints.down(1600)]: {
                            width: '58vw',
                            height: '58vw',
                        },
                    }}>
                        <Box sx={{
                            position: 'absolute',
                            backgroundImage: 'url(/collage1.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            left: '-60%',
                            width: '687.300px',
                            height: '687.300px',
                            [theme.breakpoints.down(1600)]: {
                                width: '43vw',
                                height: '43vw',
                            },
                        }}>

                        </Box>
                        <Box sx={{
                            position: 'absolute',
                            left: '26%',
                            backgroundImage: 'url(/collage2.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '607.375px',
                            height: '399.600px',
                            [theme.breakpoints.down(1600)]: {
                                width: '38vw',
                                height: '25vw',
                            },
                        }}>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    width: '70%',
                    margin: 'auto',
                    [theme.breakpoints.up('lg')]: {
                        width: '60%'
                    },
                    [theme.breakpoints.down('md')]: {
                        width: '85%'
                    }
                }}>
                    <Typography sx={{
                        fontSize: '1.875rem',
                        [theme.breakpoints.down('lg')]: {
                            fontSize: '1.25rem'
                        }
                    }}>
                        <div className='roboto-bold'>
                            Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.
                        </div>
                    </Typography>
                    <Typography sx={{
                        fontSize: '1.25rem',
                        [theme.breakpoints.down('lg')]: {
                            fontSize: '1rem'
                        }
                    }}>
                        <div className='roboto-regular'>
                            We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.
                        </div>
                    </Typography>
                </Box>

                <Box sx={{
                    width: '60%',
                    height: '540px',
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    [theme.breakpoints.down(1600)]: {
                        height: '33.4vw',
                        width: '60%'
                    },
                    [theme.breakpoints.down('lg')]: {
                        height: '39.1vw',
                        width: '70%'
                    },
                    [theme.breakpoints.down('md')]: {
                        height: '47.2vw',
                        width: '85%'
                    }
                }}>
                    <iframe 
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/9SbnhgjeyXA?si=fu0gssAqyGx-XyPu" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                    </iframe>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    width: '70%',
                    margin: 'auto',
                    [theme.breakpoints.up('lg')]: {
                        width: '60%'
                    },
                    [theme.breakpoints.down('md')]: {
                        width: '85%'
                    }
                }}>
                    <Typography sx={{
                        fontSize: '1.875rem',
                        [theme.breakpoints.down('lg')]: {
                            fontSize: '1.25rem'
                        }
                    }}>
                        <div className='roboto-bold'>
                            We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.
                        </div>
                    </Typography>
                    <Typography sx={{
                        fontSize: '1.25rem',
                        [theme.breakpoints.down('lg')]: {
                            fontSize: '1rem'
                        }
                    }}>
                        <div className='roboto-regular'>
                            Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.
                        </div>
                    </Typography>
                </Box>

                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'start',
                }}>
                    <Box sx={{
                        position: 'relative',
                        backgroundColor: '#B6FFC0!important',
                        width: '927.367px',
                        height: '1199.700px',
                        zIndex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'end',
                        [theme.breakpoints.down(1600)]: {
                            width: '58vw',
                            height: '75vw',
                        },
                    }}>
                        <Box sx={{
                            position: 'absolute',
                            backgroundImage: 'url(/collage5.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            left: '87%',
                            width: '666.487px',
                            height: '666.487px',
                            [theme.breakpoints.down(1600)]: {
                                width: '41.66667vw',
                                height: '41.66667vw',
                            },
                        }}>

                        </Box>
                        <Box sx={{
                            position: 'absolute',
                            backgroundImage: 'url(/collage4.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            left: '14%',
                            top: '11%',
                            width: '533.194px',
                            height: '399.900px',
                            [theme.breakpoints.down(1600)]: {
                                width: '33.3333vw',
                                height: '25vw',
                            },
                        }}>
                        </Box>
                        <Box sx={{
                            position: 'absolute',
                            backgroundImage: 'url(/collage3.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            left: '14%',
                            bottom: '11%',
                            width: '533.194px',
                            height: '399.900px',
                            [theme.breakpoints.down(1600)]: {
                                width: '33.3333vw',
                                height: '25vw',
                            },
                        }}>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    width: '70%',
                    margin: 'auto',
                    [theme.breakpoints.up('lg')]: {
                        width: '60%'
                    },
                    [theme.breakpoints.down('md')]: {
                        width: '85%'
                    }
                }}>
                    <Typography sx={{
                        fontSize: '1.875rem',
                        [theme.breakpoints.down('lg')]: {
                            fontSize: '1.25rem'
                        }
                    }}>
                        <div className='roboto-bold'>
                            We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.
                        </div>
                    </Typography>
                    <Typography sx={{
                        fontSize: '1.25rem',
                        [theme.breakpoints.down('lg')]: {
                            fontSize: '1rem'
                        }
                    }}>
                        <div className='roboto-regular'>
                            Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.
                        </div>
                    </Typography>
                </Box>

                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Box sx={{
                        position: 'relative',
                        backgroundImage: 'url(/highlight1.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: '0 -156px',
                        width: '1000px',
                        height: '933.094px',
                        zIndex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        [theme.breakpoints.down(1600)]: {
                            width: '59.2vw',
                            height: '50.33333vw',
                        },
                        [theme.breakpoints.down('lg')]: {
                            width: '69vw',
                            height: '50.33333vw',
                        },
                        [theme.breakpoints.down('md')]: {
                            width: '84vw',
                            height: '50.33333vw',
                        },
                    }}>
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    width: '70%',
                    margin: 'auto',
                    [theme.breakpoints.up('lg')]: {
                        width: '60%'
                    },
                    [theme.breakpoints.down('md')]: {
                        width: '85%'
                    }
                }}>
                    <Typography sx={{
                        fontSize: '1.875rem',
                        [theme.breakpoints.down('lg')]: {
                            fontSize: '1.25rem'
                        }
                    }}>
                        <div className='roboto-bold'>
                            We’re passionate about what we do, but we’re equally passionate about improving who we are.
                        </div>
                    </Typography>
                    <Typography sx={{
                        fontSize: '1.25rem',
                        [theme.breakpoints.down('lg')]: {
                            fontSize: '1rem'
                        }
                    }}>
                        <div className='roboto-regular'>
                            We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.
                        </div>
                        <div className='roboto-regular' style={{ marginTop: '1rem' }}>
                            Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.
                        </div>
                    </Typography>
                </Box>

                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Box sx={{
                        position: 'relative',
                        backgroundColor: '#D5B3FF!important',
                        width: '1066.390px',
                        height: '933.094px',
                        zIndex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        [theme.breakpoints.down(1600)]: {
                            width: '66.66667vw',
                            height: '58.33333vw',
                        },
                    }}>
                        <Box sx={{
                            position: 'absolute',
                            backgroundImage: 'url(/collage6.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            left: '60.9%',
                            width: '666.487px',
                            height: '666.487px',
                            [theme.breakpoints.down(1600)]: {
                                width: '41.66667vw',
                                height: '41.66667vw',
                            },
                        }}>

                        </Box>
                        <Box sx={{
                            position: 'absolute',
                            backgroundImage: 'url(/collage7.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            left: '-12%',
                            width: '533.194px',
                            height: '399.900px',
                            [theme.breakpoints.down(1600)]: {
                                width: '33.3333vw',
                                height: '25vw',
                            },
                        }}>
                        </Box>
                    </Box>
                </Box>
                
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    width: '70%',
                    margin: 'auto',
                    [theme.breakpoints.up('lg')]: {
                        width: '60%'
                    },
                    [theme.breakpoints.down('md')]: {
                        width: '85%'
                    }
                }}>
                    <Typography sx={{
                        fontSize: '1.875rem',
                        [theme.breakpoints.down('lg')]: {
                            fontSize: '1.25rem'
                        }
                    }}>
                        <div className='roboto-bold'>
                            We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.
                        </div>
                    </Typography>
                    <Typography sx={{
                        fontSize: '1.25rem',
                        [theme.breakpoints.down('lg')]: {
                            fontSize: '1rem'
                        }
                    }}>
                        <div className='roboto-regular'>
                            If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.
                        </div>
                    </Typography>
                </Box>

                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    [theme.breakpoints.down(1280)]: {
                        flexDirection: 'column'
                    }
                }}>
                    <Box sx={{
                        backgroundImage: 'url(/highlight2.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '666.487px',
                        height: '666.487px',
                        [theme.breakpoints.down(1600)]: {
                            width: '41.66667vw',
                            height: '41.66667vw',
                        },
                        [theme.breakpoints.down(1280)]: {
                            width: '85%'
                        }
                    }}>
                    </Box>
                    <Box sx={{
                        backgroundColor: '#B1C5FF!important',
                        width: '666.487px',
                        height: '666.487px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        [theme.breakpoints.down(1600)]: {
                            width: '41.66667vw',
                            height: '41.66667vw',
                        },
                        [theme.breakpoints.down('md')]: {
                            width: '41.66667vw',
                            height: 'auto',
                        },
                        [theme.breakpoints.down(1280)]: {
                            width: '85%',
                            height: 'auto',
                        }
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '3rem',
                            fontSize: '1.875rem',
                            margin: '10%',
                            [theme.breakpoints.down('lg')]: {
                                fontSize: '1.rem'
                            },
                            [theme.breakpoints.down('md')]: {
                                gap: '1.5rem',
                                fontSize: '1.25rem'
                            },
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '1rem'
                            }
                        }}>
                            <Box className='roboto-regular' sx={{
                                lineHeight: '3rem',
                                fontWeight: 500,
                                [theme.breakpoints.down('md')]: {
                                    lineHeight: '2rem'
                                }
                            }}>
                                We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.
                            </Box>
                            <Link sx={{
                                color: 'blue',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }} href='/jobs'>
                                <div className='roboto-regular'>
                                    See latest jobs {'>'}
                                </div>
                            </Link>
                        </Box>
                    </Box>
                </Box>
                <div style={{
                    backgroundColor: 'rgb(241, 241, 241)',
                    height: '0.15rem'
                }}>
                </div>
                <Footer />
            </Box>
        </>
    )
}