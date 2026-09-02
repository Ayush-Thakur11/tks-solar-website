"use client";

import { useState, useMemo } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const rooftopOptions = ["5 kW", "10 kW", "15 kW", "20 kW", "50 kW", "100 kW+", "Not Sure — Help Me Choose"];
const groundOptions = ["500 kW", "1 MW", "1.5 MW", "2 MW", "Custom Capacity", "Not Sure — Help Me Choose"];
const stateOptions = ["Punjab", "Himachal Pradesh", "Jammu & Kashmir", "Other"];

const initialErrors = {
  interest: "",
  capacity: "",
  city: "",
  state: "",
  fullName: "",
  phone: "",
  email: "",
};

const normalizePhone = (value: string) => {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 10) return `+91${digits}`;
  if (digits.length === 12 && digits.startsWith("91")) return `+${digits}`;
  if (value.trim().startsWith("+")) return value.trim();
  return value.trim();
};

type FormErrors = typeof initialErrors;

export default function StartProjectPage() {
  const [step, setStep] = useState(1);
  const [interest, setInterest] = useState<"Rooftop Solar" | "Ground-Mounted Solar" | "">("");
  const [capacity, setCapacity] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const capacityOptions = useMemo(
    () => (interest === "Ground-Mounted Solar" ? groundOptions : rooftopOptions),
    [interest],
  );

  const validateStep = () => {
    const nextErrors: FormErrors = { ...initialErrors };

    if (step === 1 && !interest) {
      nextErrors.interest = "Please select your project type.";
    }

    if (step === 2 && !capacity) {
      nextErrors.capacity = "Please choose a capacity.";
    }

    if (step === 3) {
      if (!city.trim()) nextErrors.city = "City is required.";
      if (!state.trim()) nextErrors.state = "Please select a state.";
    }

    if (step === 4) {
      if (!fullName.trim()) nextErrors.fullName = "Full name is required.";
      const trimmedPhone = phone.trim();
      if (!trimmedPhone) {
        nextErrors.phone = "Phone number is required.";
      } else {
        const normalizedPhone = normalizePhone(trimmedPhone);
        if (!/^(?:\+91)?[6-9]\d{9}$/.test(normalizedPhone.replace(/\s|-/g, ""))) {
          nextErrors.phone = "Please enter a valid Indian phone number.";
        }
      }
      if (!email.trim()) {
        nextErrors.email = "Email address is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        nextErrors.email = "Please enter a valid email address.";
      }
    }

    setErrors(nextErrors);
    return !Object.values(nextErrors).some(Boolean);
  };

  const handleNext = () => {
    if (!validateStep()) return;
    setStep((current) => Math.min(current + 1, 4));
  };

  const handleBack = () => {
    setStep((current) => Math.max(current - 1, 1));
    setErrors(initialErrors);
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;
    if (honeypot) return;
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const normalizedPhone = normalizePhone(phone.trim());
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          interest,
          capacity,
          city: city.trim(),
          state: state.trim(),
          fullName: fullName.trim(),
          phone: normalizedPhone,
          email: email.trim(),
          message: message.trim(),
          website: honeypot,
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(payload.error || "Submission failed");
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error && error.message ? error.message : "We couldn't send your request right now. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInterestSelect = (value: "Rooftop Solar" | "Ground-Mounted Solar") => {
    setInterest(value);
    setCapacity("");
    setErrors((current) => ({ ...current, interest: "" }));
  };

  const handleCapacitySelect = (value: string) => {
    setCapacity(value);
    setErrors((current) => ({ ...current, capacity: "" }));
    setStep(3);
  };

  return (
    <main className="bg-[#F7F7F4] text-[#081A2F] selection:bg-[#F5A900]/25">
      <SiteHeader />

      <section className="relative min-h-screen bg-[#F7F7F4] pt-32 pb-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#081A2F]/60 transition-colors hover:text-[#081A2F]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_35px_80px_rgba(0,0,0,0.08)] sm:p-10">
            <div className="border-b border-slate-200 pb-6 sm:pb-8">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#B8891C]">Consultation</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
                {submitted ? "Thank You!" : "Let's Plan Your Solar Project"}
              </h1>
            </div>

            <div className="mt-8">
              {submitted ? (
                <div className="space-y-5 py-8 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EDE7D7] text-5xl text-[#081A2F]">
                    ✓
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-[-0.05em]">Your request has been received.</h2>
                    <p className="mt-3 text-base text-slate-600">Our team will contact you shortly to discuss your project requirements.</p>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/"
                      className="inline-flex items-center justify-center rounded-full bg-[#F5A900] px-6 py-3 font-medium text-[#081A2F] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f8b62d]"
                    >
                      Return to Home
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-10 flex items-center gap-3">
                    {[1, 2, 3, 4].map((page) => (
                      <div key={page} className="flex flex-1 items-center gap-2">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-all duration-200 ${
                            step >= page ? "bg-[#081A2F] text-white shadow-[0_8px_20px_rgba(8,26,47,0.2)]" : "border border-slate-300 bg-white text-slate-500"
                          }`}
                        >
                          {page}
                        </div>
                        {page < 4 && <div className={`h-px flex-1 ${step > page ? "bg-[#081A2F]" : "bg-slate-300"}`} />}
                      </div>
                    ))}
                  </div>

                  {step === 1 && (
                    <div className="space-y-6">
                      <div>
                        <p className="mb-4 text-lg font-medium">Step 1: What are you interested in?</p>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {(["Rooftop Solar", "Ground-Mounted Solar"] as const).map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => handleInterestSelect(option)}
                              className={`rounded-2xl border px-4 py-4 text-left text-base font-medium transition-all duration-200 ${
                                interest === option
                                  ? "border-[#F5A900] bg-[#F8F0D8] text-[#081A2F] shadow-[0_12px_30px_rgba(245,169,0,0.15)]"
                                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                        {errors.interest && <p className="mt-2 text-sm text-red-600">{errors.interest}</p>}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <div>
                        <p className="mb-4 text-lg font-medium">Step 2: What approximate capacity are you considering?</p>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {capacityOptions.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => handleCapacitySelect(option)}
                              className={`rounded-2xl border px-4 py-4 text-left text-base font-medium transition-all duration-200 ${
                                capacity === option
                                  ? "border-[#F5A900] bg-[#F8F0D8] text-[#081A2F] shadow-[0_12px_30px_rgba(245,169,0,0.15)]"
                                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                        {errors.capacity && <p className="mt-2 text-sm text-red-600">{errors.capacity}</p>}
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <p className="text-lg font-medium">Step 3: Where is your project located?</p>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="city" className="mb-2 block text-sm font-medium text-slate-700">
                            City
                          </label>
                          <input
                            id="city"
                            value={city}
                            onChange={(event) => {
                              setCity(event.target.value);
                              setErrors((current) => ({ ...current, city: "" }));
                            }}
                            placeholder="Enter city"
                            aria-invalid={Boolean(errors.city)}
                            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base outline-none transition-all duration-200 focus:border-[#F5A900] focus:ring-4 focus:ring-[#F5A900]/10"
                          />
                          {errors.city && <p className="mt-2 text-sm text-red-600">{errors.city}</p>}
                        </div>
                        <div>
                          <label htmlFor="state" className="mb-2 block text-sm font-medium text-slate-700">
                            State
                          </label>
                          <select
                            id="state"
                            value={state}
                            onChange={(event) => {
                              setState(event.target.value);
                              setErrors((current) => ({ ...current, state: "" }));
                            }}
                            aria-invalid={Boolean(errors.state)}
                            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base outline-none transition-all duration-200 focus:border-[#F5A900] focus:ring-4 focus:ring-[#F5A900]/10"
                          >
                            <option value="">Select state</option>
                            {stateOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          {errors.state && <p className="mt-2 text-sm text-red-600">{errors.state}</p>}
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="space-y-6">
                      <input
                        type="text"
                        value={honeypot}
                        onChange={(event) => setHoneypot(event.target.value)}
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                      />
                      <p className="text-lg font-medium">Step 4: Almost there. Tell us about yourself.</p>
                      {submitError && (
                        <div aria-live="polite" className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                          {submitError}
                        </div>
                      )}
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-700">
                            Full Name
                          </label>
                          <input
                            id="fullName"
                            value={fullName}
                            onChange={(event) => {
                              setFullName(event.target.value);
                              setErrors((current) => ({ ...current, fullName: "" }));
                            }}
                            placeholder="Your name"
                            aria-invalid={Boolean(errors.fullName)}
                            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base outline-none transition-all duration-200 focus:border-[#F5A900] focus:ring-4 focus:ring-[#F5A900]/10"
                          />
                          {errors.fullName && <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>}
                        </div>
                        <div>
                          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            value={phone}
                            onChange={(event) => {
                              setPhone(event.target.value);
                              setErrors((current) => ({ ...current, phone: "" }));
                            }}
                            placeholder="+91"
                            aria-invalid={Boolean(errors.phone)}
                            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base outline-none transition-all duration-200 focus:border-[#F5A900] focus:ring-4 focus:ring-[#F5A900]/10"
                          />
                          {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
                        </div>
                        <div className="sm:col-span-2">
                          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                            Email Address
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(event) => {
                              setEmail(event.target.value);
                              setErrors((current) => ({ ...current, email: "" }));
                            }}
                            placeholder="your@email.com"
                            aria-invalid={Boolean(errors.email)}
                            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base outline-none transition-all duration-200 focus:border-[#F5A900] focus:ring-4 focus:ring-[#F5A900]/10"
                          />
                          {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                        </div>
                        <div className="sm:col-span-2">
                          <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                            Optional Message
                          </label>
                          <textarea
                            id="message"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            placeholder="Tell us more about your project..."
                            rows={4}
                            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base outline-none transition-all duration-200 focus:border-[#F5A900] focus:ring-4 focus:ring-[#F5A900]/10"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-10 flex items-center justify-between gap-3 border-t border-slate-200 pt-6">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
                      >
                        Back
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < 4 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="ml-auto rounded-full bg-[#081A2F] px-5 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        Continue
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="ml-auto rounded-full bg-[#F5A900] px-5 py-3 text-sm font-medium text-[#081A2F] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#f8b62d] disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {isSubmitting ? "Sending Your Request..." : "Request Consultation"}
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
