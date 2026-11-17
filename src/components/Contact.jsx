import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';

function Contact() {
    return (
        <section id="contact" className="py-5 bg-white text-light">
            <div className="container py-4">

                {/* Judul Section */}
                <div className="text-center mb-5">
                    <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-semibold mb-2">
                        📬 Mari Terhubung
                    </span>
                    <h2 className="text-dark fw-bold display-5">Contact Me</h2>
                    <p className="text-dark fw-bold mx-auto" style={{ maxWidth: '600px' }}>
                        Punya pertanyaan, tawaran kolaborasi project web, atau sekadar ingin berdiskusi seputar IoT? Silakan kirim pesan!
                    </p>
                </div>

                <div className="row g-5">

                    {/* Kolom Kiri: Informasi Kontak */}
                    <div className="col-lg-5">
                        <div className="p-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 h-100 d-flex flex-column justify-content-between">
                            <div>
                                <h4 className="fw-bold text-dark mb-3">Informasi Kontak</h4>
                                <p className="text-primary small mb-4">
                                    Aku selalu terbuka untuk berdiskusi mengenai teknologi web front-end, React.js, maupun pengembangan sistem mikrokontroler.
                                </p>

                                <div className="d-flex align-items-center mb-3">
                                    <div className="fs-4 text-primary me-3 bg-primary bg-opacity-10 p-3 rounded-circle">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h6 className="mb-0 fw-bold text-dark">Email</h6>
                                        <span className="text-primary small">azisstevenance0@gmail.com</span>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center mb-3">
                                    <div className="fs-4 text-primary me-3 bg-primary bg-opacity-10 p-3 rounded-circle">
                                        <FaPhoneAlt />
                                    </div>
                                    <div>
                                        <h6 className="mb-0 fw-bold text-dark">Telepon / WhatsApp</h6>
                                        <span className="text-primary small">+62 8xx-xxxx-xxxx</span>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center">
                                    <div className="fs-4 text-primary me-3 bg-primary bg-opacity-10 p-3 rounded-circle">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h6 className="mb-0 fw-bold text-dark">Lokasi</h6>
                                        <span className="text-primary small">Indonesia, Gorontalo</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-3 border-top border-secondary border-opacity-25">
                                <span className="text-dark small">Status: <strong>Aktif & Siap Kolaborasi</strong> 🚀</span>
                            </div>
                        </div>
                    </div>

                    {/* Kolom Kanan: Formulir Pesan */}
                    <div className="col-lg-7">
                        <div className="p-4 p-md-5 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4">
                            <form onSubmit={(e) => { e.preventDefault(); alert('Terima kasih! Pesan simulasi berhasil dikirim.'); }}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label text-dark small fw-semibold">Nama Lengkap</label>
                                    <input
                                        type="text"
                                        className="form-control bg-white text-light border-secondary border-opacity-50 py-2"
                                        id="name"
                                        placeholder="Masukkan namamu..."
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-dark small fw-semibold">Alamat Email</label>
                                    <input
                                        type="email"
                                        className="form-control bg-white text-light border-secondary border-opacity-50 py-2"
                                        id="email"
                                        placeholder="nama@email.com"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="message" className="form-label text-dark small fw-semibold">Pesan</label>
                                    <textarea
                                        className="form-control bg-white text-light border-secondary border-opacity-50"
                                        id="message"
                                        rows="4"
                                        placeholder="Tuliskan pesan atau hal yang ingin didiskusikan..."
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-outline-primary w-100 py-2 fw-semibold d-flex align-items-center justify-content-center gap-2">
                                    Kirim Pesan <FaPaperPlane />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;