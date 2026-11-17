import React from 'react';
import { FaCode, FaMicrochip } from 'react-icons/fa';

// Import foto Azis.png dari src/assets/
import fotoAzis from '../assets/Azis.png';

function About() {
    return (
        <section id="about" className="py-5 bg-dark text-light border-top border-secondary border-opacity-25">
            <div className="container py-4">

                {/* Judul Section */}
                <div className="text-center mb-5">
                    <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-4 rounded-pill fw-bold mb-2">
                        👨‍💻 Tentang Saya
                    </span>
                    <h2 className="fw-bold display-5">About Me</h2>
                </div>

                <div className="row align-items-center gy-5">

                    {/* Sisi Kiri: Foto Azis.png */}
                    <div className="col-lg-5 text-center">
                        <div className="p-3" style={{ maxWidth: '340px' }}>
                            <div className="overflow-hidden rounded-3  bg-dark d-flex align-items-center justify-content-center" style={{ height: '380px' }}>
                                <img
                                    src={fotoAzis}
                                    alt="Azis Steven S. Ance"
                                    className="w-100 h-100 object-fit-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sisi Kanan: Penjelasan Singkat */}
                    <div className="col-lg-7">
                        <h3 className="fw-bold mb-3 text-light">
                            Menggabungkan Dunia <span className="text-primary">Web Front-End</span> & <span className="text-primary">IoT System</span>
                        </h3>

                        <p className="lead text-primary fw-bold mb-4 fs-6">
                            Halo! Saya <strong>Azis Steven S. Ance</strong>. Saya seorang pengembang perangkat lunak yang berfokus pada arsitektur web modern serta sistem otomasi mikrokontroler.
                        </p>

                        <p className="text-white fw-bold mb-4 small">
                            Saya senang membangun antarmuka web yang rapi, responsif, dan modular menggunakan React.js dan Bootstrap 5. Di samping itu, saya aktif mengeksplorasi integrasi perangkat keras IoT (Arduino, ESP8266, platform Blynk) serta penulisan karya ilmiah terkait analisis dan monitoring sistem kelistrikan.
                        </p>

                        {/* Kartu Sorotan */}
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <div className="p-3 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-3 d-flex align-items-center gap-3">
                                    <div className="fs-3 text-primary">
                                        <FaCode />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold text-light mb-0">Front-End Dev</h6>
                                        <span className="text-white small">React.js & Bootstrap</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="p-3 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-3 d-flex align-items-center gap-3">
                                    <div className="fs-3 text-warning">
                                        <FaMicrochip />
                                    </div>
                                    <div>
                                        <h6 className="fw-bold text-light mb-0">IoT & Electrical</h6>
                                        <span className="text-white small">Arduino & Hardware</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;