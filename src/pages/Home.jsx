import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { BookOpen, Code2, GraduationCap } from "lucide-react";

const Home = () => {
    const location = useLocation().pathname;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-zinc-900 dark:to-zinc-950 !mt-10">
            <Navbar />

            {location !== "/" ? (
                <Outlet />
            ) : (
                <div className="container !mx-auto !px-4 !py-12">

                    {/* Hero Section */}
                    <div className="text-center !mb-14">
                        <div className="inline-block !px-4 !py-1 rounded-full bg-blue-100 text-blue-700 font-medium !mb-4">
                            Semester 4 Preparation Portal
                        </div>

                        <h1 className="text-5xl font-bold !mb-5">
                            Welcome to
                            <span className="text-blue-600"> FSD Solution</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl !mx-auto">
                            Prepare for Full Stack Development exams with
                            solved questions, practical examples, React,
                            Node.js, Express.js, MongoDB and more.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-6 !mb-14">

                        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md !p-6 hover:shadow-xl transition-all">
                            <BookOpen size={40} className="text-blue-600 !mb-4" />
                            <h2 className="text-xl font-semibold !mb-2">
                                Theory Questions
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Important university questions with easy-to-understand explanations.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md !p-6 hover:shadow-xl transition-all">
                            <Code2 size={40} className="text-green-600 !mb-4" />
                            <h2 className="text-xl font-semibold !mb-2">
                                Practical Programs
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                React, Node.js, Express and MongoDB practical solutions.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md !p-6 hover:shadow-xl transition-all">
                            <GraduationCap size={40} className="text-purple-600 !mb-4" />
                            <h2 className="text-xl font-semibold !mb-2">
                                Exam Preparation
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                One place to revise all important FSD concepts before exams.
                            </p>
                        </div>

                    </div>

                    {/* Quick Guide */}
                    <div className="bg-white dark:bg-zinc-800 rounded-3xl !p-8 shadow-lg">
                        <h2 className="text-2xl font-bold !mb-5">
                            Getting Started
                        </h2>

                        <ul className="!space-y-3 text-gray-700 dark:text-gray-300">
                            <li>✅ Choose a question to view its solution.</li>
                            <li>✅ Copy code examples directly.</li>
                            <li>✅ Practice React programs.</li>
                            <li>✅ Revise important concepts before exams.</li>
                        </ul>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Home;