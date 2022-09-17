import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import LoadingIcon from "./gif/Loading_icon.gif"
import styleBtn from "../h4/common/c2-SuperButton/SuperButton.module.css";

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loadingReducer.loading)
    //const loading = false
    //debugger
    const dispatch = useDispatch()


    const setLoading = () => {

        dispatch(loadingAC(true))

        setTimeout(() => dispatch(loadingAC(false)), 2000)

        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            <h2 style={{marginLeft: 20}}>homeworks 10</h2>

            {/*should work (должно работать)*/}
            <div>
                {loading
                    ? <img src={LoadingIcon} width={150} height={100} alt="Icon"/>
                    : (
                        <div style={{marginTop: 101}}>
                            <SuperButton className={styleBtn.buttonLow}
                                         onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
