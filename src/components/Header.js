import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const site=useSelector(state=>state.site)
  return (
    <div>
        <div>siteRenkModu:{site.dark ?' evet' :'hayır'}</div>
        <div>siteLanguage:{site.language}</div>

    </div>
  )
}

export default Header