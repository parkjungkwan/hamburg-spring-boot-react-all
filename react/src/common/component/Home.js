import React from 'react'
import '../style/Home.css'
import '../style/Common.css'
import Navi from './Navi'
import Footer from './Footer'
import WhereToFindMe from './WhereToFindMe'
import WhatAmI from './WhatAmI'
import WhoAmI from './WhoAmI'
const Home = () => {

    return(<>
            <Navi/>
            <WhoAmI/>
            <WhatAmI/>
            <WhereToFindMe/>
            <Footer/>
            </>
            )
}
export default Home;

