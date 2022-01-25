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
                        <li>Contact me</li>
                        <li>About ShareLocation</li>
                        <li>GitHub repo</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
