import {Table, Button} from "@mantine/core";
import {GetResultsNCSBE} from './functions.ts';
import { useState, useEffect } from 'react';
import races from './list_of_races.json';


//export function ResultsTable(props: {input_props: string[]}) {}

export function ResultsTable(props: {race_lid: string}) {
  const [results_table, setResults_Table] = useState<unknown[] | undefined>([]);
  const input_url = "https://fpfn4rqbhwnzwe5k2q7tsyy7ga0nbrfb.lambda-url.us-east-2.on.aws/";

  function filterAndSetTable(results: any){
    const filtered = results.filter((item: any) => item.lid == props.race_lid);
    setResults_Table(filtered);
    return filtered;
  }

  useEffect(() => {
      GetResultsNCSBE(input_url)
        .then(results => filterAndSetTable(results))
    }, [])

  //let filtered = full_results.filter(item => item.lid === "2119")

  const rows = results_table?.map((result: any) => (
      <Table.Tr key={result.candidate}>
        <Table.Td>{result.candidate}</Table.Td>
        <Table.Td>{result.votes}</Table.Td>
        <Table.Td>{result.percent}</Table.Td>
      </Table.Tr>
    ));

    return (
      <Table highlightOnHover>
        <Table.Thead>
          <Table.Tr>
          <Table.Th>Candidate</Table.Th>
          <Table.Th>Votes</Table.Th>
          <Table.Th>Percent</Table.Th>
        </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      );
  }


export function OptionsTable() {
  const options_dict = [];

  for (const key in races) {
    const value = races[key];
    options_dict.push(
        <tr>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
      );
  }

  /*json.races.forEach(({ key, val }) =>
    key in options_dict ? options_dict[key].push(val) : options_dict[key] = [val] );*/
  return (    
    <table>
      <thead>
        <tr>
          <th>Race</th>
          <th>Race LID</th>
        </tr>
      </thead>
      <tbody>{options_dict}</tbody>
    </table>);
}