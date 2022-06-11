import { Box, Container, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCryptoDetailsQuery } from "../../services/cryptoApi";
import HTMLReactParser from 'html-react-parser';
import millify from 'millify';

const CryptoDetails = () => {
    const { coinId } = useParams()
    const [timePeriod, setTimePeriod] = useState('7d')
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
    const cryptoDetails = data?.data?.coin;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />

            <Container>
                <Box sx={{ maxWidth: "750px", margin: "0 auto", textAlign: "center" }}>
                    <Img src={cryptoDetails?.iconUrl} />
                    <Typography variant="h5" component="h2" marginY={3}>{cryptoDetails?.name}</Typography>
                    <Typography variant="body1">
                        {HTMLReactParser(`${isReadMore ? cryptoDetails.description.slice(0, 200) : cryptoDetails.description}`)}
                        <span onClick={toggleReadMore} className="read-or-hide">{isReadMore ? "...read more" : " show less"}</span>
                    </Typography>
                </Box>
                <Toolbar />
                <CryptoDataBox variant="outlined">
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item xl={4} md={6} sm={1}>
                            <Box sx={{ width: "100%", textAlign: "center" }}>
                                <Typography variant="body1">{cryptoDetails?.rank}</Typography>
                                <Typography variant="h6">Rank</Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={4} md={6} sm={1}>
                            <Box sx={{ width: "100%", textAlign: "center" }}>
                                <Typography variant="body1">{millify(cryptoDetails?.price)}</Typography>
                                <Typography variant="h6">Current Price</Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={4} md={6} sm={1}>
                            <Box sx={{ width: "100%", textAlign: "center" }}>
                                <Typography variant="body1">{millify(cryptoDetails?.marketCap)}</Typography>
                                <Typography variant="h6">Market Cap</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </CryptoDataBox>
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

