import React from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-solidity";
import "prismjs/themes/prism-tomorrow.css"; // Import a Prism theme for styling
import { IconChecklist, IconPaperclip, IconSend } from "@tabler/icons-react";

interface CustomCodeEditorProps {
  contract: string;
  setContract: React.Dispatch<React.SetStateAction<string>>;
  analyze: () => Promise<void>;
}

const highlightWithPrism = (code: string) => {
  return Prism.highlight(code, Prism.languages.solidity, "solidity");
};

// Utility function to check if the contract contains the required SPDX license and pragma directive
const isValidSolidityContract = (code: string) => {
  const SPDXRegex = /\/\/\s*SPDX-License-Identifier:\s*[^\s]+/;
  const pragmaRegex = /pragma\s+solidity\s+[^;]+;/;
  return SPDXRegex.test(code) && pragmaRegex.test(code);
};

const CustomCodeEditor: React.FC<CustomCodeEditorProps> = ({
  contract,
  setContract,
  analyze,
}) => {
  const handleAnalyze = () => {
    if (!isValidSolidityContract(contract)) {
      alert(
        "The provided code does not appear to be a valid Solidity smart contract. Make sure it starts with the SPDX license identifier and the 'pragma' directive."
      );
      return;
    }
    analyze();
  };

  return (
    <div className="relative lg:w-4/6 w-full mx-auto">
      <div
        className="border outline-none border-r-2  border-gray-300 rounded-2xl p-6 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200"
        style={{ height: "450px", overflowY: "auto" }}
      >
        <Editor
          value={contract}
          onValueChange={(code) => setContract(code)}
          highlight={(code) => highlightWithPrism(code)}
          padding={15}
          textareaId="code-editor"
          className="textarea-editor"
          textareaClassName="outline-none "
          style={{
            fontFamily: ' "Fira Mono", monospace',
            fontSize: 17,
            minHeight: "100%",
            background: "transparent",
            color: "inherit",
          }}
        />
      </div>

      <div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-white dark:bg-neutral-900">
        <div className="flex justify-between items-center pb-3">
          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:text-blue-500"
            >
              <IconPaperclip />
            </button>
          </div>

          <div className="flex cursor-pointer items-center gap-x-1">
            <button
              onClick={handleAnalyze}
              type="button"
              className="flex flex-row items-center space-x-2 px-6 py-1.5 justify-center rounded-full text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span>Audit</span>
              <IconChecklist size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCodeEditor;
