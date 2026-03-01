"use client";

import { useState } from "react";
import { CheckCircle, Mail, Paperclip, Phone, Send } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  attachment: File | null;
};

type FormField = keyof FormState;
type FormErrors = Partial<Record<FormField, string>>;

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  attachment: null,
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function validate(values: FormState): FormErrors {
    const newErrors: FormErrors = {};

    if (!values.name.trim()) newErrors.name = "Name is required";

    if (!values.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Invalid email format";
    }

    if (values.phone && !/^[+0-9()\-\s]{7,}$/.test(values.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!values.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  }

  function updateField<K extends FormField>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
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
      setForm(INITIAL_FORM);
      setErrors({});
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <div className="bg-slate-50 rounded-2xl p-8 shadow-xl border border-slate-200">
      {status === "submitting" && (
        <div
          aria-hidden="true"
          className="w-full h-1 bg-blue-100 rounded mb-6 overflow-hidden"
        >
          <div className="h-full bg-blue-600 animate-pulse w-full" />
        </div>
      )}

      {status === "success" && (
        <div
          className="flex flex-col items-center justify-center py-12"
          role="status"
          aria-live="polite"
        >
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-6">
            <CheckCircle size={40} aria-hidden="true" className="text-white" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
          <p className="text-slate-600 text-center">
            Your message has been sent successfully. I&apos;ll get back to you
            soon!
          </p>
        </div>
      )}

      {status === "error" && (
        <p
          className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg"
          role="alert"
          aria-live="assertive"
        >
          {errorMessage}
        </p>
      )}

      {status !== "success" && (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid md:grid-cols-2 gap-6">
            <Field
              id="name"
              name="name"
              label="Your Name *"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={(value) => updateField("name", value)}
              error={errors.name}
              disabled={isSubmitting}
            />

            <Field
              id="email"
              name="email"
              label="Email Address *"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(value) => updateField("email", value)}
              error={errors.email}
              icon={<Mail className="w-4 h-4" />}
              disabled={isSubmitting}
            />

            <Field
              id="phone"
              name="phone"
              label="Phone Number"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(value) => updateField("phone", value)}
              error={errors.phone}
              icon={<Phone className="w-4 h-4" />}
              disabled={isSubmitting}
            />

            <Field
              id="company"
              name="company"
              label="Company"
              type="text"
              autoComplete="organization"
              value={form.company}
              onChange={(value) => updateField("company", value)}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-900 mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              disabled={isSubmitting}
              onChange={(e) => updateField("message", e.target.value)}
              rows={5}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="w-full border border-slate-200 bg-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
            />
            {errors.message && (
              <p
                id="message-error"
                className="text-red-500 text-xs mt-1"
                role="alert"
              >
                {errors.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="attachment"
              className="block text-sm font-medium text-[#334155] mb-2"
            >
              Attachment (Optional)
            </label>
            <label
              htmlFor="attachment"
              className="flex items-center gap-3 border border-dashed border-slate-300 rounded-lg px-4 py-3 cursor-pointer hover:bg-slate-50"
            >
              <Paperclip
                aria-hidden="true"
                className="w-4 h-4 text-slate-500"
              />
              <span className="text-sm text-slate-600">
                {form.attachment
                  ? form.attachment.name
                  : "Upload Job Description / RFP"}
              </span>
            </label>
            <input
              id="attachment"
              name="attachment"
              type="file"
              className="sr-only"
              disabled={isSubmitting}
              onChange={(e) =>
                updateField("attachment", e.target.files?.[0] || null)
              }
            />
          </div>

          <div className="flex flex-center justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex flex-center bg-blue-700 text-white text-center px-8 py-3 rounded-md shadow-md hover:shadow-lg text-base font-medium hover:bg-blue-800 transition"
            >
              <Send size={20} className="mr-2" aria-hidden="true" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

type FieldProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  type: React.HTMLInputTypeAttribute;
  autoComplete?: string;
  error?: string;
  icon?: React.ReactNode;
  disabled: boolean;
  onChange: (value: string) => void;
};

function Field({
  id,
  name,
  label,
  value,
  type,
  autoComplete,
  error,
  icon,
  disabled,
  onChange,
}: FieldProps) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-slate-900 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div
            className="absolute left-3 top-3 text-slate-500"
            aria-hidden="true"
          >
            {icon}
          </div>
        )}
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`w-full bg-white border rounded-lg py-3 focus:ring-2 focus:ring-blue-500 ${
            icon ? "pl-10 pr-4" : "px-4"
          }`}
        />
      </div>
      {error && (
        <p id={errorId} className="text-red-500 text-xs mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
