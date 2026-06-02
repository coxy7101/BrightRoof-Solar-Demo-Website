'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import Script from 'next/script'

export function VoiceflowWidget() {
  const [showBubble, setShowBubble] = useState(false)

  useEffect(() => {
    // Show proactive message bubble after 3 seconds
    const timer = setTimeout(() => {
      setShowBubble(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Script
        id="voiceflow-widget"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(d, t) {
              var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
              v.onload = function() {
                window.voiceflow.chat.load({
                  verify: { projectID: '6a1e7dbd230d270069c299c7' },
                  url: 'https://general-runtime.voiceflow.com',
                  versionID: 'production',
                  voice: {
                    url: "https://runtime-api.voiceflow.com"
                  }
                });
              }
              v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
            })(document, 'script');
          `,
        }}
      />

      {/* Voiceflow widget button size customization */}
      <style>{`
        .voiceflow-bubble {
          width: 70px !important;
          height: 70px !important;
        }
        
        .voiceflow-bubble button {
          width: 70px !important;
          height: 70px !important;
          border-radius: 50% !important;
        }

        .voiceflow-bubble button svg {
          width: 32px !important;
          height: 32px !important;
        }
      `}</style>

      {/* Proactive message bubble */}
      {showBubble && (
        <div className="fixed bottom-24 right-6 z-40 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="bg-amber-400 text-navy-dark rounded-lg shadow-lg p-4 pr-10 max-w-xs relative">
            <button
              onClick={() => setShowBubble(false)}
              className="absolute top-2 right-2 p-1 hover:bg-amber-500 rounded transition-colors"
              aria-label="Close message"
            >
              <X size={18} className="text-navy-dark" />
            </button>
            <p className="text-sm font-medium text-navy-dark leading-relaxed">
              👋 Find out if your home qualifies for solar — takes 2 minutes!
            </p>
          </div>
        </div>
      )}
    </>
  )
}
