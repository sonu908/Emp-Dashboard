import { IoHome } from "react-icons/io5";
import { BsPersonFill } from "react-icons/bs";
import group from "../assets/Group.png";
import moptro from "../assets/moptro.png";
import Productivity from "./Productivity";
import Employees from "./Employees";
import { useState } from "react";

function Dashboard() {
  const [activeButton, setActiveButton] = useState("button1");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <>
      <div className=" h-screen">
        <div className="navbar bg-base-100 flex justify-end">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={group} />
          </div>
        </div>

        <div className="w-11/12 m-auto">
          <div className="bg-base-100 flex justify-center ">
            <div>
              {" "}
              <div className="indicator">
                <span className="indicator-item badge badge-secondary bg-[#5E5E5EB5] border-0 shadow-xl text-[#36A546]">
                  5
                </span>
                <div className="gridplace-items-center">
                  <img alt="headerimage" src={moptro} className=" h-[70px]" />
                </div>{" "}
              </div>
            </div>
          </div>

          {/* */}
          {activeButton === "button1" && (
            <div className="mt-[39px]">
              <Productivity />
            </div>
          )}
          {activeButton === "button2" && (
            <div className="mt-[39px]">
              <Employees />
            </div>
          )}
        </div>
        <footer className="flex  footer items-center p-4 text-neutral-content fixed bottom-0 w-full rounded-xl bg-my-custom-color">
          <div className="w-[50%] flex justify-center">
            <button className="text-3xl">
              <IoHome />
            </button>
          </div>
          <div className="w-[50%] flex justify-center">
            <button className="text-3xl">
              <BsPersonFill />
            </button>
          </div>
        </footer>
        <footer className="flex  footer items-center p-4 text-neutral-content fixed bottom-0 w-full rounded-xl bg-my-custom-color">
          <div className="w-[50%] flex justify-center">
            <button
              className="text-3xl hover:text-lime-600 transition-all"
              onClick={() => handleButtonClick("button1")}
            >
              <IoHome />
            </button>
          </div>
          <div className="w-[50%] flex justify-center">
            <button
              className="text-3xl  hover:text-lime-600 transition-all"
              onClick={() => handleButtonClick("button2")}
            >
              <BsPersonFill />
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Dashboard;
