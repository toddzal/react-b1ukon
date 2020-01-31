import React from 'react';
import { Container } from 'semantic-ui-react'


const NoteCard = props => {
    return (
        <Container>
            <div>{props.children}</div>
        </Container>
    )
};

export default NoteCard
