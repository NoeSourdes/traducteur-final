import React, { useEffect, useState, useMemo } from "react";
import { SelectComponent } from "@/modules/components/landing-page/component-traducteur/components/component-select/component-select";
import { ComponentTextarea } from "@/modules/components/landing-page/component-traducteur/components/component-textarea/component-textarea";
import { Buttons } from "@/modules/components/landing-page/component-traducteur/components/component-select/components/buttons/buttons";
import MorseCodeDecoder from "@/lib/morse-to-text";
import TextToMorse from "@/lib/text-to-morse";
import { toast } from "@/components/ui/use-toast";

export const Traducteur: React.FC = () => {
  const [langue1, setLangue1] = useState<string>("");
  const [langue2, setLangue2] = useState<string>("");
  const [contentTextarea, setContentTextarea] = useState<string>("");
  const [contentTextareaTranslate, setContentTextareaTranslate] =
    useState<string>("");
  const [verifieLangue1, setVerifieLangue1] = useState<boolean>(false);
  const [verifieLangue2, setVerifieLangue2] = useState<boolean>(false);

  const handleLangueChange = (
    value: string,
    setLangue: React.Dispatch<React.SetStateAction<string>>,
    setVerifieLangue: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setLangue(value);
    setVerifieLangue(false);
    if (value === "MORSE" || langue2 === "MORSE") {
      handleTranslate(contentTextarea);
    }
  };

  useEffect(() => {
    setLangue1(langue1);
    setVerifieLangue1(false);
    if (langue1 !== "MORSE" || langue2 !== "MORSE") {
      handleTranslate(contentTextarea);
    }
  }, [langue1]);

  useEffect(() => {
    setLangue2(langue2);
    setVerifieLangue2(false);
    if (langue1 !== "MORSE" || langue2 !== "MORSE") {
      handleTranslate(contentTextarea);
    }
  }, [langue2]);

  const handleTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (langue1 === "" || langue2 === "") {
      if (langue1 === "") {
        setVerifieLangue1(true);
      }
      if (langue2 === "") {
        setVerifieLangue2(true);
      }
    } else {
      const newText = event.target.value;
      handleTranslate(newText);
      setContentTextarea(newText);
    }
  };

  const handleTranslate = useMemo(
    () => (textToTranslate: string) => {
      if (langue1 === "MORSE") {
        setContentTextareaTranslate(MorseCodeDecoder(textToTranslate));
      } else if (langue2 === "MORSE") {
        setContentTextareaTranslate(TextToMorse(textToTranslate));
      } else {
        fetch("/api/deepl", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: textToTranslate, // The text you want to translate
            target_lang: langue2,
            source_lang: langue1, // The target language code, e.g., 'DE' for German
          }),
        })
          .then((res) => {
            if (res.status === 200) {
              return res.json();
            } else {
              console.error("Translation request failed");
            }
          })
          .then((data) => {
            if (data && data.translations && data.translations[0]) {
              const translatedText = data.translations[0].text;
              setContentTextareaTranslate(translatedText);
            }
          });
      }
    },
    [langue1, langue2],
  );

  const handleCopy = (textToCopy: string) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          toast({
            description: "Le texte est copié",
          });
        })
        .catch((err) => {
          console.error("Failed to copy text to clipboard: ", err);
        });
    } else {
      console.error("Clipboard API not available.");
    }
  };

  return (
    <div className="px-10 flex justify-center py-10">
      <div className="max-w-[1120px] space-x-10 flex justify-between w-full max-lg:flex-col max-lg:space-y-10 max-lg:space-x-0">
        <div className="lg:w-[45vw] space-y-3">
          <div className="space-y-3">
            <SelectComponent
              handleLangue={(value) =>
                handleLangueChange(value, setLangue1, setVerifieLangue1)
              }
              langue2={langue2}
            />
            {verifieLangue1 && (
              <p className="text-red-600 text-sm">
                Tu n&apos;as pas choisi de langue, je ne peux pas traduire !!
              </p>
            )}
          </div>
          <ComponentTextarea
            handleTextarea={handleTextarea}
            handleCopy={() => handleCopy(contentTextarea)}
          />
        </div>
        <div className="border"></div>
        <div className="lg:w-[40vw] space-y-3">
          <div className="space-y-3">
            <SelectComponent
              handleLangue={(value) =>
                handleLangueChange(value, setLangue2, setVerifieLangue2)
              }
              langue1={langue1}
            />
            {verifieLangue2 && (
              <p className="text-red-600 text-sm">
                Tu n&apos;as pas choisi de langue, je ne peux pas traduire !!
              </p>
            )}
          </div>
          <div className="relative border min-h-[250px] px-3 py-2 rounded-[10px]">
            <p className="text-sm">{contentTextareaTranslate}</p>
            <div className="absolute bottom-3 right-3">
              <Buttons
                handleCopy={() => handleCopy(contentTextareaTranslate)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
