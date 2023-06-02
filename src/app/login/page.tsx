'use client'
import { signIn } from "next-auth/react"

export default function Login () {

    return(
        <>
            <div className="grid grid-cols-2 gap-4 mx-10 min-h-screen">
                <aside className="place-self-center align-self-center border p-20 rounded-lg border-gray-700 shadow-md shadow-gray-600 w-full md:w-1/2 bg-gradient-to-l from-indigo-800 to-gray-900">
                    <button className="border  px-5 py-1 rounded-lg bg-gray-900 hover:bg-gray-950 border-gray-600 border-2 text-lg w-full" 
                    onClick={() => signIn('github')}>Sign in with github</button>
                </aside>
            </div>
        </>
    )
}