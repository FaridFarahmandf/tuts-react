import {Link} from 'react-router-dom'
const NotFound = () => {
    return ( 
        <div>
            <h2>Sorry</h2>
            <p>Oops The page cannot be found...</p>
            <Link to="/">return to homepage</Link>
        </div>
     );
}
 
export default NotFound;