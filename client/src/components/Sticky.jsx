import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function Sticky() {

    const [stick, setSticky] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 300) {  // Only evaluate after scrolling down 500 pixels
            if (currentScrollY < lastScrollY) {
                setSticky(true);  // Set sticky to true when scrolling up
            } else {
                setSticky(false); // Set sticky to false when scrolling down
            }
        }
        // Update the last known scroll position
        setLastScrollY(currentScrollY);
    };
    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    return (
        <Box sx={{
            zIndex: 10,
            position: 'sticky',
            top: stick ? 0 : -100,
            transition: 'top .3s ease-in-out',
            display: 'flex',
            flexDirection: 'row',
            gap: '1.25rem',
            padding: '1.75rem',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
        }}>
            <Link href="#" sx={{
                textDecoration: 'none',
                color: 'orange',
            }}>
                <div className="roboto-regular">About</div>
            </Link>
            <Link href="#" sx={{
                textDecoration: 'none',
                color: '#000',
            }}>
                <div className="roboto-regular">Jobs</div>
            </Link>
            <Link href="#" sx={{
                textDecoration: 'none',
                color: '#000',
            }}>
                <div className="roboto-regular">Apprenticeships</div>
            </Link>
        </Box>
    );
}