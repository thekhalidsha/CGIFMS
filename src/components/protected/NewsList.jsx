import React from "react";

const newsData = [
  "RBI launches pilot for digital rupee in Chhattisgarh.",
  "Microfinance institutions see 12% growth in Raipur.",
  "Startup funding in Chhattisgarh fintech hits ₹50Cr.",
  "New NBFC branch opens in Bilaspur, boosting credit.",
  "Government scheme disburses loans to 1.2 lakh farmers.",
  "CG startup builds mobile banking app for rural areas.",
  "Insurance awareness campaign launched in Durg district.",
  "Chhattisgarh Finance Dept introduces blockchain auditing.",
  "Interest subsidy for SHGs in tribal zones announced.",
  "Paytm opens regional hub in Naya Raipur."
];

const VerticalAutoScrollList = () => {
  const items = [...newsData, ...newsData]; // Duplicate for infinite scroll illusion

  return (
    <div className="relative w-full mx-auto h-full md:h-[430px] overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md">
      <div className="scroll-wrapper">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {items.map((item, index) => (
            <li
              key={index}
              className="px-4 py-3 text-sm sm:text-base text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VerticalAutoScrollList;
