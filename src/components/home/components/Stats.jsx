import { CurrencyExchange } from '@mui/icons-material'
import { Box, Grid, Paper, Typography } from '@mui/material'
import { Container, styled } from '@mui/system'
import React from 'react'

const Stats = () => {
    return (
        <Box>
            <Container>
                <Typography variant='h4' component="h2" marginY={3}>
                    Global Crypto Stats
                </Typography>
                <Grid container spacing={6}>
                    <Grid item xl={4} md={6} sm={12}>
                        <Paper sx={{ textAlign: "center" }} >
                            <StatisticBox>
                                <CurrencyExchange fontSize='large' sx={{ marginBottom: 1 }} />
                                <Typography variant='h6' component="h3" gutterBottom
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: 400
                                    }}
                                >
                                    Total Cryptocurrencies
                                </Typography>
                                <Typography variant='h6'
                                    sx={{
                                        fontSize: 14,
                                    }}
                                >
                                    12,576
                                </Typography>
                            </StatisticBox>
                        </Paper>
                    </Grid>
                    <Grid item xl={4} md={6} sm={12}>
                        <Paper sx={{ textAlign: "center" }} >
                            <StatisticBox>
                                <CurrencyExchange fontSize='large' sx={{ marginBottom: 1 }} />
                                <Typography variant='h6' component="h3" gutterBottom
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: 400
                                    }}
                                >
                                    Total Cryptocurrencies
                                </Typography>
                                <Typography variant='h6'
                                    sx={{
                                        fontSize: 14,
                                    }}
                                >
                                    12,576
                                </Typography>
                            </StatisticBox>
                        </Paper>
                    </Grid>
                    <Grid item xl={4} md={6} sm={12}>
                        <Paper sx={{ textAlign: "center" }} >
                            <StatisticBox>
                                <CurrencyExchange fontSize='large' sx={{ marginBottom: 1 }} />
                                <Typography variant='h6' component="h3" gutterBottom
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: 400
                                    }}
                                >
                                    Total Cryptocurrencies
                                </Typography>
                                <Typography variant='h6'
                                    sx={{
                                        fontSize: 14,
                                    }}
                                >
                                    12,576
                                </Typography>
                            </StatisticBox>
                        </Paper>
                    </Grid>
                    <Grid item xl={4} md={6} sm={12}>
                        <Paper sx={{ textAlign: "center" }} >
                            <StatisticBox>
                                <CurrencyExchange fontSize='large' sx={{ marginBottom: 1 }} />
                                <Typography variant='h6' component="h3" gutterBottom
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: 400
                                    }}
                                >
                                    Total Cryptocurrencies
                                </Typography>
                                <Typography variant='h6'
                                    sx={{
                                        fontSize: 14,
                                    }}
                                >
                                    12,576
                                </Typography>
                            </StatisticBox>
                        </Paper>
                    </Grid>
                    <Grid item xl={4} md={6} sm={12}>
                        <Paper sx={{ textAlign: "center" }} >
                            <StatisticBox>
                                <CurrencyExchange fontSize='large' sx={{ marginBottom: 1 }} />
                                <Typography variant='h6' component="h3" gutterBottom
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: 400
                                    }}
                                >
                                    Total Cryptocurrencies
                                </Typography>
                                <Typography variant='h6'
                                    sx={{
                                        fontSize: 14,
                                    }}
                                >
                                    12,576
                                </Typography>
                            </StatisticBox>
                        </Paper>
                    </Grid>
                    <Grid item xl={4} md={6} sm={12}>
                        <Paper sx={{ textAlign: "center" }} >
                            <StatisticBox>
                                <CurrencyExchange fontSize='large' sx={{ marginBottom: 1 }} />
                                <Typography variant='h6' component="h3" gutterBottom
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: 400
                                    }}
                                >
                                    Total Cryptocurrencies
                                </Typography>
                                <Typography variant='h6'
                                    sx={{
                                        fontSize: 14,
                                    }}
                                >
                                    12,576
                                </Typography>
                            </StatisticBox>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Stats


// customStyles

const StatisticBox = styled(Box)({
    padding: "40px 20px"
})