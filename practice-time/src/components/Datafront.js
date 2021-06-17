import React from 'react'
import styled from 'styled-components'

const Layer = styled.div `
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
`

function Datafront({ element }) {
    return (
        <Layer>
            <h3>{element.name}</h3>
            <p>{element.info}</p>
        </Layer>
    )
}

export default Datafront
