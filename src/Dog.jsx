import React from "react";
// class Dog extends React.Component {
//     render()
// {
//     return(
//         <>
//         <h1>My dog name is:{this.props.name}</h1>
//         </>
//     )
// }
// }
function Dog(props){
    return(
        <>
        <h1>My dog name is:{props.name}</h1>
        </>
    )
}
export default Dog;