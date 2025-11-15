import { useState } from "react";
// https://www.youtube.com/watch?v=YEmdHbQBCSQ

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [offerAccepted, seOfferAccepted] = useState(false);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {offerAccepted ? (
          <p>Offer Accepted</p>
        ) : (
          <button onClick={() => setShowModal(true)}>Show Offer</button>
        )}
      </div>
      <div>
        {showModal && (
          <div
            onClick={() => {
              setShowModal(false);
            }}
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "gray",
              // height: "100vh",
              position: "fixed",
              // zIndex: 1000,
            }}
          >
            modal overlay
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: "white",
                width: 500,
                height: 300,
                borderRadius: "8px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <button
                style={{
                  position: "absolute", // ← Position relative to modal
                  top: 10, // ← 10px from top
                  right: 10,
                }}
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <p>Modal Body</p>
              <button
                onClick={() => {
                  setShowModal(false);
                  seOfferAccepted(true);
                }}
              >
                Accept Offer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
