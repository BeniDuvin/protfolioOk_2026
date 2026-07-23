"use client";

import React, {
    useState,
    useCallback,
} from "react";
import { addToast } from "@heroui/react";

import { ContactFormData, ContactPageState } from "@/components/contact/types";
import { PageHeader } from "@/components/page-header";
import { ContactCard } from "@/components/contact/contact-card";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactMap } from "@/components/contact/contact-map";
import { useData, useUI } from "@/lib/i18n";

const ContactPage: React.FC = () => {
  const { contact, morphingTexts } = useData();
  const { contact: contactUI } = useUI();

  const [state, setState] = useState<ContactPageState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const handleSubmit = useCallback(
    async (formData: ContactFormData): Promise<void> => {
      setState((prev) => ({ ...prev, isSubmitting: true, error: null }));

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const data = await response.json().catch(() => ({}));
          const serverError =
            data.error || "Failed to send message. Please try again later.";
          const normalizedError =
            serverError === "Please enter a valid email address"
              ? "L'e-mail est erroné."
              : serverError === "All fields are required"
                ? "Tous les champs sont requis."
                : "Une erreur est survenue lors de l'envoi du message.";

          throw new Error(normalizedError);
        }

        setState((prev) => ({ ...prev, isSuccess: true }));
        addToast({
          title: contactUI.toast.successTitle,
          description: contactUI.toast.successBody,
          color: "success",
        });
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again later.";

        setState((prev) => ({ ...prev, error: errorMessage }));
        addToast({
          title: contactUI.toast.errorTitle,
          description: errorMessage,
          color: "danger",
        });
      } finally {
        setState((prev) => ({ ...prev, isSubmitting: false }));
      }
    },
    [contactUI.toast],
  );

  const handleReset = useCallback(() => {
    setState({
      isSubmitting: false,
      isSuccess: false,
      error: null,
    });
  }, []);

  return (
    <section className="py-20">
      <PageHeader texts={morphingTexts.contact} />
      <div className="container mx-auto px-4">
        <ContactCard heading={contact.heading}>
          <ContactMap src={contact.location.mapSrc} />
          <ContactForm
            isSubmitting={state.isSubmitting}
            isSuccess={state.isSuccess}
            onReset={handleReset}
            onSubmit={handleSubmit}
          />
        </ContactCard>

        {state.error && (
          <div className="mt-6 p-4 bg-danger-50 border border-danger-200 rounded-lg">
            <p className="text-danger-700 text-sm">{state.error}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactPage;