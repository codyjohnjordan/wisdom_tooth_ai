import { LayoutProvider } from '../context/LayoutProvider'
import { Layout } from '../components/layout'

export function Front() {
  return (
    <LayoutProvider>
      <Layout />
    </LayoutProvider>
  )
}