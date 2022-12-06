import React from 'react'
import logo from './logo.svg'
import './App.css'

import { resolve } from './modules/ew-decentralized-did-resolver'

const App: React.FunctionComponent = () => {
    const main = async (): Promise<void> => {
        const diddoc = await resolve(
            'did:ethr:ewc:0x7aA65E31d404A8857BA083f6195757a730b51CFe'
        )
        console.log('diddoc', diddoc)
    }

    void main()

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
