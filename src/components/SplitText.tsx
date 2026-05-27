import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number; // In milliseconds
  duration?: number;
  splitType?: 'chars' | 'words';
  from?: { opacity: number; y: number };
  to?: { opacity: number; y: number };
  threshold?: number;
  rootMargin?: string;
  textAlign?: string;
  onLetterAnimationComplete?: () => void;
  showCallback?: boolean;
}

export default function SplitText({
  text,
  className = '',
  delay = 50,
  duration = 0.5,
  splitType = 'chars',
  from = { opacity: 0, y: 20 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '0px',
  onLetterAnimationComplete,
}: SplitTextProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Intersection Observer to trigger animation when text scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Runs animation only once
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  // Separate text by characters or full words
  const items = splitType === 'chars' ? text.split('') : text.split(' ');

  return (
    <div ref={ref} className={className} style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {items.map((item, index) => (
        <motion.span
          key={index}
          initial={from}
          animate={inView ? to : from}
          transition={{
            duration: duration,
            delay: (index * delay) / 1000, // Converts ms to seconds for Framer Motion
            ease: [0.215, 0.610, 0.355, 1.000], // Custom cubic-bezier matching smooth 'power3.out' behavior
          }}
          onAnimationComplete={() => {
            // Fires trigger callback when the final character finishes moving
            if (index === items.length - 1 && onLetterAnimationComplete) {
              onLetterAnimationComplete();
            }
          }}
          style={{
            display: 'inline-block',
            whiteSpace: 'pre', // Preserves spacing naturally between words
          }}
        >
          {item === ' ' ? '\u00A0' : item}
        </motion.span>
      ))}
    </div>
  );
}