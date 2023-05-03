import React,{useContext} from 'react'
import ComponentE from './ComponentE'
import { UserContext,ChannelContext,AuthorContext } from '../App'
function ComponnetC() {
    const user=useContext(UserContext)
    const channel=useContext(ChannelContext)
    const author=useContext(AuthorContext)
  return (
    <div>
    
        <div> User - {user} ,Channel - {channel}, Author - {author}</div>
      <ComponentE/>
    </div>
  )
}

export default ComponnetC
