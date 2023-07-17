import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import NavbarComponent from '@/Components/Navbar';
import Nav from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Layaout from '@/Layouts/Layout';

const Home = (props) => {
    return (
        <>
            <Layaout props={props} auth={props.auth}>
                <div class="flex h-screen bg-gray-900 antialiased">
                    <div class="relative m-auto">
                        <div class="z-50 p-3 mt-10 max-w-xs w-xs grid grid-cols-1 cursor-default select-none rounded bg-gray-400 dark:bg-gray-900 shadow-lg">
                            <div class="font-semibold text-xl mb-2 ml-2 text-gray-900 dark:text-white">
                                Project Name
                            </div>
                            <div class="flex">
                                <button class="transform mouse-pointer bg-gray-900 text-sm text-white mx-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90   focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                                    Live
                                </button>
                                <button class="transform mouse-pointer bg-gray-900 text-sm text-white px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600  hover:scale-90 dark:focus:bg-gray-600 focus:outline-none">
                                    Code
                                </button>
                            </div>
                            <div class="my-2 mx-2 mr-5">
                                <p class="text-gray-900 text-sm">
                                    A brief description of what the project is
                                    and what it does and technologies used.
                                </p>
                            </div>
                            <div>
                                <div class="font-semibold text-l text-gray-900">
                                    Tech Stack:
                                </div>
                                <div>
                                    <span class="transform transition-all duration-150 inline-block bg-blue-400 bg-opacity-75 rounded px-1 py-1 text-xs font-thin text-blue-900  hover:shadow-sm  hover:scale-105">
                                        ReactJS
                                    </span>
                                    <span class="transform transition-all duration-150 inline-block bg-pink-400 bg-opacity-100 rounded px-1 py-1  text-xs font-thin text-pink-900  hover:shadow-sm  hover:scale-105">
                                        Tailwind
                                    </span>
                                    <span class="transform transition-all duration-150 inline-block bg-yellow-400  bg-opacity-75 rounded px-1 py-1  text-xs font-thin text-yellow-900 hover:shadow-sm  hover:scale-105">
                                        Javascript
                                    </span>
                                </div>
                            </div>
                        </div>
                        <img
                            class="absolute z-0 mx-72 -my-56 h-64 max-w-xs w-xl object-cover object-top hover:bg-opacity-50 transform hover:scale-125 border-gray-600 border border-opacity-50 rounded-xl shadow-lg transition-all duration-150"
                            src="https://camo.githubusercontent.com/78889a2ff752043bd00ea43b0dc9fb85b8818345e190b2af5ce4d4eff307db64/68747470733a2f2f692e696d6775722e636f6d2f645744334449522e6a7067"
                        ></img>
                    </div>
                </div>
            </Layaout>
        </>
    );
};
export default Home;
