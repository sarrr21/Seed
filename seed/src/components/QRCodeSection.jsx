import React from "react";

const QRCodeSection = () => {
  return (
    <section className="py-10 ">
      <h2 className="text-center text-3xl font-bold mb-6">QR Code</h2>
      <div className="text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="QR Code"
          className="mx-auto mb-4"
        />
        <button className="bg-yellow-500 p-2 rounded font-bold">
          Download My QR Code
        </button>
      </div>
    </section>
  );
};

export default QRCodeSection;
