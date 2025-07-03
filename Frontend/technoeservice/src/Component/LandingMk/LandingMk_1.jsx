import React, { useState } from "react";
import "../../Style/LandingMk-css/LandingMk_1.css";
import img1 from "../../image/hy.webp";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch(
        "https://tesg-backend.onrender.com/api/contact/query",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error(`Server responded ${res.status}`);

      setStatus({ loading: false, success: "Thank you! We’ll contact you soon.", error: null });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus({ loading: false, success: null, error: "⛔ Something went wrong. Try again." });
      console.error(err);
    }
  };

  return (
    <>
      <div className="hero-container-uk">
        <div className="extra-circle"></div>

        <div className="hero-content-uk">
          <h1>
            Empowering Brands Digitally
            <br /> with Gwi Techno E Service
          </h1>
          <p>
            At Gwi Techno E Service, we don’t just build websites—we craft powerful digital
            identities. From SEO and marketing to full‑stack web development, our strategies turn
            businesses into trusted digital leaders.
          </p>
        </div>

        <div className="hero-illustration-uk">
          <img src={img1} alt="Digital Agency Illustration" />
        </div>

        {/* ➜ FORM  */}
        <form className="Front-allinputs" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="message"
            placeholder="Message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={status.loading}>
            {status.loading ? "Sending…" : "Request a Callback"}
          </button>
        </form>

        {/* Feedback messages */}
        {status.success && <p className="form-success">{status.success}</p>}
        {status.error && <p className="form-error">{status.error}</p>}
      </div>
    </>
  );
};

export default HeroSection;

