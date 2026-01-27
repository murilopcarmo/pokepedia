import { Home } from '../../../pages/home/index.jsx'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_layout/_home/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Home />
    
}
