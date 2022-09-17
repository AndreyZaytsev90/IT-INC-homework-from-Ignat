import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function HW10() {
    // useSelector, useDispatch
    const loading = false

    const setLoading = () => {
        // dispatch
        // setTimeout
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            <h2 style={{marginLeft: 20}}>homeworks 10</h2>

            {/*should work (должно работать)*/}
            <div style={{marginLeft: 20}}>
                {loading
                    ? (
                        <div>крутилка...</div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
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
