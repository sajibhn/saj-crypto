import { Box, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import NewsCard from '../reusable/NewsCard'

const News = () => {
    return (
        <Box
            sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Container>
                <Typography variant='h4' component="h2" marginBottom={8}>
                    Discover Latest Crypto News
                </Typography>

                <NewsCard />
            </Container>
        </Box>
    )
}

export default News