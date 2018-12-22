import { h } from 'hyperapp'
import { app } from 'hyperapp-play'

// dynamic loading for webpack
const load = requireContext => {
  return requireContext.keys().map(requireContext)
}
load(require.context('./', true, /.play.tsx?$/))

app()
