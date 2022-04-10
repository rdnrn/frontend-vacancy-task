import { FC, useState } from 'react'
import { ReactComponent as ArrowDown } from '../img/chevron-down.svg'
import { ReactComponent as ArrowUp } from '../img/chevron-up.svg'
import { ReactComponent as UsersIcon } from '../img/users.svg'
import { Link } from 'react-router-dom'

const TokenItem: FC<TokenListProps> = (props) => {
  const {
    id,
    name,
    description,
    logoURI,
    symbol,
    price,
    priceChange,
    volume,
    volumeChangePercentage,
    tvl,
    tvlChangePercentage,
    users,
  } = props

  const [show, setShow] = useState<boolean>(false)

  return (
    <div className="token">
      <div className="token__info">
        <div className="token__id">#{id}</div>
        <div className="token__logo">
          <img className="token__logo-img" src={logoURI} alt="Token's logo" />
        </div>
        <Link to={`/token/${symbol}`}>
          <div className="token__name-details">
            <h4 className="token__name heading-4">{name}</h4>
            <h5 className="token__symbol heading-5">{symbol}</h5>
          </div>
        </Link>
      </div>
      <div className="token__price-container">
        <h4 className="token__price heading-4">{price} $</h4>
        <div className="token__price-change">
          <p style={{ color: `${priceChange.hours24 >= 0 ? 'green' : 'red'}` }}>
            {priceChange.hours24}%
          </p>
          <p className="dot">•</p>
          <p style={{ color: `${priceChange.days7 >= 0 ? 'green' : 'red'}` }}>
            {priceChange.days7}%
          </p>
          <p className="dot">•</p>
          <p style={{ color: `${priceChange.days365 >= 0 ? 'green' : 'red'}` }}>
            {priceChange.days365}%
          </p>
        </div>
      </div>
      <div className="token__volume-container">
        <div className="token__volume heading-4">{volume} $</div>
        <div className="token__volume-change heading-5">{volumeChangePercentage}%</div>
      </div>
      <div className="token__tvl-container">
        <div className="token__tvl heading-4">{tvl} $</div>
        <div className="token__tvl-change heading-5">{tvlChangePercentage}%</div>
      </div>
      <div className="token__users-container">
        <div className="token__users heading-4">
          <UsersIcon />
          {users}
        </div>
      </div>
      <div onClick={() => setShow(!show)} className="token__arrow-btn">
        {show && <ArrowUp className="arrow-btn-svg" />}
        {!show && <ArrowDown className="arrow-btn-svg" />}
      </div>
      {show && <div className="token__description">{description}</div>}
    </div>
  )
}

export default TokenItem
