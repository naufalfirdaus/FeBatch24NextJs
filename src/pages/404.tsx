import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
export default function Custom404() {
    const router = useRouter()
    useEffect(()=> {
        setTimeout(() => {
           router.push('/') 
        }, 2000);
    })
    return (
        <div>
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gray-600 mt-8">404</p>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2">Page Not Found</p>
                    <p className="md:text-lg xl:text-xl text-gray-500 mt-4">Whoops.</p>
                </div>
            </div>
        </div>
    )
}
