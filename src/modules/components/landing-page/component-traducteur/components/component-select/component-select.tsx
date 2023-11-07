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

export const SelectComponent = () => {
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

  return (
    <Select>
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
  );
};
