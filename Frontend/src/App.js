/* src/App.js */
import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createTask } from './graphql/mutations'
import { listTasks } from './graphql/queries'
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import MangaDashboard from './components/manga/manga_dashboard';
import awsExports from "./aws-exports";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Map from './components/Map';
import Login from './components/Login';
import MainConsole from './components/console/MainConsole';
import Home from './components/home/Home';
import HomeNav from './components/home/HomeNav';
import HomeFoot from './components/home/HomeFoot';
import ConsoleOverview from './components/console/components/ConsoleOverview';
import IotMain from './components/console/components/IotMain';
import LogClient from './components/console/components/LogClient';
import LogBusLocator from './components/console/components/LogBusLocator';
import ETC from './components/console/components/ETC';
Amplify.configure(awsExports);

const initialState = { name: '', description: '' }


const App = ({ signOut, user }) => {

  return (
    <>
      {/* <head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head> */}
      <Router>
        <div>


          <Routes>
            <Route exact path="/" element={<Home />} />
   <Route exact path="/login" element={<Login />} />
            <Route exact path="/map" element={<Map />} />
            <Route exact path="/manga" element={<MangaDashboard />} />
            <Route exact path="/console" element={<MainConsole />} />
            < Route exact path="/console/Overview" element={<ConsoleOverview />} />
            < Route exact path="/console/IOT" element={<IotMain />} />
            < Route exact path="/console/LogClient" element={<LogClient />} />
            < Route exact path="/console/LogBusLocator" element={<LogBusLocator />} />
            < Route exact path="/console/ETC" element={<ETC />} />
          </Routes>
          <HomeFoot></HomeFoot>
        </div>
      </Router>
    </>

  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: { marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default App;
