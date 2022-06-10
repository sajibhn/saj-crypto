
import { Box } from '@mui/material'
import React from 'react'
import Crypto from './components/Crypto'
import Stats from './components/Stats'

const HomeComponent = () => {
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
            <Stats />
            <Crypto />
        </Box>
    )
}

export default HomeComponent
