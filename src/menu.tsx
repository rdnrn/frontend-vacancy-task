import token from './img/tokens.svg'
import search from './img/search.svg'

const icons = {
  tokens: token,
  search: search,
}

export const menu = [
  {
    id: 'tokens',
    title: 'Токены',
    icon: icons.tokens,
  },
  {
    id: 'search',
    title: 'Поиск',
    icon: icons.search,
  },
]
