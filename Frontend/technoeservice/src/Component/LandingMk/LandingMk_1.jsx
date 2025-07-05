import React, { useState } from "react";
import "../../Style/LandingMk-css/LandingMk_1.css";
import img4 from "../../image/1.png"
import img5 from "../../image/22.png"
import img6 from "../../image/33.png"
import img7 from "../../image/44.png"
import img8 from "../../image/55.png"

const HeroSection = () => {
  const [formData, setFormData] = useState({
    username: "",
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

    const payload = {
      username: formData.username.trim(),
      email: formData.email.trim(),
      phone: Number(formData.phone),
      message: formData.message.trim(),
    };


    try {
      const res = await fetch("https://tesg-backend.onrender.com/api/contact/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("🔁 Backend response:", data);

      if (!res.ok) {
        throw new Error(data.message || `Server responded ${res.status}`);
      }

      setStatus({ loading: false, success: "Thank you! We’ll contact you soon.", error: null });
      setFormData({ username: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message });
      console.error("❌ Error in handleSubmit:", err);
    }
  };

  return (
    <div className="hero-container-uk">


      <div className="hero-content-uk">
        <h1>
          Empowering Brands Digitally
          <br />
          with Gwi Techno E Service
        </h1>
        <p>
          At Gwi Techno E Service, we don’t just build websites—we craft powerful digital
          identities.
        </p>
      </div>

      {/* <div className="hero-illustration-uk">
        <img src={img1} alt="Digital Agency Illustration" />
      </div> */}

      <form className="Front-allinputs" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Name"
          value={formData.username}
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
          {status.loading ? "Sending…" : "Request a Callback"}
        </button>
      </form>

      {status.success && <p className="form-success">{status.success}</p>}
      {status.error && <p className="form-error">{status.error}</p>}




      <div  className="all-img-under">
        <img src={img4} alt="" /><img src={img5} alt="" /><img src={img6} alt="" /><img src={img7} alt="" /><img src={img8} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;

