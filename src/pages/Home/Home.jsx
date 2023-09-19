import React from "react";
import logo from '../../assets/logo.png';
import heroImg from '../../assets/heroImg.png';
import { ImCheckmark } from 'react-icons/im';
import { GiCheckMark } from 'react-icons/gi';
export const Home = () => {
    return <div className="bg-slate-900 overflow-x-hidden  min-h-[100vh]">
        <div className="flex items-center px-[20px] bg-slate-900 shadow-2xl justify-around">
            <a href="" >
                <h1 className="uppercase text-slate-50 font-bold text-[20px]">Canoe</h1>
                </a>
                <img className="max-w-[200px]" src={logo} alt="" />
        </div>

        <div className="pt-[100px] gap-[50px] pb-[50px] px-[20px] items-start grid grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col gap-1 items-center justify-center">
                <h1 className="md:text-[25px] text-center text-[20px] font-bold upperacse text-slate-50">Sustainable Projects for Sustainable Growt</h1>
                <img src={heroImg} alt="" />
            </div>
            <div className="lg:col-span-2 flex flex-col gap-[30px]">
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold text-slate-50  text-[12px] md:text-[15px] uppercase">Dedicatedtoserveour customers</h1>
                    <p className="text-slate-50 font-semibold  text-[12px] md:text-[15px]">
Canoe Development Holdings LLC, is a United States Limited Liability Company global enterprise
dedicated to the design, implementation and execution of small and large-scale projects in
emerging markets. In collaboration with local governments, private customers, local authorities
and a network of associated companies, Canoe puts at the disposal of its projects the knowhow,
experience and managerialskillsrequired for their successful completion.
Backed by a team of highly professional individuals and years of expertise in a variety of
turnkey projects, Canoe endeavors to provide innovative and integrated human-centered
solutions that preserve the diversity of the populations they assist</p>
                </div>
                <div className="flex flex-row gap-5">
                    <span className="w-[3px] text-slate-200 bg-slate-300  "></span>
                    <p className="text-slate-300 font-[400]  text-[12px] md:text-[15px]">
                    Canoe’s solutions are adapted to the particular and unique needs, resources and budget of each
population. It is our ability to face even the most insurmountable challenges that enables us to
excel in what we do and to make a real difference.
The company focuses on the followingmain areas:
  
                    </p>
                    </div>
                    <div>
                        <ul className="flex gap-1 flex-col items-start">
                       
                        <li className="flex flex-row gap-2 items-center">
                                <GiCheckMark className="text-slate-50 text-[20px]" />
                                <span className="text-slate-300 text-[15px] md:text-[18px] ">Airline Industr</span>
                        </li>
                        <li className="flex flex-row gap-2 items-center">
                                <GiCheckMark className="text-slate-50 text-[20px]" />
                                <span className="text-slate-300 text-[15px] md:text-[18px] ">Education and rural development Health</span>
                        </li>
                        <li className="flex flex-row gap-2 items-center">
                                <GiCheckMark className="text-slate-50 text-[20px]" />
                                <span className="text-slate-300 text-[15px] md:text-[18px] ">Agriculture and Commodities Industry</span>
                            </li>
                            <li className="flex flex-row gap-2 items-center">
                                <GiCheckMark className="text-slate-50 text-[20px]" />
                                <span className="text-slate-300 text-[15px] md:text-[18px] ">Information technologies</span>
                        </li>
                       
                      
                        <li className="flex flex-row gap-2 items-center">
                                <GiCheckMark className="text-slate-50 text-[20px]" />
                                <span className="text-slate-300 text-[15px] md:text-[18px] ">Waste Management</span>
                        </li>
                        <li className="flex flex-row gap-2 items-center">
                                <GiCheckMark className="text-slate-50 text-[20px]" />
                                <span className="text-slate-300 text-[15px] md:text-[18px] ">Renewable Energy (Solar)</span>
                        </li>
                        <li className="flex flex-row gap-2 items-center">
                                <GiCheckMark className="text-slate-50 text-[20px]" />
                                <span className="text-slate-300 text-[15px] md:text-[18px] ">Construction</span>
                        </li>
                       
                        
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2">
                    <p className="text-slate-50 font-bold text-[25px">20</p>
                    <span className="w-[2px] text-slate-200 bg-slate-400  "> </span>
                            <p className="text-slate-50 text-[15px] font-semibold capitalize md:text-[18px]"> years of experience</p>
                         </div>
                    <div className="flex flex-row gap-2">
                        <p className="text-slate-50 font-bold text-[25px">20</p>
                    <span className="w-[2px] text-slate-200 bg-slate-400  "> </span>
                            <p className="text-slate-50 text-[15px] font-semibold capitalize md:text-[18px]"> Country User in the World</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
}