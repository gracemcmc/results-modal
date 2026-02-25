import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/election-table/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/election-table/"!</div>
}
