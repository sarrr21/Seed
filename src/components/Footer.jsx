import { useState } from 'react';

export default function Footer() {
  const [vcardUrl] = useState('https://vcards.intyom.com/');

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(vcardUrl);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const shareLink = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'VCard Link',
          text: 'Check out this VCard:',
          url: vcardUrl,
        });
      } catch (err) {
        console.error('Error sharing: ', err);
      }
    } else {
      console.warn('Web Share API is not supported in this browser.');
      copyToClipboard();
      alert('Link copied to clipboard. Share it manually!');
    }
  };

  return (
    <div className="py-6 px-24 sm:py-8 sm:px-56 bg-[#403D3D]">
      <div className="flex justify-between items-center">
        <div>
          <img
            src="./image/seed.png"
            alt="SEED Logo"
            className="w-20 h-20 sm:w-36 sm:h-36"
          />
        </div>
        <div className="mt-2 space-y-4">
          <div
            onClick={shareLink}
            className="px-6 py-2 sm:px-8 sm:py-3 bg-yellow-500 text-black flex justify-center items-center rounded-full font-bold hover:bg-yellow-600 cursor-pointer"
          >
            <img src="./image/share.png" alt="Share" className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <div
            onClick={shareLink}
            className="px-6 py-2 sm:px-8 sm:py-3 bg-yellow-500 text-black flex justify-center items-center rounded-full font-bold hover:bg-yellow-600 cursor-pointer"
          >
            <img src="./image/down.png" alt="Download" className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
        </div>
      </div>
      <div className="border-t border-yellow-600 mt-6 sm:mt-8" />
      <p className="text-center text-sm sm:text-xl text-white font-semibold mt-4">
        Powered by S.E.E.D
      </p>
    </div>
  );
}
