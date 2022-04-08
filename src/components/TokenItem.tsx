import { FC, useState } from 'react'
import { ReactComponent as ArrowDown } from '../img/arrow-down.svg'
import { ReactComponent as ArrowUp } from '../img/arrow-up.svg'

const TokenItem: FC<TokenListProps> = (props) => {
  const {
    id,
    name,
    description,
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
      <div className="token__main">
        <div className="token__id">#{id}</div>
        <div className="token__name-container">
          <h4 className="token__name">{name}</h4>
          <h5 className="token__symbol">{symbol}</h5>
        </div>
        <div className="token__price-container">
          <h4 className="token__price">{price}</h4>
          <div className="token__price-change">
            <p>{priceChange.hours24}</p>
            <p>{priceChange.days7}</p>
            <p>{priceChange.days365}</p>
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
        <div onClick={() => setShow(!show)} className="arrow-btn">
          {show && <ArrowUp fill="red" stroke="green" className="arrow-btn-svg" />}
          {!show && <ArrowDown fill="red" stroke="green" className="arrow-btn-svg" />}
        </div>
      </div>
      {show && <div className="token__description">{description}</div>}
    </div>
  )
}

export default TokenItem
