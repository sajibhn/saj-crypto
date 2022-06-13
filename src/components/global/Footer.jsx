import { Typography, Container, Box } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Container >
            <Box textAlign="center" padding={8}>
                <Typography variant='body2' sx={{ marginLeft: { md: " 240px" }, fontWeight: 300 }}>Saj Crypto || Copyright @ {new Date().getFullYear()}</Typography>
            </Box>
        </Container>
    )
}

export default Footer