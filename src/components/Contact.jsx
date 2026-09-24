import { useState } from "react";
import { Mail, Send, Copy, Check, MapPin, Phone, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isCopied, setIsCopied] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus("error");
      return;
    }

    setSubmitStatus("success");

    // Construct mailto link and trigger
    const subject = encodeURIComponent("Portfolio Inquiry from " + formData.name);
    const body = encodeURIComponent(
      formData.message + "\\n\\n— " + formData.name + " (" + formData.email + ")"
    );

    setTimeout(() => {
      window.location.href = "mailto:" + personalInfo.email + "?subject=" + subject + "&body=" + body;
    }, 600);
  };

  return (
    <section id="contact" className="contact-final-scene-section" aria-label="Contact Tamilarasi">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-label-group">
          <span className="section-eyebrow">06 / THE FINAL SCENE · GET IN TOUCH</span>
          <h2 className="section-editorial-heading">
            Let's build something <span className="text-gradient-highlight">meaningful.</span>
          </h2>
          <p className="section-editorial-sub">
            Have an idea, opportunity, or project in mind? Let's connect.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="contact-dual-grid">
          {/* Left Column: Direct channels & Quick Action Buttons */}
          <div className="contact-channels-column">
            <div className="contact-primary-card">
              <span className="contact-card-eyebrow">DIRECT REACH</span>
              <h3 className="contact-card-title">Initiate a conversation</h3>
              <p className="contact-card-desc">
                Whether you're exploring candidate pipelines for an engineering role, seeking an AI collaborator, or want to discuss a system design idea, I'd love to hear from you.
              </p>

              {/* Email highlight with copy button */}
              <div className="email-copy-bar" data-cursor="COPY">
                <div className="email-copy-left">
                  <Mail size={18} className="email-bar-icon" />
                  <span className="email-bar-address">{personalInfo.email}</span>
                </div>
                <button
                  type="button"
                  className={"email-copy-action " + (isCopied ? "copied" : "")}
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                >
                  {isCopied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{isCopied ? "Copied!" : "Copy"}</span>
                </button>
              </div>

              {/* Direct Details List */}
              <div className="contact-meta-list">
                <div className="meta-list-item">
                  <Phone size={15} className="item-icon" />
                  <a href={"tel:" + personalInfo.phone.replace(/\\s/g, "")} className="item-link">
                    {personalInfo.phone}
                  </a>
                </div>

                <div className="meta-list-item">
                  <MapPin size={15} className="item-icon" />
                  <span className="item-text">{personalInfo.location}</span>
                </div>
              </div>

              {/* 3 Primary Action Buttons: EMAIL ME, LINKEDIN, GITHUB */}
              <div className="contact-fast-buttons-row">
                <a
                  href={"mailto:" + personalInfo.email}
                  className="contact-btn-action primary"
                  data-cursor="EMAIL"
                >
                  <Mail size={15} />
                  <span>EMAIL ME</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn-action secondary"
                  data-cursor="LINKEDIN"
                >
                  <LinkedinIcon size={15} />
                  <span>LINKEDIN</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn-action secondary"
                  data-cursor="GITHUB"
                >
                  <GithubIcon size={15} />
                  <span>GITHUB</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Contact Form */}
          <div className="contact-form-column">
            <form className="contact-minimal-form" onSubmit={handleSubmit} noValidate>
              <div className="form-topbar">
                <span className="form-status-tag">SEND A DIRECT MESSAGE</span>
                <Sparkles size={14} className="form-sparkle" />
              </div>

              {/* Name Field */}
              <div className="form-field-group">
                <label htmlFor="contact-name" className="field-label">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className="field-input"
                  placeholder="e.g. Maya Chen"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-cursor="TYPE"
                />
              </div>

              {/* Email Field */}
              <div className="form-field-group">
                <label htmlFor="contact-email" className="field-label">
                  Your Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="field-input"
                  placeholder="e.g. maya@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-cursor="TYPE"
                />
              </div>

              {/* Message Field */}
              <div className="form-field-group">
                <label htmlFor="contact-message" className="field-label">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  className="field-textarea"
                  rows={4}
                  placeholder="Describe your project, opening, or what you'd like to collaborate on..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  data-cursor="TYPE"
                />
              </div>

              {/* Form Notifications */}
              {submitStatus === "success" && (
                <div className="form-alert-banner success">
                  <CheckCircle2 size={16} />
                  <span>Opening your mail client to send message...</span>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="form-alert-banner error">
                  <span>Please fill out all fields before sending.</span>
                </div>
              )}

              {/* Send Button */}
              <button
                type="submit"
                className="form-submit-button"
                data-cursor="SEND"
              >
                <span>Send Message</span>
                <ArrowUpRight size={16} className="btn-send-arrow" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
