
import { Box } from '@mui/material'
import React from 'react'
import Crypto from './components/Crypto'
import News from './components/News'
import Stats from './components/Stats'

const HomeComponent = () => {
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, minHeight: "100vh" }}
        >
            <Stats />
            <Crypto />
            <News />
        </Box>
    )
}

export default HomeComponent
