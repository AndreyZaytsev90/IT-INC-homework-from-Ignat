import React from 'react'
import notFound from './../svg/404notFound.jpg'
import style from './../css/error.module.css'

function Error404() {
    return (
        <div>
            <img src={notFound} className={style.error} alt={"404notFound"}/>
           {/* <div>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>*/}
        </div>
    )
}

export default Error404
