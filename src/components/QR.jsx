
import { Download } from 'lucide-react'

export default function QRDisplay() {
  const handleDownload = () => {
    // In a real app, this would trigger the QR code download
    console.log('Download QR Code')
  }

  return (
    <div className=" items-center mt-36  p-6">
        <h1 className='text-xl font-bold mb-4 text-white'>QR Code</h1>
        
     <div className=" relative flex flex-col items-center gap-3 w-auto rounded-xl bg-zinc-800 border-zinc-700">
          <div className=" absolute -center-4 -top-4 ">
            <img
              src="./image/ride1.jpg"
              alt="Profile"
              className="rounded-2xl border border-white w-24 h-24 "
            />
          </div>
          
          
          <div className="bg-white p-4 rounded-lg mt-24">
            <img
              src="./image/download.png"
              alt="QR Code"
              className="w-[150px] h-[150px]"
            />
          </div>

          <div className='p-4'>
          <button
            onClick={handleDownload}
            className=" bg-amber-400 hover:bg-amber-500 text-black p-3 rounded-xl font-medium"
          >
            Download My QR Code
          </button>
          </div>
        </div>
      </div>
   
  )
}

