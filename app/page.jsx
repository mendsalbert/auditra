"use client";

import { useState } from "react";
import Header from "@/components/header";
import ContractInput from "@/components/contract-input";
import ResultsModal from "@/components/result-modal";
import { analyzeContract } from "@/utils/ai-prompt";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [contract, setContract] = useState("");
  const [results, setResults] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const analyze = async () => {
    setIsModalOpen(true);
    await analyzeContract(contract, setResults, setLoading);
  };

  const fixIssues = async () => {
    // const suggestions = results.find(
    //   (r) => r.section === "Suggestions for Improvement"
    // ).details;
    // await fixIssues(contract, suggestions, setContract, setLoading);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-24">
      <Header />
      <ContractInput
        contract={contract}
        setContract={setContract}
        analyze={analyze}
      />
      <ResultsModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        loading={loading}
        results={results}
        fixIssues={fixIssues}
      />
    </main>
  );
}
