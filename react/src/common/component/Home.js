import React from 'react'
import 'common/style/Home.css'
import 'common/style/Common.css'
import Navi from 'common/component/Navi'
import Footer from 'common/component/Footer'
import WhereToFindMe from 'common/component/WhereToFindMe'
import WhatAmI from 'common/component/WhatAmI'
import WhoAmI from 'common/component/WhoAmI'
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

