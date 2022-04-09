import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { tokens } from '../../tokens'

const TokenPage: FC = () => {
  const param = useParams()
  const { symbol } = param

  const tokenName = tokens.filter((item) => {
    return item.symbol === symbol
  })

  console.log(tokenName)

  return <div>{tokenName[0].name}</div>
}

export default TokenPage
