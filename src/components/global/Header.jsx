import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Article, CurrencyExchange, Home, LocalAtm } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { styled } from '@mui/system';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
    return (
        <Box sx={{ display: 'flex', maxWidth: '1600px' }}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <List>
                    <Navigation to="/"><Typography variant='h4' margin={1}>Saj Cryporto</Typography></Navigation>
                </List>
                <Divider />
                <List>
                    <Navigation to="/">
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Home />
                                </ListItemIcon>
                                <ListItemText primary={"Home"} />
                            </ListItemButton>
                        </ListItem>
                    </Navigation>

                    <Navigation to="/cryptocurrencies">
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LocalAtm />
                                </ListItemIcon>
                                <ListItemText primary={"Cryptocurrencies"} />
                            </ListItemButton>
                        </ListItem>
                    </Navigation>
                    <Navigation to="/news">
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Article />
                                </ListItemIcon>
                                <ListItemText primary={"News"} />
                            </ListItemButton>
                        </ListItem>
                    </Navigation>
                </List>
            </Drawer>

        </Box>
    );
}

const Navigation = styled(Link)({
    color: "initial"
})