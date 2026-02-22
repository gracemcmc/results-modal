/* eslint-disable no-use-before-define */ 


import { useState } from 'react';
import {Table, Button} from "@mantine/core";
import './App.css';
import * as cheerio from 'cheerio';

console.log(location);

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

elements.push({position: 8, mass:23.394, symbol: 'D', name: 'Dylan'})


function counter() {
  return (<p>Bus</p>);
}



const results = [
  {candidate: "Leo Williams", votes: 26402, percent: 0.5755},
  {candidate: "Anjanee Bell", votes: 19290, percent: 0.4205}
];

function PopulateResults({race_name}:{race_name:string}) {
  return 0;
}

async function GetResultsNCSBE() {
  let page = "0"
  const url = "https://er.ncsbe.gov/enr/20260303/data/results_41.txt?v=22-15-12"
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Response status: {$response.status}');
    }
    const result = await response.json();
    return result;
  } catch (e: any) {
    console.error(e.message);
  };
}

async function GetResultsTabular() {
  let page = "0"
  const url = "https://er.ncsbe.gov/?election_dt=03/03/2026&county_id=41&office=ALL&contest=0"
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Response status: {$response.status}');
    }
    const result = await response.json();
    return result;
  } catch (e: any) {
    console.error(e.message);
  };
}


const full_results = await GetResultsNCSBE();
let filtered = full_results.filter(item => item.lid === "2119");
console.log(filtered);

function ResultsTable({race}:{race:unknown[]}) {
  const rows = race.map((res_rows: any) => (
    <Table.Tr key={res_rows.candidate}>
      <Table.Td>{res_rows.candidate}</Table.Td>
      <Table.Td>{res_rows.votes}</Table.Td>
      <Table.Td>{res_rows.percent}</Table.Td>
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
    );
}

function PlainResultsTable({race}:{race:unknown[]}) {
  const rows = race.map((res_rows: any) => (
    <tr key={res_rows.candidate}>
      <td>{res_rows.candidate}</td>
      <td>{res_rows.votes}</td>
      <td>{res_rows.percent}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Candidate</th>
          <th>Votes</th>
          <th>Percent</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
    );
}

function App() {
  // const [count, setCount] = useState(0)
  const [count, setCount] = useState("potato")
  for (let i = 0; i < 5; i++) {
    console.log(full_results[i]);
  }
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
      <PlainResultsTable race={results} />c
    </>
  )
}

export default App