"use client";

import { useEffect, useRef } from "react";
import Icon from "./Icon";
import Button from "./Button";

export default function Modal({ title, onClose, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog.contains(document.activeElement)) dialog.focus();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-ink/60 p-4"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className="w-full max-w-md rounded-3xl bg-bone p-6 outline-none"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold">{title}</h2>
          <Button variant="ghost" size="icon" aria-label="Close" onClick={onClose}>
            <Icon name="close" className="h-4 w-4" />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
}
