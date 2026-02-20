import { useState } from 'react'
import {Table, Button} from "@mantine/core"
import './App.css'


const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

elements.push({position: 8, mass:23.394, symbol: 'D', name: 'Dylan'})

const results = [
  {candidate: "Leo Williams", votes: 26402, percent: 0.5755},
  {candidate: "Anjanee Bell", votes: 19290, percent: 0.4205}
]

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}


function ResultsTable({race}:{race:unknown[]}) {
  const rows = race.map((res:unknown) => (
    <Table.Tr key={res.candidate}>
      <Table.Td>{res.candidate}</Table.Td>
      <Table.Td>{res.votes}</Table.Td>
      <Table.Td>{res.percent}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Th>Candidate</Table.Th>
        <Table.Th>Votes</Table.Th>
        <Table.Th>Percent</Table.Th>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
    )
}

function App() {
  // const [count, setCount] = useState(0)
  const [count, setCount] = useState("potato")

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>I am practicing</p>
      </div>
      <p className="read-the-docs">
        Click on nothing to learn more 🫛
      </p>
      <ResultsTable race={results}/>
    </>
  )
}

export default App