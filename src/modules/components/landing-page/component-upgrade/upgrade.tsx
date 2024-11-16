import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Buttons } from "@/modules/components/landing-page/component-traducteur/components/component-select/components/buttons/buttons";
import { ComponentTextarea } from "@/modules/components/landing-page/component-traducteur/components/component-textarea/component-textarea";
import { SparkleIcon } from "lucide-react";
import { ClipLoader } from "react-spinners";

interface Props {
  handleUpgrade: () => void;
  contentTranslate: string;
  content: string;
  display: boolean;
  displayLoader: boolean;
}
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

export const Upgrade = ({
  handleUpgrade,
  contentTranslate,
  content,
  display,
  displayLoader,
}: Props) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Button onClick={handleUpgrade} className="mb-10">
          Améliore ton texte <SparkleIcon className="ml-3" size={20} />
        </Button>
      </div>
      <div className="flex justify-center items-center">
        {displayLoader ? (
          ""
        ) : (
          <ClipLoader
            color="#BDBDBD"
            className="mb-10"
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
      </div>
      {!display ? (
        ""
      ) : (
        <div className="px-10 flex justify-center pb-10">
          <div className="max-w-[1120px] space-x-10 flex justify-between w-full max-lg:flex-col max-lg:space-y-10 max-lg:space-x-0">
            <div className="lg:w-[45vw] space-y-3">
              <ComponentTextarea
                content={content}
                handleCopy={() => handleCopy(content)}
              />
            </div>
            <div className="border"></div>
            <div className="lg:w-[40vw] space-y-3">
              <div className="relative border min-h-[250px] px-3 py-2 rounded-[10px]">
                <p className="text-sm">{contentTranslate}</p>
                <div className="absolute bottom-3 right-3">
                  <Buttons handleCopy={() => handleCopy(contentTranslate)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
