import { CurrencyExchange } from '@mui/icons-material'
import { Box, Grid, Paper, Typography } from '@mui/material'
import { Container, styled } from '@mui/system'
import React from 'react'
import { useGetCryptosQuery } from '../../../services/cryptoApi'
import millify from 'millify'
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import SurroundSoundOutlinedIcon from '@mui/icons-material/SurroundSoundOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';

const Stats = () => {
    const { data, isFetching } = useGetCryptosQuery();
    const globalStats = data?.data?.stats;

    if (isFetching) return 'Loading....'
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
                                    {globalStats.total}
                                </Typography>
                            </StatisticBox>
                        </Paper>
                    </Grid>
                    <Grid item xl={4} md={6} sm={12}>
                        <Paper sx={{ textAlign: "center" }} >
                            <StatisticBox>
                                <CurrencyBitcoinOutlinedIcon fontSize='large' sx={{ marginBottom: 1 }} />
                                <Typography variant='h6' component="h3" gutterBottom
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: 400
                                    }}
                                >
                                    Total Coins
                                </Typography>
                                <Typography variant='h6'
                                    sx={{
                                        fontSize: 14,
                                    }}
                                >
                                    {globalStats.totalCoins}
                                </Typography>
                            </StatisticBox>
                        </Paper>
                    </Grid>
                    <Grid item xl={4} md={6} sm={12}>
                        <Paper sx={{ textAlign: "center" }} >
                            <StatisticBox>
                                <ChangeCircleOutlinedIcon fontSize='large' sx={{ marginBottom: 1 }} />
                                <Typography variant='h6' component="h3" gutterBottom
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: 400
                                    }}
                                >
                                    Total Exchanges
                                </Typography>
                                <Typography variant='h6'
                                    sx={{
                                        fontSize: 14,
                                    }}
                                >
                                    {millify(globalStats.totalExchanges)}
                                </Typography>
                            </StatisticBox>
                        </Paper>
                    </Grid>
                    <Grid item xl={4} md={6} sm={12}>
                        <Paper sx={{ textAlign: "center" }} >
                            <StatisticBox>
                                <BrokenImageOutlinedIcon fontSize='large' sx={{ marginBottom: 1 }} />
                                <Typography variant='h6' component="h3" gutterBottom
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: 400
                                    }}
                                >
                                    Total Market Cap
                                </Typography>
                                <Typography variant='h6'
                                    sx={{
                                        fontSize: 14,
                                    }}
                                >
                                    {millify(globalStats.totalMarketCap)}
                                </Typography>
                            </StatisticBox>
                        </Paper>
                    </Grid>
                    <Grid item xl={4} md={6} sm={12}>
                        <Paper sx={{ textAlign: "center" }} >
                            <StatisticBox>
                                <SurroundSoundOutlinedIcon fontSize='large' sx={{ marginBottom: 1 }} />
                                <Typography variant='h6' component="h3" gutterBottom
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: 400
                                    }}
                                >
                                    Total 24h Volume
                                </Typography>
                                <Typography variant='h6'
                                    sx={{
                                        fontSize: 14,
                                    }}
                                >
                                    {millify(globalStats.total24hVolume)}
                                </Typography>
                            </StatisticBox>
                        </Paper>
                    </Grid>
                    <Grid item xl={4} md={6} sm={12}>
                        <Paper sx={{ textAlign: "center" }} >
                            <StatisticBox>
                                <StoreOutlinedIcon fontSize='large' sx={{ marginBottom: 1 }} />
                                <Typography variant='h6' component="h3" gutterBottom
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: 400
                                    }}
                                >
                                    Total Markets
                                </Typography>
                                <Typography variant='h6'
                                    sx={{
                                        fontSize: 14,
                                    }}
                                >
                                    {millify(globalStats.totalMarkets)}
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