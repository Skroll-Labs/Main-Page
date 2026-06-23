"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { WebGLShaderBackground } from "@/components/ui/WebGLShaderBackground";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";

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
    } catch (err) {
      setServerError("Failed to submit form. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative py-section-gap pb-4 overflow-hidden bg-[#1A1A1A]">
      <div className="absolute inset-0 w-full h-full opacity-50 z-0">
        <WebGLShaderBackground />
      </div>

      <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto fade-up visible">
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">Ready to Simplify Your Ticketing?</h2>
        <p className="font-body-lg text-body-lg text-white/70 max-w-2xl mx-auto mb-10">
          Join the event organizers who've ditched spreadsheets for a platform that just works.
        </p>

        <div className="bg-surface/10 backdrop-blur-md p-8 rounded-3xl max-w-2xl mx-auto text-left border border-white/10">
          {success ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-brand-coral rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-headline-md text-2xl md:text-headline-md text-white mb-4">Message Sent!</h3>
              <p className="font-body-md text-body-md text-white/70">
                We've received your inquiry and will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {serverError && (
                <div className="bg-error/20 text-white p-4 rounded-xl border border-error/50">
                  {serverError}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-lg text-label-lg text-white/70 mb-2 uppercase">Full Name</label>
                  <input
                    {...register("fullName")}
                    className="w-full bg-surface/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-coral transition-colors"
                    placeholder="Jane Doe"
                  />
                  {errors.fullName && <p className="text-brand-coral text-sm mt-1">{errors.fullName.message}</p>}
                </div>

                <div>
                  <label className="block font-label-lg text-label-lg text-white/70 mb-2 uppercase">Work Email</label>
                  <input
                    {...register("workEmail")}
                    className="w-full bg-surface/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-coral transition-colors"
                    placeholder="jane@company.com"
                  />
                  {errors.workEmail && <p className="text-brand-coral text-sm mt-1">{errors.workEmail.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-lg text-label-lg text-white/70 mb-2 uppercase">Company / Event Name</label>
                  <input
                    {...register("companyName")}
                    className="w-full bg-surface/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-coral transition-colors"
                    placeholder="Acme Corp"
                  />
                  {errors.companyName && <p className="text-brand-coral text-sm mt-1">{errors.companyName.message}</p>}
                </div>

                <div>
                  <label className="block font-label-lg text-label-lg text-white/70 mb-2 uppercase">I am a...</label>
                  <select
                    {...register("audienceType")}
                    className="w-full bg-surface/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-coral transition-colors appearance-none"
                  >
                    <option value="" className="text-black">Select Audience Type</option>
                    <option value="Event Organizer" className="text-black">Event Organizer</option>
                    <option value="Marketing Team" className="text-black">Marketing Team</option>
                    <option value="Ops Team" className="text-black">Ops Team</option>
                    <option value="Enterprise" className="text-black">Enterprise</option>
                  </select>
                  {errors.audienceType && <p className="text-brand-coral text-sm mt-1">{errors.audienceType.message}</p>}
                </div>
              </div>

              <div>
                <label className="block font-label-lg text-label-lg text-white/70 mb-2 uppercase">Message (Optional)</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full bg-surface/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-coral transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                <Button variant="primary" type="submit" disabled={isSubmitting} className="w-full md:w-auto px-10">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <div className="flex items-center gap-6">
                  <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="font-button-text text-white/70 hover:text-white transition-colors cursor-hover flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                  <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`} className="font-button-text text-white/70 hover:text-white transition-colors cursor-hover flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call Us
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
