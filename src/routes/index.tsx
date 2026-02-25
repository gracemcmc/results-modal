import { createFileRoute } from '@tanstack/react-router'
import { App } from '/Users/gracemcfadden/results-modal/src/App.tsx'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <App />
  )
}