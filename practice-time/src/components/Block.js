import React from 'react'
import styled from 'styled-components'

const Box = styled.div `
    border: 2px solid;
    padding: 8px 16px;
    margin-bottom: 24px;
`

function Block(props) {
    return (
        <Box>
            <h3>{props.name}</h3>
            <p>{props.info}</p>
        </Box>
    )
}

export default Block
