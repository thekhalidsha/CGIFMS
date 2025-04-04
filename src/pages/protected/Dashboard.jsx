import React from "react";
import Container from "../../components/shared/Container";
import DashboardLayout from "../../components/protected/DashboardLayout.jsx";
import MainCard from "../../components/shared/MainCard.jsx";
import { Building, Landmark, School, Users } from "lucide-react";
import MasterDetailView from "../../components/protected/MasterDetail.jsx";
import VerticalAutoScrollList from "../../components/protected/NewsList.jsx";

const Dashboard = () => {
  const DashMenu = [
    {
      icon: <Landmark className="h-12" />,
      title: "Administrative Departments",
      value: "70",
    },
    {
      icon: <Building className="h-12" />,
      title: "HODs",
      value: "142",
    },
    {
      icon: <School className="h-12" />,
      title: "DDOs",
      value: "10410",
    },
    {
      icon: <Users className="h-12" />,
      title: "Total Employees",
      value: "413281",
    },
  ];
  return (
    <DashboardLayout>
      <MainCard className={'my-5'}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {DashMenu.map((menuItem, index) => {
            return (
              <div key={index} className="flex items-center border dark:border-2 rounded-xl overflow-hidden shadow dark:bg-gray-900">
                <div className="p-4 bg-blue-500">{menuItem.icon}</div>
                <div className="px-4 ">
                  <h3 className="text-sm tracking-wider">{menuItem.title}</h3>
                  <p className="text-2xl max-md:text-lg">{menuItem.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </MainCard>
      <MainCard className={"p-0"}>
        <main className="flex-1 p-4">
          {/* <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 bg-indigo-100 border border-indigo-200 rounded-xl p-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl text-blue-900">
                Welcome <br />
                <strong>Dash</strong>
              </h2>
              <span className="inline-block mt-8 px-8 py-2 rounded-full text-xl font-bold text-white bg-indigo-800">
                01:51
              </span>
            </div>

            <div className="flex-1 bg-blue-100 border border-blue-200 rounded-xl p-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl text-blue-900">
                Inbox <br />
                <strong>23</strong>
              </h2>
              <a
                href="#"
                className="inline-block mt-8 px-8 py-2 rounded-full text-xl font-bold text-white bg-blue-800 hover:bg-blue-900 transition-transform duration-300 hover:scale-105"
              >
                See messages
              </a>
            </div>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-slide-up">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-500 mb-2">
                Latest News
              </h3>
              <div className="h-[430px] overflow-hidden rounded-lg">
                <VerticalAutoScrollList />
              </div>
            </div>

            <div className="col-span-2 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-slide-up">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-500 mb-2">
                Module List
              </h3>

              <div className="h-auto md:h-[430px] overflow-hidden rounded-lg">
                <MasterDetailView />
              </div>
            </div>
          </div>
        </main>
      </MainCard>
      {/* <MainCard></MainCard> */}
    </DashboardLayout>
  );
};

export default Dashboard;
