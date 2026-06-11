import { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:overflow-hidden font-clash lg:h-screen">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 overflow-y-auto lg:overflow-hidden">
        {/* Left: Contact Form */}
        <div
          className="card-glass p-6 lg:p-8 bg-[#0a0a0a90] border-white/5 rounded-2xl"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 h-full">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu Nombre"
                  className="w-full px-4 py-3 bg-[#1e2024] border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 bg-[#1e2024] border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm text-white/70 mb-2">Asunto</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Asunto del mensaje"
                className="w-full px-4 py-3 bg-[#1e2024] border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
                required
              />
            </div>

            {/* Message */}
            <div className="flex-1 flex flex-col">
              <label className="block text-sm text-white/70 mb-2">
                Mensaje
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí..."
                rows={6}
                className="flex-1 px-4 py-3 bg-[#1e2024] border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-orange-500 hover:bg-orange-900 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        {/* Right: Contact Info & Social */}
        <div className="flex flex-col gap-6">
          {/* Contact Information */}
          <div
            className="card-glass p-6 lg:p-8 bg-[#0a0a0a90] border-white/5 rounded-2xl"
          >
            <h3 className="text-xl font-bold mb-6">Información de Contacto</h3>

            <div className="flex flex-col gap-4">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">
                    Correo Electrónico
                  </p>
                  <a
                    href="mailto:migang@example.com"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    miguelangelyv1@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Teléfono</p>
                  <p className="text-white">+51 954936677</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Ubicación</p>
                  <p className="text-white">Ciudad, Perú</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div
            className="card-glass p-6 lg:p-8 bg-[#0a0a0a90] border-white/5 rounded-2xl"
          >
            <h3 className="text-xl font-bold mb-6">Redes Sociales</h3>

            <div className="flex gap-4 justify-start">
              <a
                href="https://github.com/M1GaNg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
