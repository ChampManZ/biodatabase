import React, { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form `
    margin-bottom: 40px;
`

const Formcontrol = styled.div `
    margin: 20px 0;
`

const Inputslot = styled.input `
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`

const Submit = styled.input `
    display: inline-block;
    background: #000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
`

const ButtonContainer = styled.div `
  margin-top: 25px;
  margin-bottom: 70px;
  position: relative;
`

const ButtonCenter = styled.div `
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

function Input({ addData }) {
    const [name, setName] = useState('')
    const [info, setInfo] = useState('')

    const submitForm = (e) => {
        e.preventDefault()

        if (!name) {
            alert("Please input name data")
            return
        }

        if (!info) {
            alert("Please insert your info")
            return
        }

        addData({ name, info })

        setName('')
        setInfo('')
    }

    return (
        <Form onSubmit={submitForm}>
            <Formcontrol>
                <label> Name: {" "}
                    <Inputslot type="text" placeholder="ex. Kevin Green" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
            </Formcontrol>
            <Formcontrol>
                <label> Info: {" "}
                    <Inputslot type="text" placeholder="ex. YouTube University" value={info} onChange={(e) => setInfo(e.target.value)} />
                </label>
            </Formcontrol>
            <ButtonContainer>
                <ButtonCenter>
                    <Submit type="submit" value="Add" />
                </ButtonCenter>
            </ButtonContainer>        
        </Form>
    )
}

export default Input
