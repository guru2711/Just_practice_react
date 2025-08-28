// Modal.jsx
import Portal from "./Portal";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // don’t render if closed

  return (
    <Portal>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
        onClick={onClose} // close modal when backdrop is clicked
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "8px",
            minWidth: "300px",
          }}
          onClick={(e) => e.stopPropagation()} // prevent backdrop close
        >
          {children}
          <button
            style={{ marginTop: "10px", padding: "6px 12px" }}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </Portal>
  );
}
