import { FC } from 'react'
import { menu } from '../menu'
import { Link } from 'react-router-dom'

const Menu: FC = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <Link key={item.id} to={`/${item.id}`}>
          <div className="menu-item">{item.title}</div>
        </Link>
      ))}
    </div>
  )
}

export default Menu
