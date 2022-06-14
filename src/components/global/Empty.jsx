import { Container, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Empty = () => {
    return (
        <Container sx={{ minHeight: "100vh" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", minHeight: "100vh" }}>
                <Paper variant='outlined' align="center" sx={{ padding: 6, width: "100%" }} >
                    <Typography variant='h5'>Nothing To See Here</Typography>
                </Paper>
            </Box>
        </Container>
    )
}

export default Empty