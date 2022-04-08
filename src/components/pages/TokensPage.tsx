import { FC, useState } from 'react'
import CategoriesList from '../CategoriesList'
import TokenList from '../TokenList'

const TokensPage: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  return (
    <div className="tokens-page">
      <CategoriesList setSelectedCategory={setSelectedCategory} />
      <TokenList selectedCategory={selectedCategory} />
    </div>
  )
}

export default TokensPage
