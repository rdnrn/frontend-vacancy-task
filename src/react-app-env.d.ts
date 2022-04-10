/// <reference types="react-scripts" />

// TOKEN PROPS
interface TokenListProps {
  id: number
  name: string
  description: string
  logoURI: string
  symbol: string
  price: number
  priceChange: IPriceChange
  volume: number
  volumeChangePercentage: number
  tvl: number
  tvlChangePercentage: number
  users: number
}

interface IPriceChange {
  hours24: number
  days7: number
  days365: number
}

// Category useState props
interface ISelectedCategory {
  selectedCategory?: string
  setSelectedCategory?: (value: string) => void
}
