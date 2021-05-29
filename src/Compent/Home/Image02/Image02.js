import React,{useEffect} from 'react'
import './Image038.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import Rate0 from './Rate'
import {useTranslation} from 'react-i18next'
const Image02 = ({setRate ,Rate}) => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
      const{t,i18n}=useTranslation()
    return (
       

        
            <div data-Aos="fade-right"  className="BackgroundPhoto" >
              
              <div className="Image8">
              <img src="ASsesta.png"/>
              </div>
              <div className="Noteetavis">
                <p>{t('Noteetavis.1')}</p>
                <span>★	</span>
                <span>★	</span>
                <span>★	</span>
                <span>★	</span>
                <span>☆		</span>
                <h1>4</h1>
              </div>
              

              <div className="Avs">
                <h2>{t('Noterceteplateforme.1')}</h2>
                <p>{t('Donnesvotre.1')}</p>
               <Rate0 Rate={Rate} setRate={setRate} />
                <h3>{t('Regigezunavis.1')}</h3>
              </div>

        </div>
        
    )
}

export default Image02
