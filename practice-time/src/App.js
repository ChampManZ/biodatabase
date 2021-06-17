import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Block from './components/Block'
import Input from './components/Input'

const Body = styled.div `
  padding: 8px 28px;
  background-color: ${(props) => {
    if (props.background === "white") return 'white'
    else if (props.background === "red") return '#E42727'
    else if (props.background === "green") return '#26DF1D'
    else if (props.background === "blue") return '#1411D2'
  }};
`

const Title = styled.h1 `
  text-align: center;
  color: ${(props) => {
    if (props.font === "white") return 'black'
    else if (props.font === "red") return 'white'
    else if (props.font === "green") return '#E3361B'
    else if (props.font === "blue") return '#E3701B'
  }};
`

const Button = styled.button `
  -webkit-border-radius: 60;
  -moz-border-radius: 60;
  border-radius: 60px;
  text-shadow: 1px 2px 3px #000000;
  font-family: Arial;
  color: #ffffff;
  font-size: 18px;
  background: #75d966;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;
  &:active {
    background-color: #666;
    color: white;
    text-decoration: none;
  }
  &:hover {
    background-color: #666;
    color: white;
    text-decoration: none;
  }
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

const Box = styled.div`
border: 2px solid;
padding: 8px 16px;
margin-bottom: 24px;
&:h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
`

function App() {
  const [bg, setBg] = useState('')
  const [show, setShow] = useState(false)
  const [data, setData] = useState([])

  function changeBackground() {
    var value = document.getElementById("bg-selector").value
    if (value === "white") {
      setBg('white')
    } else if (value === "red") {
      setBg('red')
    } else if (value === "green") {
      setBg('green')
    } else if (value === "blue") {
      setBg('blue')
    }
  }

  function showForm() {
    setShow(!show)
  }

  const addData = async (task) => {
    const res = await fetch('http://localhost:5000/studentInfo', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task)
    })

    const newData = await res.json()

    setData([...data, newData])
  }

  const showNewData = data.map((element, key) => {
    return (
      <Box key={key}>
        <h3>{element.name}</h3>
        <p>{element.info}</p>
        <button>Delete</button>
      </Box>
    )
  })

  const fetchDatabase = async () => {
    const res = await fetch('http://localhost:5000/studentInfo')
    const data = await res.json()

    return data
  }

  useEffect(() => {
    const getData = async () => {
      const dataJSON = await fetchDatabase()
      setData(dataJSON)
    }

    getData()
  }, [])

  console.log(data.map((element) => {
    return element.id
  }))

  return (
    <Body background={bg}>
      <Title font={bg}>Student Info Database</Title>
      <div align="center">
        <label>Change background colour: {" "}
          <select id="bg-selector" onChange={changeBackground}>
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </label>
      </div> <br />
      <ButtonContainer>
        <ButtonCenter>
          <Button onClick={showForm}>Add Info</Button>
        </ButtonCenter>
      </ButtonContainer>
      {show === false ? "" : <Input addData={addData} />}
      <Block name="Thanapat Eurboonyanun" info="King Mongkut's Institute of Technology Ladkrabang '59 | Computer Innovation Engineering '5" />
      {showNewData}
      {/* <Show data={data} /> */}
    </Body>
  );
}

export default App;
