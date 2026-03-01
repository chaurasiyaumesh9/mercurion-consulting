"use client";

import { useState } from "react";
import { Mail, Phone, Paperclip, Send } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    attachment: null as File | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  /* ================= VALIDATION ================= */

  function validate() {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email format";

    if (form.phone && !/^[+0-9()\-\s]{7,}$/.test(form.phone))
      newErrors.phone = "Invalid phone number";

    if (!form.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  }

  function updateField(field: string, value: any) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  /* ================= SUBMIT ================= */

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      // 🔥 Build FormData FROM STATE (not DOM)
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("company", form.company);
      formData.append("message", form.message);

      if (form.attachment) {
        formData.append("attachment", form.attachment);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");

      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        attachment: null,
      });
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  const isSubmitting = status === "submitting";

  /* ================= UI ================= */

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
      {/* Progress */}
      {status === "submitting" && (
        <div className="w-full h-1 bg-blue-100 rounded mb-6 overflow-hidden">
          <div className="h-full bg-blue-600 animate-pulse w-full" />
        </div>
      )}

      {/* Success */}
      {status === "success" && (
        <div className="mb-6 p-4 bg-green-50 text-green-700">
          ✅ Your message has been sent successfully. I'll get back to you soon!
        </div>
      )}

      {/* Error */}
      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 text-red-700">❌ {errorMessage}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-900 mb-2"
            >
              Your Name *
            </label>
            <Field
              value={form.name}
              id="name"
              name="name"
              onChange={(v: string) => updateField("name", v)}
              error={errors.name}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-900 mb-2"
            >
              Email Address *
            </label>
            <Field
              value={form.email}
              onChange={(v: string) => updateField("email", v)}
              error={errors.email}
              icon={<Mail className="w-4 h-4" />}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label
              htmlFor="phone*"
              className="block text-sm font-medium text-slate-900 mb-2"
            >
              Phone Number
            </label>
            <Field
              value={form.phone}
              onChange={(v: string) => updateField("phone", v)}
              error={errors.phone}
              icon={<Phone className="w-4 h-4" />}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-slate-900 mb-2"
            >
              Company
            </label>
            <Field
              value={form.company}
              onChange={(v: string) => updateField("company", v)}
              disabled={isSubmitting}
            />
          </div>
        </div>
        <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-900 mb-2"
            >
              Message *
            </label>
            <textarea
              value={form.message}
              disabled={isSubmitting}
              onChange={(e) => updateField("message", e.target.value)}
              rows={5}
              className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        {/* Attachment */}{" "}
        <div>
          {" "}
          <label className="block text-sm font-medium text-[#334155] mb-2">
            {" "}
            Attachment (Optional){" "}
          </label>{" "}
          <label className="flex items-center gap-3 border border-dashed border-slate-300 rounded-lg px-4 py-3 cursor-pointer hover:bg-slate-50">
            {" "}
            <Paperclip className="w-4 h-4 text-slate-500" />{" "}
            <span className="text-sm text-slate-600">
              {" "}
              {form.attachment
                ? form.attachment.name
                : "Upload Job Description / RFP"}{" "}
            </span>{" "}
            <input
              name="attachment"
              type="file"
              className="hidden"
              disabled={isSubmitting}
              onChange={(e) =>
                updateField("attachment", e.target.files?.[0] || null)
              }
            />{" "}
          </label>{" "}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white px-6 py-4 rounded-xl font-medium hover:bg-blue-600 transition-all hover:scale-105 flex items-center justify-center shadow-lg"
        >
          <Send size={20} className="mr-2" /> {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

/* FIELD */
function Field({ label, value, onChange, error, icon, disabled }: any) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <div className="relative">
        {icon && <div className="absolute left-3 top-3">{icon}</div>}
        <input
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border rounded-lg px-4 py-3"
        />
      </div>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}
