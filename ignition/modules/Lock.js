const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
// exporiting smart contract address
module.exports = buildModule("AuditAI", (m) => {
  const AuditAI = m.contract("AuditAI");

  return { AuditAI };
});
