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
    question: "Is Florida Final Expense Insurance available outside Florida?",
    answer:
      "No. We're currently licensed to offer final expense insurance in Florida only, so our quotes and application process are available to Florida residents at this time.",
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

export const FINAL_EXPENSE_PAGE_FAQS: FaqItem[] = [
  {
    question: "Is this available if I live outside Florida?",
    answer:
      "Not currently. We're licensed to offer final expense insurance in Florida only, so this coverage is available to Florida residents at this time.",
  },
  {
    question: "What's the difference between simplified issue and guaranteed issue final expense insurance?",
    answer:
      "Simplified issue policies ask a short list of health questions and don't require a medical exam — pricing and eligibility depend on your answers. Guaranteed issue policies don't ask health questions at all, but they often cost more per dollar of coverage and may include a graded death benefit for the first two to three years.",
  },
  {
    question: "What is a graded death benefit?",
    answer:
      "A graded death benefit is a feature on some guaranteed issue policies where the full coverage amount isn't payable if death occurs from natural causes within the first two to three years of the policy. Instead, beneficiaries typically receive a return of premiums paid, often with interest. Accidental death is usually covered at the full amount from day one.",
  },
  {
    question: "Is final expense insurance permanent coverage?",
    answer:
      "Yes. Final expense insurance is typically a form of permanent (whole) life insurance, meaning coverage doesn't expire as long as premiums are paid, and premiums are generally designed to stay level over time.",
  },
  {
    question: "Can I have more than one final expense policy?",
    answer:
      "In many cases, yes — some people choose to layer smaller policies from different carriers rather than one larger policy. Whether this makes sense depends on your goals and eligibility, and it's worth comparing options before deciding.",
  },
  {
    question: "What happens if I stop paying premiums?",
    answer:
      "Requirements vary by carrier and policy. Missing payments can result in a grace period, and continued non-payment can lead to the policy lapsing. Review your specific policy documents once issued for exact terms.",
  },
];

export const BURIAL_INSURANCE_PAGE_FAQS: FaqItem[] = [
  {
    question: "Do you offer burial insurance outside Florida?",
    answer:
      "Not at this time. We're licensed to offer burial insurance in Florida only, so this coverage is available to Florida residents.",
  },
  {
    question: "Is burial insurance the same thing as final expense insurance?",
    answer:
      "Generally, yes — \"burial insurance\" and \"final expense insurance\" are commonly used to describe the same type of small, permanent life insurance policy intended to help cover funeral and burial-related costs.",
  },
  {
    question: "Does burial insurance cover cremation as well as burial?",
    answer:
      "Typically, yes. Burial insurance proceeds are usually paid to your beneficiary as a lump sum, which they can use for cremation, burial, or any other final expenses — the policy doesn't restrict how the money is spent.",
  },
  {
    question: "Can beneficiaries use burial insurance money for something other than the funeral?",
    answer:
      "In most cases, yes. Because burial insurance pays a death benefit directly to your named beneficiary rather than to a funeral home, they can generally use the funds however they see fit, including on outstanding bills or medical expenses.",
  },
  {
    question: "How is burial insurance different from a prepaid funeral plan?",
    answer:
      "A prepaid funeral plan is typically purchased directly through a funeral home for specific services, while burial insurance is a life insurance policy that pays cash to your beneficiary, who then decides how to use it. Burial insurance generally offers more flexibility.",
  },
  {
    question: "What coverage amounts are typical for burial insurance?",
    answer:
      "Many applicants choose coverage amounts intended to cover average funeral and burial costs, though the right amount depends on your circumstances. Comparing a few coverage amounts can help you find one that fits your budget.",
  },
];

export const SENIOR_LIFE_PAGE_FAQS: FaqItem[] = [
  {
    question: "Is this available to seniors outside Florida?",
    answer:
      "Not currently. We're licensed to offer these products in Florida only, so they're available to Florida residents at this time.",
  },
  {
    question: "Is there an age limit for life insurance for seniors?",
    answer:
      "Age limits vary by product and carrier. Some final expense and guaranteed issue products are available to applicants well into their 80s, while traditional term life insurance often has lower maximum issue ages. Comparing products is the best way to see what's available at your age.",
  },
  {
    question: "Can seniors get life insurance with pre-existing health conditions?",
    answer:
      "Often, yes. Guaranteed issue and some simplified issue products are specifically designed for applicants who may not qualify for traditional, fully underwritten life insurance due to health history.",
  },
  {
    question: "What's the difference between term life and permanent life insurance for seniors?",
    answer:
      "Term life insurance covers a set period (such as 10 or 20 years) and generally costs less initially, but coverage ends when the term expires. Permanent life insurance, including final expense policies, is designed to last for life as long as premiums are paid.",
  },
  {
    question: "How much life insurance do seniors typically need?",
    answer:
      "It depends on the goal. Some seniors want enough to cover funeral and burial costs specifically, while others want additional coverage to leave behind for family, outstanding debts, or medical bills. There's no single right answer — it comes down to your personal goals and budget.",
  },
  {
    question: "Do seniors need a medical exam to qualify?",
    answer:
      "Not always. Many products aimed at seniors — including simplified issue and guaranteed issue final expense policies — don't require a medical exam, though some ask health questions or have waiting periods.",
  },
];
