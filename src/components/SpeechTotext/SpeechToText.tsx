// components/SpeechToText.tsx
import { useEffect } from 'react';
import annyang from 'annyang';

interface SpeechToTextProps {
  onText: (text: string) => void;
}

const SpeechToText: React.FC<SpeechToTextProps> = ({ onText }) => {
  useEffect(() => {
    const annyangAny: any = annyang; // Declare annyang as any

    if (annyangAny) {
      let commands: { [key: string]: (text: string) => void } = {
        'capture *text': (text: string) => {
          onText(text);
        },
      };

      annyangAny.addCommands(commands);
      annyangAny.start();

      return () => {
        annyangAny.abort();
      };
    }
  }, [onText]);

  return null;
};

export default SpeechToText;
