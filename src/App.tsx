/* eslint-disable no-use-before-define */ 


import { useState } from 'react';
import {Table, Button} from "@mantine/core";
import './App.css';
import {GetResultsNCSBE} from './functions.ts'
import {ResultsTable} from './Components.tsx';


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
  const sample = ["faber", "2147", "https://er.ncsbe.gov/enr/20260303/data/results_1.txt?v=22-15-12"];
  
    return (
      <>
        <div id="list">
          <h3>Append /election-table/ plust the following to the URL to display results</h3>
          <p> For instance, tk /election-table/2141 will displace the NC-13 Dem primary</p>
          <table>
            <tr>
            <td>US SENATE - DEM:</td>
            <td>2147</td>
            </tr>
            <tr>
            <td>US SENATE - REP:</td>
            <td>2149</td>
            </tr>
            <tr>
            <td>US HOUSE OF REPRESENTATIVES DISTRICT 04 - DEM:</td>
            <td>2114</td>
            </tr>
            <tr>
            <td>US HOUSE OF REPRESENTATIVES DISTRICT 13 - DEM:</td>
            <td>2141</td>
            </tr>
            <tr>
            <td>US HOUSE OF REPRESENTATIVES DISTRICT 13 - DEM:</td>
            <td>2141</td>
            </tr>
          </table>
        </div>
        <ResultsTable input_props={sample} />
    </>
    )
}

// export is like public in java
