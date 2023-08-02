

/* src/App.js */
import React, { useEffect, useState, useRef, } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import SideNavbar from './SideNavbar'
import { Avatar, Drawer, Stack, Toolbar, toggleDrawer } from "@mui/material";

import { withAuthenticator, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Container } from 'react-bootstrap';

// import awsExports from "./manga/aws-exports";

//import { Link, Router, Switch, Route } from 'react-router-dom';
// Amplify.configure(awsExports);

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

import DashboardIcon from '@mui/icons-material/Dashboard';
import MapIcon from '@mui/icons-material/Map';
import CableIcon from '@mui/icons-material/Cable';
import HomeNav from '../home/HomeNav';
const initialState = { name: '', description: '' }


const Login = ({ signOut, user }) => {
    const [formState, setFormState] = useState(initialState)






    // async function addTodo() {
    //   try {
    //     if (!formState.name || !formState.description) return
    //     const todo = { ...formState }
    //     setTodos([...todos, todo])
    //     setFormState(initialState)
    //     await API.graphql(graphqlOperation(createTask, { input: todo }))
    //   } catch (err) {
    //     console.log('error creating todo:', err)
    //   }
    // }
    // const [state, setState] = React.useState({
    //     top: false,
    //     left: false,
    //     bottom: false,
    //     right: false,
    // });

    // const Anchor = 'left';
    // const toggleDrawer = (anchor, open) => (event) => {
    //     console.log("heheh", open)
    //     if (
    //         event.type === "keydown" &&
    //         (event.key === "Tab" || event.key === "Shift")
    //     ) {

    //         return true;
    //     }

    //     setState({ ...state, [Anchor]: open });

    // };

    // const list = (Anchor) => (
    //     <Box
    //         sx={{ width: 250 }}
    //         role="presentation"
    //         onClick={toggleDrawer(Anchor, false)}
    //         onKeyDown={toggleDrawer(Anchor, false)}
    //     >
    //         <List>
    //             <ListItem key={'Console Dashbord'}>
    //                 <ListItemText primary={'Console Dashbord'} />
    //             </ListItem>
    //             {['Overview', 'MapPlus', 'IOT',].map((text, index) => (
    //                 <ListItem key={text} disablePadding>
    //                     <ListItemButton >
    //                         <ListItemIcon>
    //                             {index === 0 && <DashboardIcon />}
    //                             {index === 1 && <MapIcon />}
    //                             {index === 2 && <CableIcon />}
    //                         </ListItemIcon>
    //                         <ListItemText primary={text} />
    //                     </ListItemButton>
    //                 </ListItem>
    //             ))}
    //         </List>
    //         <Divider />
    //         <List>
    //             {['Log Client', 'Log BusLocator', 'ETC'].map((text, index) => (
    //                 <ListItem key={text} disablePadding>
    //                     <ListItemButton>
    //                         <ListItemIcon>
    //                             {index <= 1 ? <ArticleIcon /> : <MoreHorizIcon />}
    //                         </ListItemIcon>
    //                         <ListItemText primary={text} />
    //                     </ListItemButton>
    //                 </ListItem>
    //             ))}
    //         </List>
    //     </Box>
    // );


    return (
        <div>
            {/* <HomeNav Console={false} toggleDrawer={toggleDrawer}></HomeNav> */}
            <SideNavbar></SideNavbar>
            <Container style={{ minHeight: "500px" }}>
                {/* <SwipeableDrawer
                    anchor={Anchor}
                    open={state[Anchor]}
                    onClose={toggleDrawer(Anchor, false)}
                    onOpen={toggleDrawer(Anchor, true)}
                >
                    {list()}
                </SwipeableDrawer> */}

                <div className='bg-gradient-light'>
                    <div className=''>
                        <div className='display-3 d-flex justify-content-between mt-3' >
                            Console

                        </div>
                        <hr className='pt-9'></hr>
                    </div>
                    <div >
                        <nav>
                            <div className='display-3 d-flex justify-content-between mt-3'>Hello {user.username}
                                <Button onClick={signOut} style={styles.button}>Sign out</Button>
                            </div>
                        </nav>
                        {/* <BusTrackerDetails /> */}
                    </div >
                </div >
            </Container >
        </div >
    )
}

const styles = {
    container: { width: 100, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'left', padding: 20 },
    todo: { marginBottom: 15 },
    input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
    todoName: { fontSize: 20, fontWeight: 'bold' },
    todoDescription: { marginBottom: 0 },
    button: {
        backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px', width: 100,
    }
}

export default withAuthenticator(Login);


