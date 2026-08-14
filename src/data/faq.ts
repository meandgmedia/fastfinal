// -----------------------------------------------------------------------
// Homepage FAQ content. Keep the visible copy and the FAQPage schema
// sourced from this single array so they never go out of sync.
// -----------------------------------------------------------------------

export type FaqItem = {
  question: string;
  answer: string;
};

export const HOMEPAGE_FAQS: FaqItem[] = [
  {
    question: "What is final expense insurance?",
    answer:
      "Final expense insurance is a type of permanent life insurance designed to help cover end-of-life costs, such as funeral, burial, or cremation expenses. It typically offers a smaller coverage amount than traditional life insurance and is aimed at making the application process simple.",
  },
  {
    question: "How much does final expense insurance cost?",
    answer:
      "Cost varies based on factors like your age, gender, health, tobacco use, and the coverage amount you choose. Because pricing differs by carrier and applicant, the most accurate way to see your cost is to request a personalized quote.",
  },
  {
    question: "How much coverage do I need?",
    answer:
      "It depends on your goals. Many people choose an amount intended to cover funeral and burial costs, while others add coverage for outstanding bills or medical expenses. Comparing a few coverage amounts side by side can help you find an amount that fits your budget.",
  },
  {
    question: "Is final expense insurance the same as burial insurance?",
    answer:
      "The terms are often used interchangeably. Both generally describe smaller, permanent life insurance policies intended to help cover funeral, burial, cremation, or other end-of-life expenses.",
  },
  {
    question: "Do I need a medical exam?",
    answer:
      "Many final expense insurance products are simplified issue or guaranteed issue, meaning a medical exam typically isn't required. Depending on the product and carrier, you may still need to answer some health questions.",
  },
  {
    question: "Can I get final expense insurance if I have health problems?",
    answer:
      "Possibly. Some final expense insurance products are designed for applicants with health conditions that might make traditional life insurance harder to qualify for. Eligibility and pricing depend on the specific product, carrier, and your answers to any health questions asked.",
  },
  {
    question: "How quickly can I get coverage?",
    answer:
      "Some applicants may be able to complete the process online and receive a coverage decision quickly, depending on eligibility, the product selected, and the issuing carrier's underwriting. Timelines vary and are not guaranteed for every applicant.",
  },
  {
    question: "Can I apply online?",
    answer:
      "Yes. You can request a quote, compare your available options, and complete an application online. If you'd rather talk to someone, contact information is available on our Contact page.",
  },
  {
    question: "What happens after I apply?",
    answer:
      "After you submit your application, the issuing carrier reviews it according to their underwriting guidelines. Depending on the product and your answers, you may receive a decision quickly or the carrier may follow up for additional information.",
  },
];
