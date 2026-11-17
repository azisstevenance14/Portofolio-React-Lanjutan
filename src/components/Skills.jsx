import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt, FaGithub, FaMicrochip, FaTools } from 'react-icons/fa';

function Skills() {
    // Data daftar skill kamu
    const skillList = [
        { name: "HTML5", icon: <FaHtml5 className="text-danger" />, level: "Advanced" },
        { name: "CSS3 / Styling", icon: <FaCss3Alt className="text-primary" />, level: "Advanced" },
        { name: "Bootstrap 5", icon: <FaBootstrap className="text-purple" style={{ color: '#7952b3' }} />, level: "Advanced" },
        { name: "JavaScript (ES6+)", icon: <FaJs className="text-warning" />, level: "Intermediate" },
        { name: "React.js", icon: <FaReact className="text-info" />, level: "Intermediate" },
        { name: "Git Version Control", icon: <FaGitAlt className="text-danger" />, level: "Intermediate" },
        { name: "GitHub Workflow", icon: <FaGithub className="text-light" />, level: "Intermediate" },
        { name: "Arduino & IoT", icon: <FaMicrochip className="text-success" />, level: "Advanced" },
    ];

    return (
        <section id="skills" className="py-5 bg-black text-light">
            <div className="container py-4">

                {/* Judul Section */}
                <div className="text-center mb-5">
                    <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-semibold mb-2">
                        💡 Keahlian & Teknologi
                    </span>
                    <h2 className="fw-bold display-5">My Skills & Stack</h2>
                    <p className="text-white mx-auto" style={{ maxWidth: '600px' }}>
                        Teknologi, bahasa, dan tools yang biasa aku gunakan untuk membangun aplikasi web interaktif serta sistem IoT.
                    </p>
                </div>

                {/* Grid Kartu Skills */}
                <div className="row g-4 justify-content-center">
                    {skillList.map((skill, index) => (
                        <div key={index} className="col-6 col-md-4 col-lg-3">
                            <div className="p-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 h-100 text-center hover-card transition-all">
                                <div className="fs-1 mb-3">
                                    {skill.icon}
                                </div>
                                <h5 className="fw-bold text-light mb-1">{skill.name}</h5>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills;