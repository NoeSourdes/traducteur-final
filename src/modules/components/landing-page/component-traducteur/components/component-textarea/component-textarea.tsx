import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Buttons } from "@/modules/components/landing-page/component-traducteur/components/component-select/components/buttons/buttons";

interface Props {
  handleTextarea?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleCopy: () => void;
  content?: string;
}
export const ComponentTextarea = ({
  handleTextarea,
  handleCopy,
  content,
}: Props) => {
  return (
    <div className="relative">
      <Textarea
        defaultValue={content}
        onChange={handleTextarea}
        className="max-h-[600px] min-h-[250px]"
        placeholder="Tape ton text ici..."
      />
      <div className="absolute bottom-3 right-3">
        <Buttons handleCopy={handleCopy} />
      </div>
    </div>
  );
};
