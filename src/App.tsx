/* eslint-disable no-use-before-define */ 


import { useState } from 'react';
import {Table, Button} from "@mantine/core";
import './App.css';
import {GetResultsNCSBE} from './functions.ts'
import {ResultsTable} from './Components.tsx';


const urls_by_locale = [
  {outlet: "guilford", url: "https://er.ncsbe.gov/enr/20260303/data/results_41.txt?v=22-15-12"},
  {outlet: "wake", url: "https://er.ncsbe.gov/enr/20260303/data/results_92.txt?v=22-15-12"},
  {outlet: "durham", url: "https://er.ncsbe.gov/enr/20260303/data/results_32.txt?v=22-15-12"},
  {outlet: "cumberland", url: "https://er.ncsbe.gov/enr/20260303/data/results_26.txt?v=22-15-12"},
  {outlet: "state", url: "https://er.ncsbe.gov/enr/20260303/data/results_1.txt?v=22-15-12"},
]



// utils

function get_uniques(arr_of_dicts: any) {
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


export function App() {

  let input_url = "https://er.ncsbe.gov/enr/20260303/data/results_58.txt?v=22-15-12";

  const [options, setOptions] = useState();
  const [ncsbeurl, getURL] = useState(" ");
  let sample = ["faber", "2147", "https://er.ncsbe.gov/enr/20260303/data/results_1.txt?v=22-15-12"];
  
    return (
      <>
        <div id="list">
          <h3>Append the following to the URL to display results</h3>
          <ul>
            <li>US SENATE - DEM: state_2147</li>
            <li>US SENATE - REP: state_2149</li>
            <li>US HOUSE OF REPRESENTATIVES DISTRICT 04 - DEM: state_2114</li>
            <li>US HOUSE OF REPRESENTATIVES DISTRICT 13 - DEM: state_2141</li>
          </ul>
        </div>
        <p id="demo">check 1 2</p>
        <ResultsTable input_props={sample} />
    </>
    )
}

// export is like public in java
