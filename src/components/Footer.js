import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage, setDarkmode } from '../stores/site'

const Footer = () => {
    const site = useSelector(state => state.site)
    const languages = ['tr', 'en']
    const dispatch = useDispatch()
    const handleLanguage = lang => {

        dispatch(setLanguage(lang))

      
    }
    const handleDarkMode=()=>{
            dispatch(setDarkmode())
    }

    return (
        <div>
            <div>
                {languages.map((lang, index) => (
                    <button onClick={() => handleLanguage(lang)} className={lang === site.language ? 'active' : ''} key={index}>{lang}</button>
                ))}
            </div>
            <div>
                <button onClick={handleDarkMode}>
                    {site.dark ? 'Light Moda geç ' : 'Dark moda geç'}
                </button>
            </div>
        </div>
    )
}

export default Footer