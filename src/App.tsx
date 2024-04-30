import { AppRouter } from '@/router/AppRouter'
import { Header } from '@/Components/Header'

function App() {
  return (
    <>
      <Header />
      <main>
        <AppRouter />
      </main>
    </>
  )
}

export default App
