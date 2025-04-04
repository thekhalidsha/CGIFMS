import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "Budget Planning & Preparation",
    content:
      "The process of estimating the state's financial needs, allocating resources, and preparing fiscal strategies to ensure economic stability in Chhattisgarh.",
  },
  {
    id: 2,
    title: "Budget Allocation/Distribution",
    content:
      "Dividing allocated funds across various government departments and initiatives in Chhattisgarh, ensuring efficient financial management and compliance.",
  },
  {
    id: 3,
    title: "Budget Execution Control",
    content:
      "Monitoring and regulating budget expenditures to prevent overspending and ensure adherence to approved financial plans.",
  },
  {
    id: 4,
    title: "Employee and Payroll Management",
    content:
      "Handling salary payments, benefits, and deductions for government employees while ensuring compliance with state financial regulations.",
  },
  {
    id: 5,
    title: "GPF Management",
    content:
      "Managing the General Provident Fund (GPF) for state government employees, including contributions, withdrawals, and settlements.",
  },
  {
    id: 6,
    title: "NPS Management",
    content:
      "Overseeing the National Pension System (NPS) for Chhattisgarh government employees, ensuring timely contributions and retirement fund management.",
  },
  {
    id: 7,
    title: "Bill Creation",
    content:
      "Generating and processing financial bills for government expenditures, vendor payments, and service procurements.",
  },
  {
    id: 8,
    title: "SNA Sparsh",
    content:
      "A digital platform facilitating seamless financial transactions and fund transfers between government accounts in Chhattisgarh.",
  },
  {
    id: 9,
    title: "Treasury Single Account (TSA)",
    content:
      "A unified structure for managing government cash resources to enhance transparency and reduce redundant banking arrangements.",
  },
  {
    id: 10,
    title: "Treasury Management",
    content:
      "Supervising state treasury operations, ensuring smooth financial transactions, and maintaining liquidity for government projects.",
  },
  {
    id: 11,
    title: "Receipt Management",
    content:
      "Tracking and managing revenue inflows, including taxes, fees, and other state earnings.",
  },
  {
    id: 12,
    title: "Stock, Stamp and Strong Room Management",
    content:
      "Handling the storage and distribution of government bonds, legal stamps, and high-value assets.",
  },
  {
    id: 13,
    title: "Accounting & Reconciliation",
    content:
      "Ensuring accurate financial record-keeping, verifying transactions, and reconciling government accounts.",
  },
  {
    id: 14,
    title: "e-Accounts Submission to AG",
    content:
      "Digital submission of government financial statements to the Accountant General (AG) for auditing and compliance.",
  },
  {
    id: 15,
    title: "Dashboards/ MIS/ Reports",
    content:
      "Providing analytical insights through Management Information Systems (MIS) to track financial performance and aid decision-making.",
  },
];

const MasterDetailView = () => {
  const [selectedItem, setSelectedItem] = useState(data[0]);

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-full">
      <div className="md:w-1/3 w-full bg-gray-100 dark:bg-gray-900 border-r dark:border-gray-700 md:h-full overflow-y-auto max-h-60 md:max-h-full custom_scrollbar">
        <ul className="divide-y divide-gray-200 dark:divide-gray-800">
          {data.map((item) => (
            <li
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`p-4 cursor-pointer hover:bg-blue-500 hover:text-white transition 
            ${selectedItem.id === item.id ? "bg-blue-500 text-white" : ""}`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 p-4 bg-gray-300 dark:bg-gray-900 border-2 rounded-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          {selectedItem.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          {selectedItem.content}
        </p>
      </div>
    </div>
  );
};

export default MasterDetailView;
