"use client"
import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function ButtonOutline() {
    return <Button variant="outline">Edit Profile</Button>
}
import { useState } from 'react'
const ProfilePage = () => {
    const [notebooks, setNotebooks] = React.useState([
        { id: 1, title: 'Notebook 1', description: 'Description for Notebook 1' },
        { id: 2, title: 'Notebook 2', description: 'Description for Notebook 2' },
        { id: 3, title: 'Notebook 3', description: 'Description for Notebook 3' },
        { id: 4, title: 'Notebook 4', description: 'Description for Notebook 4' },

    ]);

    const handleNotebookClick = (notebookId) => {
        console.log(`Notebook ${notebookId} clicked`);
    };
    return (
        <div className="bg-gray-100 dark:bg-black h-screen flex justify-center items-start pt-10">
            <div className="w-3/5 bg-white dark:bg-gray-900 shadow-xl rounded-lg p-6">
                <div className="grid grid-cols-5">
                    <div className="flex flex-col md:flex-row md:items-start col-span-4">
                        <div className="md:w-13/84">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="rounded-full w-35 h-35" />
                                <AvatarFallback className="rounded-full bg-gray-400 w-32 h-32">CN</AvatarFallback>
                            </Avatar>
                        </div>

                        <div className="md:w-2/3 md:pl-6">
                            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">User Name</h1>
                            <p className="text-gray-600 dark:text-gray-400">This is a short user description. It can contain user details, bio, or any other relevant information that should be displayed on the profile page.</p>
                        </div>

                    </div>
                    <div className="flex mr-1 justify-end">
                        <ButtonOutline />
                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-gray-200">Notebooks</h2>
                    <div className="space-y-4">
                        {notebooks.map((notebook) => (
                            <div
                                key={notebook.id}
                                onClick={() => handleNotebookClick(notebook.id)}
                                className="bg-gray-100 dark:bg-gray-300 p-4 rounded-lg shadow cursor-pointer hover:bg-gray-200"
                            >
                                <h3 className="text-lg font-semibold dark:text-black">{notebook.title}</h3>
                                <p className="text-gray-600 dark:text-black">{notebook.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default ProfilePage;