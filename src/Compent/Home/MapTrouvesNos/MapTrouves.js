import React,{useEffect} from 'react'
import './MapTrouve.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import {useTranslation} from 'react-i18next'
const MapTrouves = () => {
    const{t,i18n}=useTranslation()
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
        <div>
            <div data-Aos="fade-left" className="MapTrouves">
                <p>{t('Ounoustrouver.1')}</p>
            </div>
            <div  data-Aos="fade-left" className="Morgunet">
                <img data-Aos="fade-left" src="Map02.jpg"/>
                <img data-Aos="fade-left" src="Map03.jpg"/>
            </div>
            
        </div>
    )
}

export default MapTrouves
