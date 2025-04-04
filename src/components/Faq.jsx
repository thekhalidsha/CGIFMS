import React, { useState } from "react";
import Container from "./shared/Container";
import MainCard from "./shared/MainCard";
import { PlusCircle, MinusCircle } from "lucide-react";

const faqs = [
  {
    question: "What is the role of the Finance Department in Chhattisgarh?",
    answer:
      "The Finance Department of Chhattisgarh is responsible for preparing the state budget, managing public finances, overseeing revenue collection, monitoring expenditures, and implementing fiscal policies. It ensures that funds are used efficiently and transparently across government departments.",
  },
  {
    question: "How is the annual state budget of Chhattisgarh prepared?",
    answer:
      "The State Budget is prepared by the Finance Department after consulting all departments. It includes receipts, expenditures, allocations, and priorities for the upcoming financial year. The budget is presented by the Finance Minister in the Legislative Assembly.",
  },
  {
    question: "What are the main sources of revenue for Chhattisgarh?",
    answer: (
      <>
        Chhattisgarh earns revenue from:
        <li>State taxes (like VAT, Excise, and Motor Vehicle Tax)</li>
        <li>Non-tax revenues (like royalties from minerals, fees)</li>
        <li>Grants from the Central Government,</li>
        <li>Loans and borrowings for development projects.</li>
      </>
    ),
  },
  {
    question:
      "Who manages the pension schemes for government employees in Chhattisgarh?",
    answer:
      "The Directorate of Pension under the Finance Department handles pension disbursement for retired government employees. It ensures timely release of pensions and manages schemes like Old Age Pension, Widow Pension, and Disability Pension under both state and central plans.",
  },
  {
    question:
      "What is the Inspectorate of Treasuries and Accounts in Chhattisgarh?",
    answer:
      "This department oversees the management of treasuries, audit of expenditures, and ensures accounting transparency in all financial transactions. It plays a vital role in enforcing fiscal discipline across state offices.",
  },
  {
    question: "What are government societies and how are they funded?",
    answer:
      "Government societies in Chhattisgarh are autonomous bodies formed to implement specific schemes (like education, health, skill development). They are mostly funded by the state budget, central schemes, or external agencies (World Bank, etc.).",
  },
  {
    question: "What is the Public Financial Management System (PFMS)?",
    answer:
      "PFMS is a real-time online system that monitors fund flow from the Government of India to implementing agencies, including those in Chhattisgarh. It improves transparency and ensures timely payments.",
  },
  {
    question:
      "Are there any reforms to improve financial efficiency in Chhattisgarh?",
    answer: (
      <>
        Yes. Chhattisgarh has adopted reforms like:
        <li>Digital payments for subsidies</li>
        <li>E-procurement</li>
        <li>Real-time monitoring of schemes</li>
        <li>
          Audit automation These reduce corruption, delays, and improve citizen
          services.
        </li>
      </>
    ),
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Container id={"faq"}>
      <MainCard>
        <div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
          <h2
            className="text-3xl leading-9 font-extrabold text-center"
            data-aos="fade-down"
          >
            Frequently asked questions
          </h2>

          <div className="mt-6 border-t-2  pt-10">
            <div className="flex flex-col md:flex-row md:flex-wrap md:-mx-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={index} className="md:w-1/2 md:px-4 mb-6">
                    <details
                      open={isOpen}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleAccordion(index);
                      }}
                      data-aos={index % 2 === 0 ? "slide-left" : "slide-right"}
                      className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow transition-all duration-300"
                    >
                      <summary
                        className={`flex items-center justify-between p-6 cursor-pointer list-none ${
                          isOpen ? "border-b" : null
                        }`}
                      >
                        <h5 className="text-lg font-medium text-gray-900 dark:text-white">
                          {faq.question}
                        </h5>
                        <span className="ml-2 w-6 h-6 flex-shrink-0 relative">
                          <PlusCircle
                            className={`absolute inset-0 w-6 h-6 text-gray-600 dark:text-gray-300 transition-opacity duration-200 ${
                              isOpen ? "opacity-0" : "opacity-100"
                            }`}
                          />
                          <MinusCircle
                            className={`absolute inset-0 w-6 h-6 text-gray-600 dark:text-gray-300 transition-opacity duration-200 ${
                              isOpen ? "opacity-100" : "opacity-0"
                            }`}
                          />
                        </span>
                      </summary>

                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out will-change-[max-height] ${
                          isOpen
                            ? "max-h-[500px] pt-4 px-6 pb-6"
                            : "max-h-0 px-6"
                        }`}
                      >
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </MainCard>
    </Container>
  );
};

export default Faq;
