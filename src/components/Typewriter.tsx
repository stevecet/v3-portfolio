import { useState, useEffect } from 'react';

export function Typewriter({ strings, typeSpeed = 50, backSpeed = 30, backDelay = 1500, loop = true }: {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  loop?: boolean;
}) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentString = strings[currentStringIndex];

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        if (!loop && currentStringIndex === strings.length - 1) return;
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentString.substring(0, currentText.length - 1));
        }, backSpeed);
      }
    } else {
      if (currentText === currentString) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, backDelay);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentString.substring(0, currentText.length + 1));
        }, typeSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentStringIndex, strings, typeSpeed, backSpeed, backDelay, loop]);

  return (
    <>
      {currentText}
      <span className="animate-pulse border-r-2 border-foreground ml-1 inline-block h-[1em] translate-y-[0.1em]" />
    </>
  );
}
