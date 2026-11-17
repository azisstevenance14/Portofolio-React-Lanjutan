import React from 'react';
import { FaGithub, FaArrowRight, FaCode, FaInstagram } from 'react-icons/fa';
import fotoAzis from '../assets/Azis.png';

function Hero() {
    return (
        <section id="home" className="py-5 bg-white text-light min-vh-100 d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center gy-5">

                    {/* Sisi Kiri: Teks Perkenalan */}
                    <div className="col-lg-6 text-center text-lg-start">
                        <div className="mb-3">
                            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold">
                                Selamat Datang di Portofolio Saya
                            </span>
                        </div>

                        <h1 className="display-4 fw-bold mb-3 text-primary">
                            <span className="text-primary">Azis Steven S. Ance</span>
                        </h1>

                        <h3 className="h4 text-secondary mb-4">
                            Junior Programmer & IoT Enthusiast
                        </h3>

                        <p className="lead text-muted mb-4">
                            Berfokus pada pengembangan front-end web modern menggunakan React.js dan Bootstrap,
                            serta hobi merakit sistem otomasi berbasis mikrokontroler.
                        </p>

                        {/* Tombol Aksi (Call to Action) */}
                        <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4">
                            <a href="#projects" className="btn btn-primary px-4 py-2 fw-semibold d-flex align-items-center gap-2">
                                Lihat Project <FaArrowRight />
                            </a>
                            <a href="#contact" className="btn btn-outline-primary px-4 py-2 fw-semibold">
                                Hubungi Saya
                            </a>
                        </div>

                        {/* Tautan Sosial Media / Quick Links */}
                        <div className="d-flex gap-3 justify-content-center justify-content-lg-start fs-4 text-secondary">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary hover-primary">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover-primary">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Sisi Kanan: Ilustrasi / Kartu Profil Singkat */}
                    <div className="col-lg-6 text-center">
                        <div className="position-relative d-inline-block">

                            {/* Kotak Pembungkus Gambar */}
                            <div className="overflow-hidden rounded-3  bg-white d-flex align-items-center justify-content-center" style={{ height: '380px' }}>
                                <img
                                    src={fotoAzis}
                                    alt="Azis Steven S. Ance"
                                    className="w-100 h-100 object-fit-cover"
                                />
                            </div>

                            <div className="text-center mt-3 px-1">
                                <h5 className="fw-bold text-primary mb-1">Azis Steven S. Ance</h5>
                                <p className="text-muted small mb-0">
                                    Code. Build. Automate. ⚡
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;