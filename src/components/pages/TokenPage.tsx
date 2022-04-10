import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { tokens } from '../../tokens'

const TokenPage: FC = () => {
  const param = useParams()
  const { symbol } = param

  const tokenName = tokens.filter((item) => {
    return item.symbol === symbol
  })

  return (
    <div className="token-page">
      <div className="m-b-header">
        <h1 className="heading-1">{tokenName[0].name}</h1>
      </div>
      <div className="content">
        <h2 className="heading-2">
          Тестовое задание не предусматривает реализацию контента здесь
        </h2>
      </div>
    </div>
  )
}

export default TokenPage
