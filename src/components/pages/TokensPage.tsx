import { FC, useState } from 'react'
import CategoriesList from '../CategoriesList'
import TokenList from '../TokenList'

const TokensPage: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  return (
    <div className="tokens-page">
      <div className="m-b-header tokens-page__header">
        <h1 className="heading-1">Токены Everscale</h1>
        <CategoriesList setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="tokens-page__content">
        <TokenList selectedCategory={selectedCategory} />
      </div>
    </div>
  )
}

export default TokensPage
