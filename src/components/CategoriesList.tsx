import { FC } from 'react'
import { categories } from '../tokens'

const CategoriesList: FC<ISelectedCategory> = ({ setSelectedCategory }) => {
  const handleSelect = (category: string) => {
    setSelectedCategory?.(category)
  }

  return (
    <ul className="category">
      {categories.map((category) => {
        return (
          <li
            key={category.id}
            onClick={() => handleSelect(category.id)}
            className="category__name"
          >
            {category.title}
          </li>
        )
      })}
    </ul>
  )
}

export default CategoriesList
