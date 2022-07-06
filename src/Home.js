const Home = () => {
    const handleClick = (e) => {
        console.log("click here", e);
    }
    const handleClickAgain = (name,e) => {
        console.log(
            name + " clicked there",
            e.target
        )
    }
     
    return ( 
        <>
            <p style={{fontSize:"2em"}}>Home Page Content</p>
            <button onClick={handleClick}>Click Here</button>
            <button onClick={(e) => handleClickAgain("Farid",e)}>Click Here Again</button>
        </>
     );
}
 
export default Home;