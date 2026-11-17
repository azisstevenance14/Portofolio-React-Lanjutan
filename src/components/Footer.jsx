import React from 'react';
import { FaHeart, FaArrowUp } from 'react-icons/fa';

function Footer() {
    // Fungsi untuk kembali mulus ke bagian paling atas halaman
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-dark text-light py-4 border-top border-secondary border-opacity-25">
            <div className="container">
                <div className="row align-items-center gy-3">

                    {/* Sisi Kiri: Hak Cipta & Nama */}
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-0 text-white small">
                            &copy; {new Date().getFullYear()} <span className="text-light fw-semibold">Azis Steven S. Ance</span>. All Rights Reserved.
                        </p>
                    </div>

                    {/* Sisi Kanan: Keterangan & Tombol Back to Top */}
                    <div className="col-md-6 text-center text-md-end d-flex align-items-center justify-content-center justify-content-md-end gap-3">
                        <span className="text-white small d-flex align-items-center gap-1">
                            Built with <FaHeart className="text-danger small" /> using React & Bootstrap
                        </span>

                        {/* Tombol Scroll ke Atas */}
                        <button
                            onClick={scrollToTop}
                            className="btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center justify-content-center text-light"
                            style={{ width: '36px', height: '36px' }}
                            title="Kembali ke atas"
                        >
                            <FaArrowUp />
                        </button>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;