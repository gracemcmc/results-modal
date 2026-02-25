/* eslint-disable no-use-before-define */ 


import { useState } from 'react';
import {Table, Button} from "@mantine/core";
import './App.css';

//console.log(document.referrer);

let results = [
  {candidate: "Leo Williams", votes: 26402, percent: 0.5755},
  {candidate: "Anjanee Bell", votes: 19290, percent: 0.4205}
];


const urls_by_locale = [
  {outlet: "guilford", url: "https://er.ncsbe.gov/enr/20260303/data/results_41.txt?v=22-15-12"},
  {outlet: "wake", url: "https://er.ncsbe.gov/enr/20260303/data/results_92.txt?v=22-15-12"},
  {outlet: "durham", url: "https://er.ncsbe.gov/enr/20260303/data/results_32.txt?v=22-15-12"},
  {outlet: "cumberland", url: "https://er.ncsbe.gov/enr/20260303/data/results_26.txt?v=22-15-12"},
  {outlet: "state", url: "https://er.ncsbe.gov/enr/20260303/data/results_1.txt?v=22-15-12"},
]

/*
const urlParams = new URLSearchParams(window.location.search);
const form = document.getElementById('subscribe');


urlParams.set('order', 'date');

window.location.search = urlParams;
*/

// utils

function get_uniques(arr_of_dicts) {
  let election_options = [''];
  for (var i = 0; i < arr_of_dicts.length; i++) {
    //cnm is the unique race name
    var race_name = arr_of_dicts.cnm;
    if (!(race_name in election_options)) {
      election_options.push(race_name);
    }
  }
  return election_options;
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

<iframe id="output_iframe1"></iframe>

const full_results = await GetResultsNCSBE(urls_by_locale[0].url);
let filtered = full_results.filter(item => item.lid === "2119");

results = full_results;



window.addEventListener("DOMContentLoaded", (event) => {
  ncsbeurl = document.getElementById("form").url.value;
  document.getElementById("getter").addEventListener("click", myFunction);
  document.getElementById("demo").innerHTML = ncsbeurl;
});
*/

function App() {
  // const [count, setCount] = useState(0) //action="/post" method="post" target="_self" type="url"
  // <button onClick={() => getURL("french")}>here it is</button>
  let input_url = "https://er.ncsbe.gov/enr/20260303/data/results_41.txt?v=22-15-12";
  const [options, setOptions] = useState();
  const [ncsbeurl, getURL] = useState(" ");

  function Tryingoutform() {

    function handleChange(i) {
      getURL(i.target.value);
      createOptions(i.target.value).then(
        result => setOptions(result));
    }

    return (
        <form>
          <label>add url</label>

          <input type="url" value={ncsbeurl} onChange={handleChange}/> 
          <p>Curernt {ncsbeurl}</p>
        </form>
      )}

  async function GetResultsNCSBE(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Response status: {$response.status}');
      }
      const result = await response.json();
      return result;
    } catch (e: any) {
      console.error(e.message, url);
    };
  }

  async function createOptions(ncsbeurl) {
    const full_results = await GetResultsNCSBE(input_url);
    const beetle = get_uniques(full_results);
    //let filtered = full_results.filter(item => item.lid === "2119")
    return beetle}

  function OptionsPrint(ops) {
    const ps = ops.map((o: any) => (
      <p>o</p>
      ));
    return ps;
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
        <Table.Head>
          <Table.Th>Candidate</Table.Th>
          <Table.Th>Votes</Table.Th>
          <Table.Th>Percent</Table.Th>
        </Table.Head>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      );
  }
    
    return (
      <>
        <div id="form">
          <Tryingoutform />
        </div>
        <p className="read-the-docs">
          Click on nothing to learn more 🫛
        </p>
        <p id="demo">check</p>
        <OptionsPrint />
        <p>{options}</p>
    </>
    )
}
/*      <ResultsTable race={results} /> */

/*const url = document.getElementById('url');
form.addEventListener('submit', function() {
  const url = document.getElementById('url');
});*/

// export is like public in java


export default App