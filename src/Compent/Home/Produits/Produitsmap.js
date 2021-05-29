import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import {useTranslation} from 'react-i18next'
const Produitsmap = ({el}) => {
    const{t,i18n}=useTranslation()
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
      
    return (
        <div data-Aos="fade-left" className="ProduitsMap03">
            <div className="Backgroundhwite">
                <img src={el.Image}/>
                
            </div>
            <div className="Bdutton">       
            <button>{t('Trouquez.1')}</button>
            </div>
            
            
            
        </div>
    )
}

export default Produitsmap
