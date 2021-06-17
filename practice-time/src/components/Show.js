import React from 'react'
import styled from 'styled-components'
import Datafront from './Datafront'

const Box = styled.div `
    border: 2px solid;
    padding: 8px 16px;
    margin-bottom: 24px;
`

function Show({ data }) {
    return (
        <div>
            <Box>
                {data.map((element, key) => (
                    <Datafront key={key} element={element} />
                ))}
            </Box>
        </div>
    )
}

export default Show
