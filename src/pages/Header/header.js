import './header.css'

function Header() {
    return (
        <header>
            <span>ShareLocation</span>

            <div className='content-menu'>
                <input id='navbar-control' type={'checkbox'}></input>
                <label className='icon-menu' htmlFor='navbar-control'></label>
                <label className='label-btn' htmlFor='navbar-control'></label>


                <nav className='main-navbar'>
                    <ul>
                        <li><a href='https://www.linkedin.com/in/francisco-guzman-herrera' target='_blank' rel='noreferrer'>Contact me</a></li>
                        <li><a href='https://github.com/I7RANK/share-location_frontend' target='_blank' rel='noreferrer'>GitHub repo</a></li>
                    </ul>
                </nav>

                <div className='main-navbar-background'></div>
            </div>
        </header>
    );
}

export default Header;
