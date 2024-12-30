import React from 'react';
// import Dog from './Dog';
import State from './states'
import Propsstate from './propsstate'
class Vijay extends React.Component {
    render(){
        return(
            <>
            {/* <Dog name="jimmy"/> */}
            <Propsstate value={10}/>
            {/* <State/> */}
            </>
        )
    }
}
export default Vijay;