import { Button } from '@mantine/core'
import { ICustomeButtonProps } from './utility/models/global.model'
import { Link } from 'react-router-dom'

export default function CustomeButton({label,url=""}:ICustomeButtonProps) {
  return (
    <Button radius="lg" component={Link} to={url} styles={ {label:{ textDecoration: 'none', color: 'white' }}}>{label}</Button>
  )
}
