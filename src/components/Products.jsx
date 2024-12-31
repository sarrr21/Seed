import React, { useState } from "react";
import { Car, X } from "lucide-react";

export default function Products() {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [isQRDialogOpen, setIsQRDialogOpen] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const paymentMethods = [
    { id: "telebirr", name: "Telebirr", qrUrl: "./image/download.png" },
    { id: "cbe", name: "CBE", qrUrl: "./image/download.png" },
    { id: "zemen", name: "Zemen", qrUrl: "./image/download.png" },
  ];

  const handleSelectProduct = (productId) => {
    setSelectedProductId((prevSelectedId) =>
      prevSelectedId === productId ? null : productId
    );
  };

  const openPaymentDialog = () => {
    if (!selectedProductId) return;
    setIsPaymentDialogOpen(true);
  };

  const closePaymentDialog = () => {
    setIsPaymentDialogOpen(false);
  };

  const handleOpenQRDialog = (method) => {
    setSelectedPaymentMethod(method);
    setIsPaymentDialogOpen(false);
    setIsQRDialogOpen(true);
  };

  const handleCloseQRDialog = () => {
    setIsQRDialogOpen(false);
  };

  return (
    <section className="p-6 text-white">
      <h2 className="text-xl font-bold mt-6 mb-4">Products</h2>

      <div className="space-y-4">
        <div
          onClick={() => handleSelectProduct(1)}
          className={`
            flex items-center justify-between p-4 border-2 border-white border-dashed rounded-lg 
            cursor-pointer transition-colors 
            hover:bg-white/10
            ${selectedProductId === 1 ? "bg-white/10 border-yellow-400" : ""}
          `}
        >
          <div className="flex items-center gap-3">
            <Car className="text-yellow-400" />
            <div>
              <h3 className="font-bold">Cabby Regular</h3>
              <p className="text-sm text-gray-400">4 Passenger</p>
            </div>
          </div>
          <span className="text-yellow-400">$25.00</span>
        </div>

        <div
          onClick={() => handleSelectProduct(2)}
          className={`
            flex items-center justify-between p-4 border-2 border-white border-dashed rounded-lg 
            cursor-pointer transition-colors 
            hover:bg-white/10
            ${selectedProductId === 2 ? "bg-white/10 border-yellow-400" : ""}
          `}
        >
          <div className="flex items-center gap-3">
            <Car className="text-yellow-400" />
            <div>
              <h3 className="font-bold">Cabby XL</h3>
              <p className="text-sm text-gray-400">6 Passenger</p>
            </div>
          </div>
          <span className="text-yellow-400">$35.00</span>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={openPaymentDialog}
          disabled={!selectedProductId}
          className={`
            px-4 py-2 border-2 border-dashed rounded-lg w-full h-14
            font-semibold text-yellow-400 transition-colors
            hover:bg-yellow-400 hover:text-black
            ${
              !selectedProductId
                ? "border-gray-400 text-gray-400 cursor-not-allowed hover:bg-transparent hover:text-gray-400"
                : "border-yellow-400"
            }
          `}
        >
          Proceed to Payment
        </button>
      </div>

      {isPaymentDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative bg-[#1a1a1a] text-white rounded-md p-6 w-full max-w-xs">
            <button
              onClick={closePaymentDialog}
              className="absolute top-3 right-3 text-gray-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold mb-4 text-center">
              Choose Payment Method
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => handleOpenQRDialog(method)}
                  className="border-2 border-white border-dashed rounded-lg p-3 
                             text-center hover:bg-white/10 transition-colors"
                >
                  {method.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {isQRDialogOpen && selectedPaymentMethod && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative bg-[#1a1a1a] text-white rounded-md p-6 w-full max-w-xs">
            <button
              onClick={handleCloseQRDialog}
              className="absolute top-3 right-3 text-gray-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-center mb-4">
              {selectedPaymentMethod.name} QR
            </h3>
            <div className="flex justify-center mb-4">
              <img
                src={selectedPaymentMethod.qrUrl}
                alt={`${selectedPaymentMethod.name} QR Code`}
                className="w-40 h-40 object-contain"
              />
            </div>
            <p className="text-center  text-gray-300">
              Scan $ complete payment 
            </p>
            <h1 className="text-xl text-center"><span className="text-yellow-400 text-2xl font-bold">Account:</span> 1000525667521</h1>
          </div>
        </div>
      )}
    </section>
  );
}
