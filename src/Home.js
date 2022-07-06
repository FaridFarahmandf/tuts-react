import { useState } from "react";
const Home = () => {
    let [name, setName] = useState("Rouzbeh");
    let [age, setAge] = useState(25)
    const handleClick = () => {
        setName("Farid");
        setAge(32)
    }

     
    return ( 
        <>
            <p style={{fontSize:"2em"}}>Home Page Content</p>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Here</button>
        </>
     );
}
 
export default Home;