import { Typography, Container, Box } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Container>
            <Box textAlign="center" padding={8}>
                <Typography variant='body1'>Saj Crypto || copyright @ {new Date().getFullYear()}</Typography>
            </Box>
        </Container>
    )
}

export default Footer