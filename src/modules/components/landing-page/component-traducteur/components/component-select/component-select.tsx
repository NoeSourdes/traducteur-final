import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  handleLangue?: (value: string) => void;
  langue1?: string;
  langue2?: string;
}

export const SelectComponent = ({ handleLangue, langue1, langue2 }: Props) => {
  const languages = {
    MORSE: "****MORSE***",
    EN: "Anglais",
    DE: "Allemand",
    BG: "Bulgare",
    KO: "Coréen",
    DA: "Danois",
    SK: "Slovaque",
    ES: "Espagnol",
    ET: "Estonien",
    FI: "Finlandais",
    FR: "Français",
    EL: "Grec",
    HU: "Hongrois",
    ID: "Indonésien",
    IT: "Italien",
    JA: "Japonais",
    LV: "Letton",
    LT: "Lituanien",
    NB: "Norvégien",
    NL: "Néerlandais",
    PT: "Portugais",
    PL: "Polonais",
    RO: "Roumain",
    RU: "Russe",
    SL: "Slovène",
    SV: "Suédois",
    CS: "Tchèque",
    TR: "Turc",
    UK: "Ukrainien",
    ZH: "Chinois",
  };
  const languages2 = {
    EN: "Anglais",
    DE: "Allemand",
    BG: "Bulgare",
    DA: "Danois",
    SK: "Slovaque",
    ES: "Espagnol",
    ET: "Estonien",
    FI: "Finlandais",
    FR: "Français",
    EL: "Grec",
    HU: "Hongrois",
    ID: "Indonésien",
    IT: "Italien",
    LV: "Letton",
    LT: "Lituanien",
    NB: "Norvégien",
    NL: "Néerlandais",
    PT: "Portugais",
    PL: "Polonais",
    RO: "Roumain",
    RU: "Russe",
    SL: "Slovène",
    SV: "Suédois",
    CS: "Tchèque",
    TR: "Turc",
    UK: "Ukrainien",
  };

  return (
    <>
      {langue1 === "MORSE" ? (
        <div className="w-[200px] border rounded-[5px] px-2 py-1 h-[36px] flex items-center">
          <p className="text-[14px]">***Voici la traduction***</p>
        </div>
      ) : (
        <>
          {langue2 === "MORSE" ? (
            <Select
              onValueChange={(value: string) =>
                handleLangue ? handleLangue(value) : null
              }
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Selectionne la langue" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Langues</SelectLabel>
                  <ScrollArea className="h-72 w-48 rounded-md">
                    {Object.entries(languages2).map(([value, name]) => (
                      <SelectItem key={value} value={value}>
                        {name}
                      </SelectItem>
                    ))}
                  </ScrollArea>
                </SelectGroup>
              </SelectContent>
            </Select>
          ) : (
            <Select
              onValueChange={(value: string) =>
                handleLangue ? handleLangue(value) : null
              }
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Selectionne la langue" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Langues</SelectLabel>
                  <ScrollArea className="h-72 w-48 rounded-md">
                    {Object.entries(languages).map(([value, name]) => (
                      <SelectItem key={value} value={value}>
                        {name}
                      </SelectItem>
                    ))}
                  </ScrollArea>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        </>
      )}
    </>
  );
};
