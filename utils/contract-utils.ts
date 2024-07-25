// utils/contract-utils.ts

const keywords = [
  "pragma",
  "solidity",
  "contract",
  "function",
  "return",
  "if",
  "else",
  "for",
  "while",
  "do",
  "break",
  "continue",
  "switch",
  "case",
  "default",
  "throw",
  "returns",
  "event",
  "emit",
  "import",
  "from",
  "mapping",
  "struct",
  "enum",
  "modifier",
  "public",
  "private",
  "internal",
  "external",
  "constant",
  "immutable",
  "view",
  "pure",
  "payable",
  "new",
  "delete",
  "selfdestruct",
  "type",
  "constructor",
  "fallback",
  "receive",
  "interface",
  "library",
  "is",
  "using",
  "assembly",
];

const types = [
  "uint",
  "int",
  "address",
  "bool",
  "string",
  "bytes",
  "byte",
  "fixed",
  "ufixed",
  "uint8",
  "uint16",
  "uint32",
  "uint64",
  "uint128",
  "uint256",
  "int8",
  "int16",
  "int32",
  "int64",
  "int128",
  "int256",
  "address payable",
];

export const highlightSyntax = (code: string): string => {
  code = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

  keywords.forEach((keyword) => {
    const regex = new RegExp(`\\b${keyword}\\b`, "g");
    code = code.replace(regex, `<span class="keyword">${keyword}</span>`);
  });

  types.forEach((type) => {
    const regex = new RegExp(`\\b${type}\\b`, "g");
    code = code.replace(regex, `<span class="type">${type}</span>`);
  });

  return code;
};
