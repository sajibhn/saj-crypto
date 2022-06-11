import React from 'react'
import { Avatar, Box, ButtonBase, Container, Grid, Paper, Toolbar, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi'
import Moment from 'react-moment'

const NewsCard = ({ simplified }) => {
    const { data: cryptoNews } = useGetCryptoNewsQuery()
    const count = simplified ? 6 : 12;
    const demoImag = 'https://cdn-icons-png.flaticon.com/512/21/21601.png'
    return (
        <Box>
            <Container>
                <Grid container spacing={3}>
                    {cryptoNews?.value.slice(0, count).map((news, i) => (
                        <Grid item xl={4} md={6} sm={12} key={i}>

                            <Navigation href={news.url} target="_blank">

                                <NewsBox>
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        paddingBottom: 1,
                                        marginBottom: 2,
                                        gap: 1
                                    }}>
                                        <Typography variant='body1' component="h3"
                                            sx={{ fontWeight: "bold" }} >
                                            {news.name}</Typography>
                                        <ButtonBase sx={{ width: 250, height: 100 }}>
                                            <Img src={news?.image?.thumbnail?.contentUrl || demoImag} />
                                        </ButtonBase>
                                    </Box>

                                    <Box >
                                        <Typography variant='body2'>
                                            {news.description > 100 ? `${news.description.substring(0, 100)}...`
                                                : news.description
                                            }
                                        </Typography >
                                    </Box>

                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: { xl: "center", md: "flex-start" },
                                        paddingBottom: 1,
                                        flexDirection: { xl: "row", md: "column" },
                                        gap: { md: 1 },
                                        marginTop: 2

                                    }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImag}></Avatar>
                                            <Typography variant='body1' component="h3"
                                                sx={{ fontWeight: "bold" }} >
                                                Bussiness Insider</Typography>

                                        </Box>
                                        <Typography variant='body2' sx={{ alignSelf: { xl: "initial", md: 'flex-end' } }}>
                                            <Moment fromNow ago>{news.datePublished}</Moment> ago
                                        </Typography >
                                    </Box>
                                </NewsBox>
                            </Navigation>
                        </Grid>
                    ))}

                </Grid>
            </Container>
        </Box>
    )
}

export default NewsCard

const NewsBox = styled(Paper)({
    padding: "30px 20px"
})

const Img = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover"
})

const Navigation = styled("a")({
    color: "initial"
})