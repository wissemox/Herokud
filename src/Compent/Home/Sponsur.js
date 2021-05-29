import React from 'react'
import './Sponsour.css'
import {useTranslation} from 'react-i18next'
const Sponsur = () => {
    const{t,i18n}=useTranslation()
    return (
        <div className="Sponsur">
            
            <div className="Sponsir03">
            <div className="TextSponnsurall">
            <div className="H1">
                
            <h1 id="Liens"> {t('Liens.1')} </h1>
       
        <h1>{t('Catégories.1')}</h1>
        <h1>Contact</h1>
            </div>
          
            <div className="TextSponsur">
                <div className="TextSponsour01">
                    <p>{t('Quisomenous.1')}</p>
                    <p>{t('Commentcamarche.1')} </p>
                    <p>{t('Lachartedu.1')}</p>
                </div>
                <div className="FlexBox07">
                    <div className="FlexBoxTsext06">
                    <p>Multimédia</p>
                   <p>pour Maison</p>
                   <p id="Buerau">Bureau</p>
                    </div>
                    <div className="FlexBoxTsext06">
                    <p>Immoblier</p>
                   <p id="PourVous">pour vous</p>
                   <p id="Loisir">Loisirs</p>
                    </div>
                    <div className="FlexBoxTsext06">
                    <p>Auto-Moto</p>
                   <p>Pour enfant </p>
                   <p id="Bircolagge">Bircolage</p>
                    </div>
                  
                </div>
                <div className="Dazd">
                    <p>Address :</p>
                    <p>Num Tel:</p>
                    <p>Social media</p>
                </div>
            </div>
            </div>
            <div className="InscrivesVous">
            <p>{t('INSCRIVEZ.1')}</p>
            </div>
            <div className="InputInscrevie">
            <input placeholder="E-mail"/>
           
            </div>
            <div className="Flash8">
            <img src="Flash03.png"/>
            </div>
            </div>
        </div>
    )
}

export default Sponsur
