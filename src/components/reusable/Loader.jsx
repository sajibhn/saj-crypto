import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", width: "100%", minHeight: "100vh" }}>
            <CircularProgress />
        </Box>
    )
}

export default Loader