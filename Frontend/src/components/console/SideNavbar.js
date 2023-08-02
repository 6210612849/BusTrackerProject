
import { Container } from 'react-bootstrap';
import { Avatar, Drawer, Stack, Toolbar } from "@mui/material";
// import assets from "../../assets";
import colorConfigs from "./config/colorConfigs";
import sizeConfigs from "./config/sizeConfigs";
// import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
// import SidebarItemCollapse from "./SidebarItemCollapse";
import React, { useEffect, useState, useRef, } from 'react'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ArticleIcon from '@mui/icons-material/Article';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { Link } from 'react-router-dom';


import DashboardIcon from '@mui/icons-material/Dashboard';
import MapIcon from '@mui/icons-material/Map';
import CableIcon from '@mui/icons-material/Cable';
import HomeNav from '../home/HomeNav';

const SideNavbar = () => {


    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const Anchor = 'left';
    const toggleDrawer = (anchor, open) => (event) => {
        console.log("heheh", open)
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {

            return true;
        }

        setState({ ...state, [Anchor]: open });

    };

    const list = (Anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(Anchor, false)}
            onKeyDown={toggleDrawer(Anchor, false)}
        >
            <List>
                <ListItem key={'Console Dashbord'}>
                    <ListItemText primary={'Console Dashbord'} />
                </ListItem>
                {['Overview', 'MapPlus', 'IOT',].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton to={("/console/" + text)} >

                            <ListItemIcon>
                                {index === 0 && <DashboardIcon />}
                                {index === 1 && <MapIcon />}
                                {index === 2 && <CableIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />

                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['LogClient', 'LogBusLocator', 'ETC'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton to={("/console/" + text)}>
                            <ListItemIcon>
                                {index <= 1 ? <ArticleIcon /> : <MoreHorizIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (
        <div>
            <HomeNav Console={false} toggleDrawer={toggleDrawer}></HomeNav>
            <SwipeableDrawer
                anchor={Anchor}
                open={state[Anchor]}
                onClose={toggleDrawer(Anchor, false)}
                onOpen={toggleDrawer(Anchor, true)}
            >
                {list()}
            </SwipeableDrawer>
        </div>
    );
};
export default SideNavbar;