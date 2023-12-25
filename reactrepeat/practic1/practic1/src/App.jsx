import React from 'react'
import Header from './Components/header'

import "./style.css"
import Card from './Components/card'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <Header/>
    <div className='boxes'>
     
 <Card src="http://static.bsu.az/w1/1slayd/15p.png" title="“Paşa Bank”ın BDU tələbələri üçün növbəti təlimi" />
 <Card src="http://static.bsu.az/w1/1slayd/debat1412.png" title="BDU-nun komandası “Bakı Gənclər Debat Forumu: 2023”ün qalibi olub"/>
<Card src="http://static.bsu.az/w1/1slayd/u56.png " title="BDU-nun SABAH qruplarının tələbəsi BrainGame intellektual oyun hakatonunun qalibi olub" />
<Card src="http://static.bsu.az/w1/1slayd/14ch.png " title="BDU-da Lənkəran-Astara iqtisadi rayonunda çay bitkisi sortlarının genetik müxtəlifliyinə dair elmi seminar" />
<Card src="http://static.bsu.az/w1/1slayd/14ch1.png" title="BDU və Çinin Hefei Texnologiya Universiteti arasında anlaşma memorandumu imzalanıb" />
<Card src="http://static.bsu.az/w1/1slayd/15sep.png" title="Rusiyanın Ural Federal Universitetininn nümayəndələri BDU-da" />
<Card src="http://static.bsu.az/w1/1slayd/1bvc.png" title="BDU-da orta məktəb dərsliklərinin dil problemləri araşdırılıb"/>
<Card src=" http://static.bsu.az/w1/1slayd/j58.PNG" title="BDU-nun Elmi Kitabxanası Azərbaycan Universitetində təlim-seminar keçirib" />

    </div>
   <Footer/>
    </div>
  )
}

export default App