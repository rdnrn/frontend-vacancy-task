import { FC, useState } from 'react'
import { ReactComponent as ArrowDown } from '../img/chevron-down.svg'
import { ReactComponent as ArrowUp } from '../img/chevron-up.svg'
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
      <div className="token__id">#{id}</div>
      <div className="token__info">
        <div className="token__logo">
          <img className="token__logo-img" src={logoURI} alt="Token's logo" />
        </div>
        <Link to={`/token/${symbol}`}>
          <div className="token__name-details">
            <h4 className="token__name">{name}</h4>
            <h5 className="token__symbol">{symbol}</h5>
          </div>
        </Link>
      </div>
      <div className="token__price-container">
        <h4 className="token__price">{price}</h4>
        <div className="token__price-change">
          <p>{priceChange.hours24}%</p>
          <p className="dot">•</p>
          <p>{priceChange.days7}%</p>
          <p className="dot">•</p>
          <p>{priceChange.days365}%</p>
        </div>
      </div>
      <div className="token__volume-container">
        <div className="token__volume">{volume}</div>
        <div className="token__volume-change">{volumeChangePercentage}</div>
      </div>
      <div className="token__tvl-container">
        <div className="token__tvl">{tvl}</div>
        <div className="token__tvl-change">{tvlChangePercentage}</div>
      </div>
      <div className="token__users-container">
        <div className="token__users">{users}</div>
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
