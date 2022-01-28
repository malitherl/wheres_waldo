import {Link} from 'react-router-dom';
import '../App.css';

function Nav() {

    return(
        <div className='Nav-link'>
                <Link to="/" className='Nav-link'>Home</Link>
                <Link to="/play" className='Nav-link'>Play</Link>               
                <Link to="/scores" className='Nav-link'>Scores</Link>
        </div>
    )
}

export default Nav;