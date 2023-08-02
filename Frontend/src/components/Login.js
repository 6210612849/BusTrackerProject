/* src/App.js */
import React, { useEffect, useState, useRef } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createTask } from '../graphql/mutations'
import { listTasks, listBustrackers } from '../graphql/queries'
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// import awsExports from "./manga/aws-exports";
import BusTrackerDetails from './BusTrackerDetails';
//import { Link, Router, Switch, Route } from 'react-router-dom';
// Amplify.configure(awsExports);

const initialState = { name: '', description: '' }


const Login = ({ signOut, user }) => {
  const [formState, setFormState] = useState(initialState)
  const ref = useRef();



  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

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


  return (
    <div style={styles.container}>
      <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut} style={styles.button}>Sign out</Button>
      {/* <BusTrackerDetails /> */}
    </div >
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

export default withAuthenticator(Login);
