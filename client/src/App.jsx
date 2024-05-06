import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import About from './pages/About';
import './index.css'

function App() {
	return (
		<>
			<Box sx={{
				backgroundColor: 'white',
				maxWidth: '1600px',
				margin: 'auto'
			}}>
				<BrowserRouter>
					<Routes>
						<Route path='/en' element={<h1>Home</h1>} />
						<Route path='/' element={<About />} />
					</Routes>
				</BrowserRouter>
			</Box>
		</>
	)
}

export default App
