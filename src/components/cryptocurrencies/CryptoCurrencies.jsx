import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import CryptoCurrency from '../reusable/CryptoCurrency'

const CryptoCurrencies = () => {
    return (

        <Box component="main"
            sx={{ flexGrow: 1, p: 3, minHeight: "100vh" }}
        >

            <Container>
                <Typography variant='h4' component="h2" marginBottom={8}>
                    Discover Crypto Currencies
                </Typography>

                <CryptoCurrency />
            </Container>
        </Box>
    )
}

export default CryptoCurrencies