import React from 'react'
import { Box, Container, Toolbar, Typography } from '@mui/material'
import NewsCard from '../../reusable/NewsCard'

const News = () => {
    return (
        <Box>
            <Toolbar />
            <Container>
                <Typography variant='h4' component="h2" marginY={3}>
                    Latest Crypto News
                </Typography>

                <NewsCard simplified />
            </Container>
        </Box>
    )
}

export default News