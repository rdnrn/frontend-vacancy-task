import { FC, useState } from 'react'
import { categories } from '../tokens'

const CategoriesList: FC<ISelectedCategory> = ({ setSelectedCategory }) => {
  const [tokenCategory, setTokenCategory] = useState<string>('all')

  const handleSelect = (category: string) => {
    setSelectedCategory?.(category)
    setTokenCategory(category)
  }

  return (
    <ul className="categories">
      {categories.map((category) => {
        return (
          <li
            key={category.id}
            onClick={() => handleSelect(category.title)}
            className={`categories__name ${
              category.title.includes(tokenCategory) ? 'selected' : ''
            }`}
          >
            {category.title}
          </li>
        )
      })}
    </ul>
  )
}

export default CategoriesList
