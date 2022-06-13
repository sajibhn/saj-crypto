import { Box, Button, Container, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HTMLReactParser from 'html-react-parser';
import millify from 'millify';
import Loader from "../reusable/Loader";
import { useGetCoinHistoryQuery, useGetSingleCoinQuery } from "../../services/coinGeckoApi";
import Chart from "../cryptodetails/components/Chart";

const time = [
    {
        label: "24 hours",
        value: 1
    },
    {
        label: "30 Days",
        value: 30
    },
    {
        label: "3 Months",
        value: 190
    },
    {
        label: "1 Year",
        value: 365
    }
]

const CryptoDetails = () => {
    const { coinId } = useParams()
    const [isReadMore, setIsReadMore] = useState(true);
    const [timePeriod, setTimePeriod] = useState("365")
    const { data, error, isFetching } = useGetSingleCoinQuery(coinId)
    const { data: coinHistory, isLoading } = useGetCoinHistoryQuery({ coinId, timePeriod })
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    console.log(coinHistory)
    if (isLoading) return <Loader />
    if (isFetching) return <Loader />
    if (error) return `${error.status} ${JSON.stringify(error.data)}`;
    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />

            <Container>
                <Box sx={{ maxWidth: "750px", margin: "0 auto", textAlign: "center" }}>
                    <Img src={data.image.large} />
                    <Typography variant="h5" component="h2" marginY={3}>{data.name}</Typography>
                    <Typography variant="body1" component="div">
                        {HTMLReactParser(`${isReadMore ? data.description.en.slice(0, 200) : data.description.en}`)}
                        <span style={{ cursor: "pointer", color: "blue" }} onClick={toggleReadMore} className="read-or-hide">{isReadMore ? "...read more" : " show less"}</span>
                    </Typography>
                </Box>
                <Toolbar />
                <CryptoDataBox variant="outlined">
                    <Grid container spacing={2}>
                        <Grid item xl={4} md={4} sm={4} xs={12}>
                            <Box sx={{ width: "100%", textAlign: "center" }}>
                                <Typography variant="body1">{data.market_cap_rank}</Typography>
                                <Typography variant="h6">Rank</Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={4} md={4} sm={4} xs={12}>
                            <Box sx={{ width: "100%", textAlign: "center" }}>
                                <Typography variant="body1">{millify(data.market_data.current_price.usd)} USD</Typography>
                                <Typography variant="h6">Current Price</Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={4} md={4} sm={4} xs={12}>
                            <Box sx={{ width: "100%", textAlign: "center" }}>
                                <Typography variant="body1">{millify(data.market_data.market_cap.usd)}</Typography>
                                <Typography variant="h6">Market Cap</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </CryptoDataBox>
                <Toolbar />
                <Box sx={{ display: "flex", alignItem: "center", justifyContent: "center", flexWrap: "wrap" }}>
                    {time.map((date) => {
                        return <Button variant="outlined" sx={{ margin: "10px" }} disableElevation key={date.value} onClick={() => setTimePeriod(`${date.value}`)}>{date.label}</Button>
                    })}

                </Box>

                <Box>
                    <Chart coinHistory={coinHistory} timePeriod={timePeriod} coinName={data.name} currentPrice={data.market_data.current_price.usd} />
                </Box>

            </Container>
        </Box >
    );
};

export default CryptoDetails;

const Img = styled("img")({
    width: "200px",
    height: "200px",
});

const CryptoDataBox = styled(Paper)({
    padding: "50px",
    maxWidth: "750px",
    margin: "0 auto"
})

