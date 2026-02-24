/* eslint-disable no-use-before-define */ 


import { useState } from 'react';
import {Table, Button} from "@mantine/core";
import './App.css';

console.log(document.referrer);

let results = [
  {candidate: "Leo Williams", votes: 26402, percent: 0.5755},
  {candidate: "Anjanee Bell", votes: 19290, percent: 0.4205}
];

/*
const urlParams = new URLSearchParams(window.location.search);
const form = document.getElementById('subscribe');


urlParams.set('order', 'date');

window.location.search = urlParams;
*/

const urls_by_locale = [
  {outlet: "Guilford", url: "https://er.ncsbe.gov/enr/20260303/data/results_41.txt?v=22-15-12"},
  {outlet: "Wake", url: "https://er.ncsbe.gov/enr/20260303/data/results_92.txt?v=22-15-12"},
  {outlet: "Durham", url: "https://er.ncsbe.gov/enr/20260303/data/results_32.txt?v=22-15-12"},
  {outlet: "Cumberland", url: "https://er.ncsbe.gov/enr/20260303/data/results_26.txt?v=22-15-12"},
  {outlet: "State", url: "https://er.ncsbe.gov/enr/20260303/data/results_1.txt?v=22-15-12"},
]

async function GetResultsNCSBE(url) {
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

function get_uniques(arr) {
  let election_options = [''];
  for (var i = 0; i < arr.length; i++) {
    var name = arr.name;
    //if (!(name in options)) {
    //}
  }
}

async function CreateOptions() {
  const full_results = await GetResultsNCSBE(urls_by_locale[0].url);
  let filtered = full_results.filter(item => item.lid === "2119");
}

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

/*let html_string= "content";
let myIframe = document.getElementById('output_iframe1');
myIframe.src = `data:text/html;charset=utf-8,${html_string}`;

<iframe id="output_iframe1"></iframe>*/

const full_results = await GetResultsNCSBE(urls_by_locale[0].url);
let filtered = full_results.filter(item => item.lid === "2119");
console.log(filtered);

results = full_results;

window.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <>
      <div className="get-url">
        <p>Input link to results</p>
        <form action="/signup" method="post" id="signup"> 
          <input type="text"></input>
        </form>
      </div>
      <p className="read-the-docs">
        Click on nothing to learn more 🫛
      </p>
      <ResultsTable race={results} />
    </>
  )
}

export default App