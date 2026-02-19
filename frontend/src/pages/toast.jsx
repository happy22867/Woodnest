import React, { useState, useEffect } from "react";

// ── Toast Component ──────────────────────────────────────────
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 3500);
    return () => clearTimeout(t);
  }, [onClose]);
  
  const isSuccess = type === "success";

  return (
    <div style={{
      position: "fixed",
      top: 24,
      right: 24,
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 20px",
      borderRadius: 14,
      background: isSuccess ? "rgba(30,80,40,0.92)" : "rgba(80,20,20,0.92)",
      backdropFilter: "blur(12px)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
      color: "#fff",
      fontSize: 14,
      fontWeight: 500,
      maxWidth: 320,
      animation: "slideIn 0.3s ease",
    }}>
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* Icon */}
      <div style={{
        width: 28, height: 28, borderRadius: "50%",
        background: isSuccess ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.15)",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        {isSuccess
          ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        }
      </div>

      <span>{message}</span>

      {/* Close */}
      <button onClick={onClose} style={{
        marginLeft: "auto", background: "none", border: "none",
        color: "rgba(255,255,255,0.6)", cursor: "pointer", fontSize: 18, lineHeight: 1, padding: 0,
      }}>×</button>
    </div>
  );
};

// ── useToast hook ────────────────────────────────────────────
export const useToast = () => {
  const [toast, setToast] = useState(null);

  const show = (message, type = "error") => setToast({ message, type });
  const hide = () => setToast(null);

  const ToastUI = toast ? <Toast message={toast.message} type={toast.type} onClose={hide} /> : null;

  return { show, ToastUI };
};