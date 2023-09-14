import React, { useState } from 'react'
import Collections from '../Components/Collections'
import Header from '../Components/Header'
import LeftNav from '../Components/LeftNav'

const Homepage = () => {
    const [showsmall, setShowSmall] = useState(true);
    const [showbig, setShowBig] = useState(false);
    return (
        <>
            <Header showsmall={showsmall} setShowSmall={setShowSmall} showbig={showbig} setShowBig={setShowBig} />
            <div className='nav-col-con'>
                <LeftNav showsmall={showsmall} showbig={showbig} />
                <Collections />
            </div>
        </>

    )
}

export default Homepage