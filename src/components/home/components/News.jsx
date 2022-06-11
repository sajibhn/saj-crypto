import React from 'react'
import { Avatar, Box, ButtonBase, Container, Grid, Paper, Toolbar, Typography } from '@mui/material'
import { styled } from '@mui/system'

const News = () => {
    return (
        <Box>
            <Toolbar />
            <Container>
                <Typography variant='h4' component="h2" marginY={3}>
                    Top 10 Cryptos In The World
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xl={4} md={6} sm={12}>
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
                                    Counterview: Why cryptocurrency is a Kardashian,
                                    Not Merly Streep</Typography>
                                <ButtonBase sx={{ width: 250, height: 100 }}>
                                    <Img src='../images/opengraph.png' />
                                </ButtonBase>
                            </Box>
                            <Box >
                                <Typography variant='body2'>
                                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
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
                                    <Avatar>B</Avatar>
                                    <Typography variant='body1' component="h3"
                                        sx={{ fontWeight: "bold" }} >
                                        Bussiness Insider</Typography>

                                </Box>
                                <Typography variant='body2' sx={{ alignSelf: { xl: "initial", md: 'flex-end' } }}>
                                    2 hours ago
                                </Typography >
                            </Box>
                        </NewsBox>
                    </Grid>
                    <Grid item xl={4} md={6} sm={12}>
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
                                    Counterview: Why cryptocurrency is a Kardashian,
                                    Not Merly Streep</Typography>
                                <ButtonBase sx={{ width: 250, height: 100 }}>
                                    <Img src='../images/opengraph.png' />
                                </ButtonBase>
                            </Box>
                            <Box >
                                <Typography variant='body2'>
                                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
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
                                    <Avatar>B</Avatar>
                                    <Typography variant='body1' component="h3"
                                        sx={{ fontWeight: "bold" }} >
                                        Bussiness Insider</Typography>

                                </Box>
                                <Typography variant='body2' sx={{ alignSelf: { xl: "initial", md: 'flex-end' } }}>
                                    2 hours ago
                                </Typography >
                            </Box>
                        </NewsBox>
                    </Grid>
                    <Grid item xl={4} md={6} sm={12}>
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
                                    Counterview: Why cryptocurrency is a Kardashian,
                                    Not Merly Streep</Typography>
                                <ButtonBase sx={{ width: 250, height: 100 }}>
                                    <Img src='../images/opengraph.png' />
                                </ButtonBase>
                            </Box>
                            <Box >
                                <Typography variant='body2'>
                                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
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
                                    <Avatar>B</Avatar>
                                    <Typography variant='body1' component="h3"
                                        sx={{ fontWeight: "bold" }} >
                                        Bussiness Insider</Typography>

                                </Box>
                                <Typography variant='body2' sx={{ alignSelf: { xl: "initial", md: 'flex-end' } }}>
                                    2 hours ago
                                </Typography >
                            </Box>
                        </NewsBox>
                    </Grid>
                    <Grid item xl={4} md={6} sm={12}>
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
                                    Counterview: Why cryptocurrency is a Kardashian,
                                    Not Merly Streep</Typography>
                                <ButtonBase sx={{ width: 250, height: 100 }}>
                                    <Img src='../images/opengraph.png' />
                                </ButtonBase>
                            </Box>
                            <Box >
                                <Typography variant='body2'>
                                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
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
                                    <Avatar>B</Avatar>
                                    <Typography variant='body1' component="h3"
                                        sx={{ fontWeight: "bold" }} >
                                        Bussiness Insider</Typography>

                                </Box>
                                <Typography variant='body2' sx={{ alignSelf: { xl: "initial", md: 'flex-end' } }}>
                                    2 hours ago
                                </Typography >
                            </Box>
                        </NewsBox>
                    </Grid>
                    <Grid item xl={4} md={6} sm={12}>
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
                                    Counterview: Why cryptocurrency is a Kardashian,
                                    Not Merly Streep</Typography>
                                <ButtonBase sx={{ width: 250, height: 100 }}>
                                    <Img src='../images/opengraph.png' />
                                </ButtonBase>
                            </Box>
                            <Box >
                                <Typography variant='body2'>
                                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
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
                                    <Avatar>B</Avatar>
                                    <Typography variant='body1' component="h3"
                                        sx={{ fontWeight: "bold" }} >
                                        Bussiness Insider</Typography>

                                </Box>
                                <Typography variant='body2' sx={{ alignSelf: { xl: "initial", md: 'flex-end' } }}>
                                    2 hours ago
                                </Typography >
                            </Box>
                        </NewsBox>
                    </Grid>
                    <Grid item xl={4} md={6} sm={12}>
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
                                    Counterview: Why cryptocurrency is a Kardashian,
                                    Not Merly Streep</Typography>
                                <ButtonBase sx={{ width: 250, height: 100 }}>
                                    <Img src='../images/opengraph.png' />
                                </ButtonBase>
                            </Box>
                            <Box >
                                <Typography variant='body2'>
                                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
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
                                    <Avatar>B</Avatar>
                                    <Typography variant='body1' component="h3"
                                        sx={{ fontWeight: "bold" }} >
                                        Bussiness Insider</Typography>

                                </Box>
                                <Typography variant='body2' sx={{ alignSelf: { xl: "initial", md: 'flex-end' } }}>
                                    2 hours ago
                                </Typography >
                            </Box>
                        </NewsBox>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default News

const NewsBox = styled(Paper)({
    padding: "30px 20px"
})

const Img = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover"
})