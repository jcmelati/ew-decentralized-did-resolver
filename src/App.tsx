import React from 'react'
import './App.css'

import { resolve } from './modules/ew-decentralized-did-resolver'

import Header from './components/header'
import Form from './components/form'

const App: React.FunctionComponent = () => {
    // const main = async (): Promise<void> => {
    //     const diddoc = await resolve(
    //         'did:ethr:ewc:0x7aA65E31d404A8857BA083f6195757a730b51CFe'
    //     )
    //     console.log('diddoc', diddoc)
    // }

    // void main()

    return (
        <div className="App">
            <Header title="EWC Decentralized DID Resolver" />
            <Form resolve={resolve} />
        </div>
    )
}

export default App
