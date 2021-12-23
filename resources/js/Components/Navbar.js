import React, { useState } from "react";

import Dropdown from '@/Components/Dropdown';
import Input from "./Input";
import SearchIcon from "./SearchIcon";

export default function Navbar(props) {

    return (
        <div className="sticky top-0 z-40">
            <div className="w-full h-20 px-6 bg-gray-100 border-b flex items-center justify-between">
                {/* LEFT NAVBAR */}
                <div className="flex">

                    {/* mobile hamburger */}
                    <div className="inline-block lg:hidden flex items-center mr-4">

                        <button
                            onClick={props.onClick}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    className={!props.showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={props.showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* SEARCH BAR */}
                    <div className="relative text-gray-600">
                        <Input type="search" name="search" placeholder="Search Products" className="bg-white h-10 w-full xl:w-64 px-5 rounded-lg border text-sm focus:outline-none" />
                        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                            <SearchIcon />
                        </button>
                    </div>

                </div>
                {/* RIGHT NAVBAR */}
                <div className="flex items-center relative">
                    <Dropdown>
                        <Dropdown.Trigger>
                            <span className="inline-flex rounded-md">
                                <button
                                    type="button"
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                >
                                    {props.auth.user.name}

                                    <svg
                                        className="ml-2 -mr-0.5 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </Dropdown.Trigger>

                        <Dropdown.Content>
                            <Dropdown.Link href={route('logout')} method="post" as="button">
                                Log Out
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}