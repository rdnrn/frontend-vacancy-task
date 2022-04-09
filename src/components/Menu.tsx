import { FC } from 'react'
import { menu } from '../menu'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../img/Logo.svg'

const Menu: FC = () => {
  return (
    <div className="menu">
      <div className="menu__logo">
        <Logo />
      </div>
      <ul className="menu__list">
        {menu.map((item) => (
          <Link className="menu__link" key={item.id} to={`/${item.id}`}>
            <li className="menu__list-item">
              <img src={item.icon} alt="" />
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
      <div className="menu__language">Русский</div>
    </div>
  )
}

export default Menu
