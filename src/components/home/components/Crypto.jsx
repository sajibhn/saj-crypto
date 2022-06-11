import { Box, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import CryptoCurrency from '../../reusable/CryptoCurrency'

const Crypto = () => {
    return (
        <Box>
            <Toolbar />
            <Container>
                <Typography variant='h4' component="h2" marginY={3}>
                    Top 10 Cryptos In The World
                </Typography>

                <CryptoCurrency simplified />
            </Container>
        </Box>
    )
}

export default Crypto



