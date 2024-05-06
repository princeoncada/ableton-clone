import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useTheme from '@mui/material/styles/useTheme';

import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    const theme = useTheme();

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            width: '85%',
            fontFamily: 'Roboto',
            gap: '3rem',
        }}>
            <Grid container spacing={2} sx={{
                display: 'flex',
                [theme.breakpoints.down('lg')]: {
                    gap: '2rem'
                }
            }}>
                <Grid item xs={12}>
                    <Box sx={{
                        fontSize: '4rem',
                        marginBottom: '2.25rem',
                        [theme.breakpoints.down('lg')]: {
                            marginBottom: '0.1rem'
                        }
                    }}>
                        Ableton
                    </Box>
                </Grid>
                <Grid item sm={12} md={12} lg={4}>
                    <Stack spacing={0.6} sx={{
                        height: '140px',
                        [theme.breakpoints.down('lg')]: {
                            height: 'auto'
                        }
                    }}>
                        <div>Register Live or Push {`>`}</div>
                        <div>About Ableton {`>`}</div>
                        <div>Jobs {`>`}</div>
                        <div style={{
                            display: 'flex',
                            gap: '0.5rem'
                        }}>
                            <FacebookIcon fontSize='large'/>
                            <XIcon fontSize='large'/>
                            <YouTubeIcon fontSize='large'/>
                            <InstagramIcon fontSize='large'/>
                        </div>
                    </Stack>
                </Grid>
                <Grid item sm={12} md={12} lg={4}>
                    <Stack spacing={0.6}>
                        <div style={{
                            fontWeight: 'bold'
                        }}>Education</div>
                        <div>Offers for students and teachers {`>`}</div>
                        <div>Ableton for the Classroom {`>`}</div>
                        <div>Ableton for Colleges and Universities {`>`}</div>
                    </Stack>
                </Grid>
                <Grid item md={12} lg={4}>
                    <Stack spacing={0.6}>
                        <div style={{
                            fontWeight: 'bold'
                        }}>Sign up to our newsletter</div>
                        <div style={{
                            lineHeight: '1.5'
                        }}>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</div>
                        <div>
                            <TextField sx={{
                                width: '100%'
                            }}
                                label="Email"
                                size="small"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                        >
                                            <SendIcon fontSize='small' sx={{ color: 'orange'}}/>
                                        </IconButton>
                                    </InputAdornment>,
                                }}
                            />
                        </div>
                    </Stack>
                </Grid>
                <Grid item sm={12} md={12} lg={4}>
                    <Stack 
                        spacing={0.6}
                    >
                        <div style={{
                            fontWeight: 'bold'
                        }}>Community</div>
                        <div>Find Ableton User Groups {`>`}</div>
                        <div>Find Certified Training {`>`}</div>
                        <div>Become a Certified Trainer {`>`}</div>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4}>
                    <Stack
                        spacing={1.4}
                    >
                        <div style={{
                            fontWeight: 'bold'
                        }}>Language and Location</div>
                        <div style={{
                            display: 'flex',
                            gap: '0.5rem'
                        }}>
                            <FormControl sx={{ width: '50%' }}>
                                <InputLabel id="language-label">Language</InputLabel>
                                <Select
                                    labelId="language-label"
                                    id="language-select"
                                    label="Language"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ width: '50%' }}>
                                <InputLabel id="location-label">Location</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Location"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Stack>
                </Grid>
            </Grid>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 2,
                gap: '2rem',
                [theme.breakpoints.down('lg')]: {
                    flexDirection: 'column'
                }
            }}>
                <Stack
                    direction={{ md: 'column', lg: 'row' }}
                    sx={{
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        display: 'flex',
                        gap: '2rem'
                    }}
                >
                    <Box>Contact Us</Box>
                    <Box>Press Resources</Box>
                    <Box>Legal Info</Box>
                    <Box>Privacy Policy</Box>
                    <Box>Cookie Settings</Box>
                    <Box>Imprint</Box>
                </Stack>
                <Box sx={{
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    marginTop: '4rem',
                    marginBottom: '4rem',
                    [theme.breakpoints.up('lg')]: {
                        marginTop: '0rem',
                    }
                }}>
                    Made by Prince
                </Box>
            </Box>
        </Box>
    );
}