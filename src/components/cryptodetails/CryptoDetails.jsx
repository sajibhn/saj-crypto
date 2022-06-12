import { Box, Button, Container, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from "../../services/cryptoApi";
import HTMLReactParser from 'html-react-parser';
import millify from 'millify';
import Chart from "./components/Chart";
import Loader from "../reusable/Loader";

const CryptoDetails = () => {
    const { coinId } = useParams()
    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
    const [timePeriod, setTimePeriod] = useState('24h')
    const [isReadMore, setIsReadMore] = useState(true);
    const { data, isFetching } = useGetCryptoDetailsQuery(`${coinId}`)
    const { data: coinHistory, isLoading } = useGetCryptoHistoryQuery({ coinId, timePeriod })
    const cryptoDetails = data?.data?.coin;
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    if (isFetching) return <Loader />
    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />

            <Container>
                <Box sx={{ maxWidth: "750px", margin: "0 auto", textAlign: "center" }}>
                    <Img src={cryptoDetails?.iconUrl} />
                    <Typography variant="h5" component="h2" marginY={3}>{cryptoDetails?.name}</Typography>
                    <Typography variant="body1" component="div">
                        {HTMLReactParser(`${isReadMore ? cryptoDetails.description.slice(0, 200) : cryptoDetails.description}`)}
                        <span style={{ cursor: "pointer" }} onClick={toggleReadMore} className="read-or-hide">{isReadMore ? "...read more" : " show less"}</span>
                    </Typography>
                </Box>
                <Toolbar />
                <CryptoDataBox variant="outlined">
                    <Grid container spacing={2}>
                        <Grid item xl={4} md={4} sm={4} xs={12}>
                            <Box sx={{ width: "100%", textAlign: "center" }}>
                                <Typography variant="body1">{cryptoDetails?.rank}</Typography>
                                <Typography variant="h6">Rank</Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={4} md={4} sm={4} xs={12}>
                            <Box sx={{ width: "100%", textAlign: "center" }}>
                                <Typography variant="body1">{millify(cryptoDetails?.price)}</Typography>
                                <Typography variant="h6">Current Price</Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={4} md={4} sm={4} xs={12}>
                            <Box sx={{ width: "100%", textAlign: "center" }}>
                                <Typography variant="body1">{millify(cryptoDetails?.marketCap)}</Typography>
                                <Typography variant="h6">Market Cap</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </CryptoDataBox>
                <Toolbar />
                <Box sx={{ display: "flex", alignItem: "center", justifyContent: "center", flexWrap: "wrap" }}>
                    {time.map((date) => {
                        return <Button variant="outlined" sx={{ margin: "0 10px" }} disableElevation key={date} onClick={() => setTimePeriod(date)}>{date}</Button>
                    })}

                </Box>

                <Box>
                    <Chart coinHistory={coinHistory} currentPrice={millify(cryptoDetails.price)} coinName={cryptoDetails.name} isLoading={isLoading} />
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

