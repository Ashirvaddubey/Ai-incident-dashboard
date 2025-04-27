import type { Incident } from "./types"

export const mockIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description:
      "Algorithm consistently favored certain demographics in job recommendations, leading to unequal opportunity distribution across different user groups. The bias was traced to training data imbalances.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z",
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description:
      "LLM provided incorrect safety procedure information when asked about emergency protocols in a chemical plant. This could have led to dangerous situations if the information had been followed in a real emergency.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z",
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description:
      "Chatbot inadvertently exposed non-sensitive user metadata in its responses. While no personally identifiable information was leaked, the incident revealed a potential vulnerability in the system's data handling.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z",
  },
  {
    id: 4,
    title: "Autonomous Vehicle Navigation Error",
    description:
      "AI navigation system misinterpreted road markings during heavy rain, causing the vehicle to briefly cross into the opposite lane. Safety systems caught the error and corrected course, but the incident highlights weather-related perception challenges.",
    severity: "High",
    reported_at: "2025-03-25T16:45:00Z",
  },
  {
    id: 5,
    title: "Content Moderation False Positives",
    description:
      "AI content moderation system incorrectly flagged educational medical content as inappropriate, blocking access to important health information for users. The system was overly sensitive to anatomical terminology.",
    severity: "Medium",
    reported_at: "2025-03-10T11:20:00Z",
  },
]
