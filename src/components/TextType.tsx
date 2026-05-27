import { useState, useEffect, useMemo } from "react";

interface TextTypeProps {
  text?: string[];
  texts?: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  deletingSpeed?: number;
  cursorBlinkDuration?: number;
}

export default function TextType({
  text,
  texts,
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "_",
  deletingSpeed = 50,
  cursorBlinkDuration = 0.5,
}: TextTypeProps) {
  
  // FIX 1: Wrap phraseArray in useMemo so its reference stays identical across renders
  const phraseArray = useMemo(() => {
    return text || texts || ["Hello"];
  }, [text, texts]);
  
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // FIX 2: Use window.setTimeout instead of NodeJS.Timeout to clear TypeScript namespace conflicts
    let timer: number; 
    const currentPhrase = phraseArray[currentPhraseIndex];

    if (!isDeleting) {
      if (displayedText.length < currentPhrase.length) {
        timer = window.setTimeout(() => {
          setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timer = window.setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      if (displayedText.length > 0) {
        timer = window.setTimeout(() => {
          setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        // FIX 3: Wrap state shifts in micro-timeouts to stop synchronous cascading render cycles
        timer = window.setTimeout(() => {
          setIsDeleting(false);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phraseArray.length);
        }, 0);
      }
    }

    return () => window.clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex, phraseArray, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
      <span>{displayedText}</span>
      
      {showCursor && (
        <span
          style={{
            marginLeft: '2px',
            animation: `blink ${cursorBlinkDuration}s infinite steps(2, start)`,
          }}
        >
          {cursorCharacter}
        </span>
      )}

      <style>{`
        @keyframes blink {
          to { visibility: hidden; }
        }
      `}</style>
    </div>
  );
}