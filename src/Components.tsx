import {Table, Button} from "@mantine/core";
import {GetResultsNCSBE} from './functions.ts'
import { useState, useEffect } from 'react'

export function ResultsTable(props: {input_props: []}) {
  const [results_table, setResults_Table] = useState<unknown[] | undefined>([]);

  const lid = props.input_props[1];
  console.log(lid);

  function filterAndSetTable(results: any){
    const filtered = results.filter(item => item.lid == lid);
    setResults_Table(filtered);
    return filtered;
  }

  useEffect(() => {
      GetResultsNCSBE(props.input_props[2])
        .then(results => filterAndSetTable(results))
    }, [])

  //let filtered = full_results.filter(item => item.lid === "2119")

  const rows = results_table?.map((result: any) => (
      <Table.Tr key={result.candidate}>
        <Table.Td>{result.race}</Table.Td>
        <Table.Td>{result.candidate}</Table.Td>
        <Table.Td>{result.votes}</Table.Td>
        <Table.Td>{result.percent}</Table.Td>
      </Table.Tr>
    ));

    return (
      <Table>
        <Table.Thead>
          <Table.Tr>
          <Table.Th>Race</Table.Th>
          <Table.Th>Candidate</Table.Th>
          <Table.Th>Votes</Table.Th>
          <Table.Th>Percent</Table.Th>
        </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      );
  }