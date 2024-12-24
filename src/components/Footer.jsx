import { useState } from 'react'
import { CarTaxiFrontIcon as Taxi, ExternalLink, HelpCircle } from 'lucide-react'


export default function Footer() {
  const [vcardUrl] = useState('https://vcards.intyom.com/marlonbrasil')

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(vcardUrl)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className=" flex items-center justify-center  p-6">
      <div className="w-full max-w-md p-6 relative overflow-hidden">
        
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-semibold text-white">Create Your VCard</h1>
            
        </div>

        <div className="relative mb-4 border-b border-t border-yellow-400  ">
           
          <input
            value={vcardUrl}
            readOnly
            className="bg-zinc-900/50 border-zinc-700 text-zinc-300 pr-24 px-4 py-3 rounded-lg text-lg"
          />
          <button 
            onClick={copyToClipboard}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-200"
          >
            <ExternalLink className="w-4 h-4" />
          </button>
       
        </div>
        
     
       <div className='mx-16 mt-8'>
        <button 
          className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-500 whitespace-nowrap"
        >
          Add to Contact
        </button>
        </div>
      </div>
    </div>
  )
}

