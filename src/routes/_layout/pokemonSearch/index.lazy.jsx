import { createLazyFileRoute } from '@tanstack/react-router'
import { PokeSearch } from '../../../pages/pokemonSearch'

export const Route = createLazyFileRoute('/_layout/pokemonSearch/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PokeSearch />
}
