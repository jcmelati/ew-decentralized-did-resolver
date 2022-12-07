import React from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'

import { resolve } from './modules/ew-decentralized-did-resolver'

import Header from './components/header'
import Form from './components/form'

const App: React.FunctionComponent = () => {
    return (
        <div className="App">
            <Header title="EWC Decentralized DID Resolver" />
            <Form resolve={resolve} />
            <ToastContainer />
        </div>
    )
}

export default App
