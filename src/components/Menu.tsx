import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../img/Logo.svg'
import { ReactComponent as TokensIcon } from '../img/tokens.svg'
import { ReactComponent as SearchIcon } from '../img/search.svg'

const Menu: FC = () => {
  return (
    <div className="menu">
      <div className="menu__logo">
        <Logo />
      </div>
      <ul className="menu__list">
        <NavLink className="menu__link" key="tokens" to="/tokens">
          <li className="menu__list-item">
            <TokensIcon className="menu__svg-icon" />
            Токены
          </li>
        </NavLink>
        <NavLink className="menu__link" key="search" to="/search">
          <li className="menu__list-item">
            <SearchIcon className="menu__svg-icon" />
            Поиск
          </li>
        </NavLink>
      </ul>
      <div className="menu__language">Русский</div>
    </div>
  )
}

export default Menu
