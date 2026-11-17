import { FaCode } from 'react-icons/fa';

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm'>
            <div className='container'>
                {/* Brand / Logo */}
                <a className='navbar-brand fw-bold d-flex align-items-center gap-2' href="#home">
                    <FaCode className="text-primary fs-4" />
                    <span>ASSA<span className='text-primary'>.dev</span></span>
                </a>

                {/* Tombol Toggler (Mobile) */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu Navigasi (navbar-ul sudah dibersihkan jadi navbar-nav saja) */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-lg-3">
                        <li className="nav-item">
                            <a className="nav-link active" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;