import { createFileRoute } from '@tanstack/react-router'
import {ResultsTable} from '../Components.tsx'


export const Route = createFileRoute('/election-table/$id')({
  component: RouteComponent,
})


const urls_by_locale = [
  {outlet: "guilford", url: "https://er.ncsbe.gov/enr/20260303/data/results_41.txt?v=22-15-12"},
  {outlet: "wake", url: "https://er.ncsbe.gov/enr/20260303/data/results_92.txt?v=22-15-12"},
  {outlet: "durham", url: "https://er.ncsbe.gov/enr/20260303/data/results_32.txt?v=22-15-12"},
  {outlet: "cumberland", url: "https://er.ncsbe.gov/enr/20260303/data/results_26.txt?v=22-15-12"},
  {outlet: "state", url: "https://er.ncsbe.gov/enr/20260303/data/results_1.txt?v=22-15-12"},
]


function RouteComponent() {
  const params = Route.useParams();
  const url = urls_by_locale.find(locale => locale.outlet == params.id)?.url ?? "";
  console.log(url);
//<div><ResultsTable {} /></div>
  return (
    <>
    <div>Hello "/election-table/$id"!</div>
    <div>
      <ResultsTable url={url}/>
    </div>
    </>
    )
}
