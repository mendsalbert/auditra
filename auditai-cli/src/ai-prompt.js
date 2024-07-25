const OpenAI = require("openai");

const analyzeContract = async (contract, apiKey) => {
  const openai = new OpenAI({
    apiKey: apiKey,
  });

  const params = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Your role and goal is to be an AI Smart Contract Auditor. Your job is to perform an audit on the given smart contract. Here is the smart contract: ${contract}.
        Please provide the results in the following array format for easy front-end display:
        [
          {
            "section": "Audit Report",
            "details": "A detailed audit report of the smart contract, covering security, performance, and any other relevant aspects."
          },
          {
            "section": "Metric Scores",
            "details": [
              {
                "metric": "Security",
                "score": 0-10
              },
              {
                "metric": "Performance",
                "score": 0-10
              },
              {
                "metric": "Other Key Areas",
                "score": 0-10
              },
              {
                "metric": "Gas Efficiency",
                "score": 0-10
              },
              {
                "metric": "Code Quality",
                "score": 0-10
              },
              {
                "metric": "Documentation",
                "score": 0-10
              }
            ]
          },
          {
            "section": "Suggestions for Improvement",
            "details": "Suggestions for improving the smart contract in terms of security, performance, and any other identified weaknesses."
          }
        ]
        Thank you.`,
      },
    ],
  };

  const chatCompletion = await openai.chat.completions.create(params);

  const auditResults = JSON.parse(chatCompletion.choices[0].message.content);

  console.log("Audit Report:");
  console.log(auditResults.find((r) => r.section === "Audit Report").details);

  console.log("\nMetric Scores:");
  auditResults
    .find((r) => r.section === "Metric Scores")
    .details.forEach((metric) => {
      console.log(`${metric.metric}: ${metric.score}/10`);
    });

  console.log("\nSuggestions for Improvement:");
  console.log(
    auditResults.find((r) => r.section === "Suggestions for Improvement")
      .details
  );
};

module.exports = { analyzeContract };
