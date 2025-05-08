"use client"

import { Truck } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Login() {
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("Invalid username or password")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-4">
          <div className="flex items-center">
          <Image src="/AkrabaLogo.png" alt="Akraba Logo" width={200} height={200}  />
            
          </div>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-xl font-normal text-gray-700">Welcome to Akraba's Online Ordering!</h2>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="text-red-600 text-sm text-center">
              {error}
            </div>
          )}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Login
            </label>
            <div className="mt-1">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>

          <div className="flex items-center">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-800 focus:outline-none"
            >
              Sign In
            </button>
            <a href="#" className="ml-4 text-sm text-red-700 hover:text-red-800">
              Forgot password
            </a>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-700 font-medium">Contact Us</p>
          <p className="text-gray-600">Account Opening Inquiries – Info@akrabanet.com</p>
        </div>
      </div>
    </div>
  )
}
