import { FC, useMemo } from 'react'
import { tokens } from '../tokens'
import TokenItem from './TokenItem'

const TokenList: FC<ISelectedCategory> = ({ selectedCategory }) => {
  const getFilteredList = () => {
    if (!selectedCategory || selectedCategory === 'all') {
      return tokens
    }
    return tokens.filter((item) =>
      item.categories.includes(selectedCategory.toLowerCase()),
    )
  }

  getFilteredList()

  const filteredList = useMemo(getFilteredList, [selectedCategory])

  return (
    <div className="tokens">
      {filteredList.map((item) => (
        <TokenItem
          id={item.id}
          name={item.name}
          description={item.description}
          logoURI={item.logoURI}
          symbol={item.symbol}
          price={item.price}
          priceChange={item.priceChange}
          volume={item.volume}
          volumeChangePercentage={item.volumeChangePercentage}
          tvl={item.tvl}
          tvlChangePercentage={item.tvlChangePercentage}
          users={item.users}
        />
      ))}
    </div>
  )
}

export default TokenList
