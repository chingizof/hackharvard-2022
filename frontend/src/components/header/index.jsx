import { Link } from 'react-router-dom'
import './index.css'

export const Header = () => {
    return(
        <nav>
            <div className='header-wrapper'>
                <div className='header-content'>
                    <Link to="/">
                        <div className='logo'>
                        </div>
                    </Link>
                    <div>
                        <Link to="/find-games">
                            Find New Game
                        </Link>
                    </div>
                    <div>
                        <Link to="/leaderboard">
                            Leaderboards
                        </Link>
                    </div>
                    <div>
                        <Link to="/whysolve">
                            Why Solve Math?
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}