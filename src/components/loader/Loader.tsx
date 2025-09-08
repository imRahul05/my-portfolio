import { useState, useEffect } from 'react'

export default function TerminalLoader() {
  const [currentStep, setCurrentStep] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  const steps = [
    { text: 'npm run dev', delay: 30 },
    { text: '', delay: 50 },
    { text: '> my-portfolio@1.0.0 dev', delay: 10 },
    { text: '> vite', delay: 10 },
    { text: '', delay: 50 },
    { text: 'Local:   http://localhost:5173/', delay: 15 },
    // { text: 'Network: use --host to expose', delay: 15 },
  ]

  useEffect(() => {
    if (currentStep >= steps.length) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev)
      }, 500)
      return () => clearInterval(cursorInterval)
    }

    const step = steps[currentStep]
    let charIndex = 0

    const typeText = () => {
      if (charIndex <= step.text.length) {
        setCurrentText(step.text.slice(0, charIndex))
        charIndex++
        setTimeout(typeText, step.delay)
      } else {
        setTimeout(() => {
          setCurrentStep(prev => prev + 1)
          setCurrentText('')
        }, 300)
      }
    }

    typeText()
  }, [currentStep])

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Dotted background pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #9ca3af 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Terminal container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 shadow-lg max-w-2xl w-full">
          
          {/* Terminal header (macOS style) */}
          <div className="flex items-center space-x-2 px-4 py-2 border-b border-gray-200 bg-gray-100 rounded-t-lg">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-gray-800 space-y-2">
            {/* Command prompt */}
            {currentStep >= 0 && (
              <div className="flex items-center">
                <span className="text-gray-600 mr-2">$</span>
                <span>{currentStep === 0 ? currentText : 'npm run dev'}</span>
                {currentStep === 0 && showCursor && <span className="animate-pulse">_</span>}
              </div>
            )}
            
            {/* Output lines */}
            {currentStep >= 2 && (
              <div className="text-gray-700">
                {currentStep === 2 ? currentText : '> my-portfolio@1.0.0 dev'}
              </div>
            )}
            
            {currentStep >= 3 && (
              <div className="text-gray-700">
                {currentStep === 3 ? currentText : '> vite'}
              </div>
            )}
            
            {currentStep >= 5 && (
              <div className="text-green-600 mt-4">
                {currentStep === 5 ? currentText : 'Local:   http://localhost:5173/'}
              </div>
            )}
            
            {currentStep >= 6 && (
              <div className="text-blue-600">
                {currentStep === 6 ? currentText : 'Network: use --host to expose'}
              </div>
            )}
            
            {/* Final cursor */}
            {currentStep >= steps.length && (
              <div className="flex items-center mt-4">
                <span className="text-gray-600 mr-2">$</span>
                {showCursor && <span className="bg-gray-800 text-white px-1">_</span>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
