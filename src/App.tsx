import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import TokensPage from './components/pages/TokensPage'
import Menu from './components/Menu'
import SearchPage from './components/pages/SearchPage'
import TokenPage from './components/pages/TokenPage'

const App: FC = () => {
  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={<TokensPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/token/:symbol" element={<TokenPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
