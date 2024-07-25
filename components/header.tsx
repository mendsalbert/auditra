import { WavyBackground } from "@/components/ui/wavy-background";

export default function Header() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-20">
      <p className="text-4xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Auditra, AI Smart Contract Auditor
      </p>
      <p className="text-base md:text-2xl mt-4 text-white font-normal inter-var text-center">
        Leverage the power of AI to audit your smart contracts
      </p>
    </WavyBackground>
  );
}
