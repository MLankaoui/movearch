import './Header.css'

const Header = () => {
    return (
        <>
            <div className='navbar-container'>
                <ul className='navbar'>
                    <div className='left'>
                        <li className='nav-logo'>MOVEARCH</li>
                    </div>
                    <div className='right'>
                        <li className='nav-item'>Horror</li>
                        <li className='nav-item'>Romance</li>
                        <li className='nav-item'>War</li>
                    </div>

                    <div className='search'>
                        <input type='text' className='search-bar' placeholder='The god father'/>
                        <button className='search-button'>Search</button>
                    </div>
                </ul>
            </div>

        </>
    )
}

export default Header