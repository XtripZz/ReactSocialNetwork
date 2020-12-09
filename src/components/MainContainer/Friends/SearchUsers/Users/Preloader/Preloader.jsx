import React from 'react'
import s from './Preloader.module.css'
import preloader from '../../../../../../assets/preloader/810.svg'

const Preloader = (props) => {
    return <div className={s.preloader}>
        <img src={preloader} />
    </div>
}

export default Preloader