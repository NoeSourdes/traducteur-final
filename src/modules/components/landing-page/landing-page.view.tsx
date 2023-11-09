// noinspection JSIgnoredPromiseFromCall

import React, { useEffect, useMemo, useState } from "react";
import { Traducteur } from "@/modules/components/landing-page/component-traducteur/traducteur";
import { Upgrade } from "@/modules/components/landing-page/component-upgrade/upgrade";
import MorseCodeDecoder from "@/lib/morse-to-text";
import TextToMorse from "@/lib/text-to-morse";

export const LandingPageView = () => {
  const [content, setContent] = useState("");
  const [display, setDisplay] = useState(false);
  const [displayLoader, setDisplayLoader] = useState(true);
  const [messageAi, setMessageAi] = useState("");
  const [messageAiTranslate, setMessageAiTranslate] = useState("");
  const [langue1, setLangue1] = useState<string>("");
  const [langue2, setLangue2] = useState<string>("");
  const [contentTextareaTranslate, setContentTextareaTranslate] =
    useState<string>("");

  useEffect(() => {
    setMessageAi(messageAi);
  }, [messageAi]);

  useEffect(() => {
    setMessageAiTranslate(messageAiTranslate);
  }, [messageAiTranslate]);

  useEffect(() => {
    if (messageAi.length > 1) {
      handleTranslateMessage(messageAi);
    }
  }, [langue1]);

  useEffect(() => {
    if (messageAi.length > 1) {
      handleTranslateMessage(messageAi);
    }
  }, [langue2]);

  const handleContent = (value: string) => {
    setContent(value);
  };

  const handleUpgradeGetApiKey = async () => {
    setDisplayLoader(false);
    setDisplay(false);
    const sentence = content;
    const message = `transforme moi ce texte en mieux, voici le texte : "${sentence}"`;
    const resultAPI = await handleUpgrade(message);
    if (
      resultAPI &&
      resultAPI.data &&
      resultAPI.data.choices &&
      resultAPI.data.choices[0] &&
      resultAPI.data.choices[0].message
    ) {
      setMessageAi(resultAPI.data.choices[0].message.content);
      await handleTranslateMessage(resultAPI.data.choices[0].message.content);
      handleDisplay();
    } else {
      console.log("Could not get AI message from response.");
    }
  };

  const handleDisplay = () => {
    setDisplayLoader(true);
    setDisplay(true);
  };

  const handleTranslateMessage = async (message: string) => {
    if (langue1 === "MORSE" || langue2 === "MORSE") {
      if (langue1 === "MORSE") {
        setMessageAiTranslate(MorseCodeDecoder(message));
      } else if (langue2 === "MORSE") {
        setMessageAiTranslate(TextToMorse(message));
      }
    } else {
      fetch("/api/deepl", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: message,
          target_lang: langue2,
          source_lang: langue1,
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
            setMessageAiTranslate(translatedText);
          }
        });
    }
  };

  const handleUpgrade = async (content: string) => {
    let responseData = null;
    if (content !== "") {
      try {
        const response = await fetch("/api/open-ai", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messages: [{ role: "user", content }] }),
        });

        const data = await response.json();
        responseData = data;
      } catch (error) {
        console.log(error);
      }
    }
    return responseData;
  };
  return (
    <div>
      <Traducteur
        setContentTextareaTranslate={setContentTextareaTranslate}
        contentTextareaTranslate={contentTextareaTranslate}
        handleContent={handleContent}
        langue1={langue1}
        langue2={langue2}
        setLangue1={setLangue1}
        setLangue2={setLangue2}
      />
      <Upgrade
        displayLoader={displayLoader}
        display={display}
        contentTranslate={messageAiTranslate}
        content={messageAi}
        handleUpgrade={handleUpgradeGetApiKey}
      />
    </div>
  );
};
