import './Form.css'
function Form(){
return(
    <>
    <form id="sample">
    <label for="name">Name:</label>
    <input name="name" id="name" type="text" placeholder="Enter your name" ></input>
    <label>E-mail:
    <input id="email"type="text" placeholder="Enter your e-mail" ></input></label>
    <button id="b1">Click to submit</button>
    </form>
    </>
)
}
export default Form