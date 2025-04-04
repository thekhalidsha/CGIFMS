import { BookText, Coins, HandCoins, IndianRupee, Landmark, Route, X } from "lucide-react";

export const moduleList = [
    {
        name: 'Budget Planning & Preparation',
        desc: 'Facilitates the systematic preparation of the budget at the root level and its submission and processing at the respective administrative departments.',
        icon: Coins,
    },
    {
        name: 'Budget Allocation & Distribution',
        desc: 'Facilitates the distribution of the approved budget at the beginning of the financial year, in order to provide spending authority to budgetary units in the amount allowed by the budget.',
        icon: Route,
    },
    {
        name: 'AA / FS',
        desc: 'Facilitates the preparation and submission of request for Administrative Approvals, Financial Sanctions.',
        icon: BookText,
    },
    {
        name: 'Accounting & Reconciliation',
        desc: 'Facilitates auto reconciliation of receipts and payments at Treasuries and Banks.',
        icon: Landmark,
    },
    {
        name: 'RIDF Loan Processing',
        desc: 'End to end loan management system that maintains information pertaining to Rural Infrastructure development funds provided by NABARD.',
        icon: IndianRupee,
    },
    {
        name: 'Debt Management',
        desc: 'Facilitates the monitoring of details of the Loans and Guarantees of the State Government.',
        icon: HandCoins,
    },

]