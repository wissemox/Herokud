import React,{useState ,useEffect} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"
import Modale from './Modal'
import {useTranslation} from 'react-i18next'
const Navbar = ({BackgroundImage , setImage}) => {
    const[Morge , setMorge]=useState()
    const[Bloen , setBloen]=useState(false)
    const Togel =()=>{
        setImage(!BackgroundImage)
        setColorChage('red')
    }
    const [ColorChnage , setColorChage]=useState('black')
 
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
      const{t,i18n}=useTranslation()
   
    return (
        <div   data-Aos="fade-up" className="nAVbA02">
                    
            {BackgroundImage?<div className="Test06"> 
            <div data-Aos="fade-up"  className="Categories">
            <button  onClick={Togel}></button>
            </div>
            </div> :null}
           
            <div className="FlexBox03">
                <div className="ImageNavbar">
                          <img src="binpact002.png"/>
                </div>
                <div className="ImageNavBar01">
                <img src="binpact002.png"/>
                </div>
                    <div className="Text03">
                        {console.log(BackgroundImage)}
                     <p>{t('Accueil.1')}</p>
                 <Link to="/Catgory"> <div className="PorquoiBinpact">
                 <p  >{t('Pourquoi Binpact.1')}</p>
                     </div> </Link> 
                     <p style={{color:ColorChnage}} onClick={Togel}>{t('Catégorihes.1')}</p> 
                    {/* <Modale className="d"/> */}
                    <p>{t('Communautés.1')}</p>
                    <div className="ButtonFlexBox">
                    <Link to="/login"><button><h2>{t('connexion.1')}</h2></button></Link> 
                    <Link to="/Login02"><button><h2>{t('inscrire.1')}</h2></button></Link> 
                    </div>
                    <div className="ButtonResposive">
                    <Link to="/login"><button><img src="UserName.png"/></button></Link> 
                    <Link to="/Login02"><button>  <img src="Password03.png"/></button></Link> 
                    
                    </div>
              
                </div>
                
            </div>
            <div className="Menu05">

            <img onClick={()=>setBloen(!Bloen)} src="Menud.png"/>
            
           
            </div>
            <div className="BOlen">
             
            {Bloen ?    <div className="Margine5">
                    <p>Accueil</p>
                    <p>Pourquoi Binpact</p>
                    <p>Catégories</p>
                    <p>Communautés</p>
                    <div className="Button03">
                <Link to="/login"><button><h2>Login</h2></button></Link> 
                <Link to="/Register"><button><h2>Register</h2></button></Link> 
                </div>
               </div>   :null}
               </div>
              <div>
            
              </div>
        </div>
    )
}

export default Navbar
