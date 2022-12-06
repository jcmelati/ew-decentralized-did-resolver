import React from 'react'

import { Container } from './header.styles'

interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <Container>
            <h1>{props.title}</h1>
        </Container>
    )
}

export default Header
