import { AppRouter } from '@/router/AppRouter'
import { Header } from '@/Components/Header'

function App() {
  return (
    <>
      <Header />
      <main className='mx-auto max-w-screen-2xl'>
        <AppRouter />
      </main>
    </>
  )
}

export default App
