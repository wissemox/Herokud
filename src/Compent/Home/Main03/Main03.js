import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import './Main03.css'
import {useTranslation} from 'react-i18next'
const Main03 = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
      const{t,i18n}=useTranslation()
    return (
        <div data-Aos="fade-left" className="AllCompent" >
            <div className="Text5">
            <p>{t('Commentcamarche.1')}</p>
            <span>{t('Cesttréssimple.1')}</span>
            </div>
         <div className="h3">
             <div className="H4">
{/* TestBakGround */}
          
             <h3>1</h3>
             </div>
             <div  className="H4">

       
             <h3>2</h3>
             </div>
             <div  className="H4">

            
             <h3>3</h3>
             </div>
         </div>
         <div className="FleBoxCatgorie">
         <div className="CmpenetCatgorie">
             <h5>{t('faitplaisir.1')} </h5>
             <p>{t('Vousavez.1')}</p>
         </div>
         <div className="CmpenetCatgorie">
             <h5>{t('faitplaisir.1')} </h5>
             <p>{t('Vousavez.1')}</p>
         </div>
         <div className="CmpenetCatgorie">
             <h5>{t('faitplaisir.1')}  </h5>
             <p>{t('Vousavez.1')}</p>
         </div>
         

         </div>
         <div className="ImageCATFORY">
         <img src="Imageda.png"/>
         </div>
       
            {/* <div className="Image05s">
                <img src="Humaena5.png"/>
            </div>

            <div data-Aos="fade-right" className="TextFlexBox03">
                <div  data-Aos="fade-up"className="Textwis">
                <h2>Qu"est ce qui vous fait plaisir ? </h2>
                <p>Vous avez besoin d'un objt pour vous , votre bureau ou pour vote maison . 
                    Choisissez la catégorie et nous vous envoyons nos meilleures propositions</p>
                </div>

                <div  data-Aos="fade-up" className="Textwis">
                <h2>Qu"est ce qui vous fait plaisir ? </h2>
                <p>Vous avez besoin d'un objt pour vous , votre bureau ou pour vote maison . 
                    Choisissez la catégorie et nous vous envoyons nos meilleures propositions</p>
                </div>

                <div data-Aos="fade-up" className="Textwis">
                <h2>Qu"est ce qui vous fait plaisir ? </h2>
                <p>Vous avez besoin d'un objt pour vous , votre bureau ou pour vote maison . 
                    Choisissez la catégorie et nous vous envoyons nos meilleures propositions</p>
                </div>
            
            </div>
            <div>
                <div className="AllNumbre">
                <div className="Number">
                    <h1>1</h1>
                   
                </div>

                <div className="Number01">
                    <h1>2</h1>
                   
                </div>
                
                <div className="Number03">
                    <h1>3</h1>
                   
                </div>
                </div>
            </div> */}
        </div>
    )
}

export default Main03
