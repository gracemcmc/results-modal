import {Table, Button} from "@mantine/core";
import {GetResultsNCSBE} from './functions.ts'
import { useState, useEffect } from 'react'

export function ResultsTable(props: {url: string}) {
  const [results_table, setResults_Table] = useState<unknown[] | undefined>([]);
  console.log(results_table);

  useEffect(() => {
      GetResultsNCSBE(props.url).then(
        results => setResults_Table(results))
    }, [])

  const rows = results_table?.map((result: any) => (
      <Table.Tr key={result.candidate}>
        <Table.Td>{result.candidate}</Table.Td>
        <Table.Td>{result.votes}</Table.Td>
        <Table.Td>{result.percent}</Table.Td>
      </Table.Tr>
    ));

    return (
      <Table>
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