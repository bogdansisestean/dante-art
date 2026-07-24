"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

export default function AppointmentModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, open]);

  if (!open) return null;

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeModal = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="dante-modal" onMouseDown={closeModal}>
      <div
        className="dante-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="appointment-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="dante-modal__close"
          onClick={closeModal}
          aria-label="Închide fereastra"
        >
          ×
        </button>

        {submitted ? (
          <div className="dante-modal__success" role="status" aria-live="polite">
            <h2 id="appointment-title">Mulțumim!</h2>
            <p>
              Formularul a fost validat. Trimiterea va deveni disponibilă după conectarea la
              sistemul clinicii.
            </p>
            <button type="button" onClick={closeModal}>
              Închide
            </button>
          </div>
        ) : (
          <form className="dante-modal__appointment-form" onSubmit={submitForm}>
            <h2 id="appointment-title">Programați o vizită</h2>
            <div className="dante-modal__fields">
              <label>
                <span className="sr-only">Nume și prenume</span>
                <input
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Nume/Prenume *"
                />
              </label>
              <label className="dante-modal__phone">
                <span className="sr-only">Număr de telefon</span>
                <select name="countryCode" defaultValue="+40" aria-label="Prefix telefonic">
                  <option value="+40">+40</option>
                  <option value="+373">+373</option>
                  <option value="+36">+36</option>
                </select>
                <input
                  name="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  placeholder="123 456 78"
                />
              </label>
            </div>
            <p className="dante-modal__privacy">
              Prin folosirea acestui formular sunteți de acord cu stocarea și folosirea datelor
              introduse.
            </p>
            <button type="submit" className="dante-modal__submit">
              Trimite cererea
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
