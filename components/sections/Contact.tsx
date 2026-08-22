"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { WebGLShaderBackground } from "@/components/ui/WebGLShaderBackground";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (json.success) {
        setSuccess(true);
      } else {
        setServerError(json.error || "Something went wrong. Please try again.");
      }
    } catch {
      setServerError("Failed to submit inquiry. Please try again.");
    }
  };

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+94770000000";
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+94770000000";

  return (
    <section
      id="contact"
      className="relative py-16 md:py-section-gap pb-12 overflow-hidden bg-section-dark text-white"
    >
      <div className="absolute inset-0 w-full h-full opacity-50 z-0 pointer-events-none">
        <WebGLShaderBackground />
      </div>

      <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto fade-up visible">
        <SectionHeading
          title="Ready to Make It Better?"
          subtitle="Tell us what you're building, or what's breaking. We'll show you how Skroll can help."
          className="!mb-8 md:!mb-10"
          titleClassName="!text-white"
        />

        <div className="bg-surface/10 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl max-w-2xl mx-auto text-left border border-white/10 shadow-2xl">
          {success ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-brand-coral rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-headline-md text-2xl md:text-headline-md text-white mb-4">
                Message Sent!
              </h3>
              <p className="font-body-md text-body-md text-white/70 max-w-md mx-auto">
                We&apos;ve received your inquiry and will be in touch shortly to
                discuss your project.
              </p>
              <p className="font-headline-md text-sm text-brand-coral mt-6 tracking-wide">
                Let&apos;s make it better.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">
              {serverError && (
                <div className="bg-error/20 text-white p-4 rounded-xl border border-error/50 font-body-md text-sm">
                  {serverError}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label className="block font-label-lg text-xs uppercase tracking-wider text-white/70 mb-2">
                    Full Name
                  </label>
                  <input
                    {...register("fullName")}
                    className="w-full bg-surface/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-coral transition-colors font-body-md text-base md:text-sm min-h-[44px]"
                    placeholder="Jane Doe"
                  />
                  {errors.fullName && (
                    <p className="text-brand-coral text-xs mt-1.5 font-medium">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-label-lg text-xs uppercase tracking-wider text-white/70 mb-2">
                    Work Email
                  </label>
                  <input
                    {...register("workEmail")}
                    type="email"
                    className="w-full bg-surface/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-coral transition-colors font-body-md text-base md:text-sm min-h-[44px]"
                    placeholder="jane@company.com"
                  />
                  {errors.workEmail && (
                    <p className="text-brand-coral text-xs mt-1.5 font-medium">
                      {errors.workEmail.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label className="block font-label-lg text-xs uppercase tracking-wider text-white/70 mb-2">
                    Company / Organization Name
                  </label>
                  <input
                    {...register("companyName")}
                    className="w-full bg-surface/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-coral transition-colors font-body-md text-base md:text-sm min-h-[44px]"
                    placeholder="Acme Corp or Event Name"
                  />
                  {errors.companyName && (
                    <p className="text-brand-coral text-xs mt-1.5 font-medium">
                      {errors.companyName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-label-lg text-xs uppercase tracking-wider text-white/70 mb-2">
                    Project Interest
                  </label>
                  <select
                    {...register("projectType")}
                    className="w-full bg-[#1c1b1b] sm:bg-surface/5 border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-coral transition-colors text-base md:text-sm min-h-[44px]"
                  >
                    <option value="" className="bg-[#1c1b1b] text-white">
                      Select what we&apos;re making better
                    </option>
                    <option value="Event Ticketing & Check-in" className="bg-[#1c1b1b] text-white">
                      Event Ticketing &amp; Check-in
                    </option>
                    <option value="Business Systems & Automation" className="bg-[#1c1b1b] text-white">
                      Business Systems &amp; Automation
                    </option>
                    <option value="Both / Custom Project" className="bg-[#1c1b1b] text-white">
                      Both / Custom Project
                    </option>
                  </select>
                  {errors.projectType && (
                    <p className="text-brand-coral text-xs mt-1.5 font-medium">
                      {errors.projectType.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block font-label-lg text-xs uppercase tracking-wider text-white/70 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full bg-surface/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-coral transition-colors font-body-md text-base md:text-sm resize-none"
                  placeholder="Tell us about your event or operational bottleneck..."
                />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-2">
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto min-h-[48px] px-8 py-3.5 text-sm font-semibold rounded-full hover:shadow-hover-button transition-all"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>

                <div className="flex items-center justify-center gap-4 sm:gap-6 w-full md:w-auto">
                  <a
                    href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-button-text text-xs uppercase tracking-wider text-white/70 hover:text-brand-coral transition-colors cursor-hover flex items-center gap-2 min-h-[44px] px-3 py-2 rounded-xl hover:bg-white/5"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-brand-coral" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="font-button-text text-xs uppercase tracking-wider text-white/70 hover:text-brand-coral transition-colors cursor-hover flex items-center gap-2 min-h-[44px] px-3 py-2 rounded-xl hover:bg-white/5"
                  >
                    <Phone className="w-4 h-4 text-brand-coral" />
                    <span>Call Us</span>
                  </a>
                </div>
              </div>

              {/* Closing Hook */}
              <div className="pt-4 border-t border-white/10 text-center">
                <p className="font-display-lg text-xs md:text-sm text-white/40 tracking-wider">
                  Let&apos;s make it better.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

