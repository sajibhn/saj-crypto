
import { Box } from '@mui/material'
import React from 'react'
import Stats from './components/Stats'

const HomeComponent = () => {
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
            <Stats />
        </Box>
    )
}

export default HomeComponent
