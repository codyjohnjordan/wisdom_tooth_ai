import { LayoutProvider } from '../context/LayoutProvider'
import { Layout } from '../components/Layout'

export function Front() {
  return (
    <LayoutProvider>
      <Layout />
    </LayoutProvider>
  )
}