import React, { useState } from 'react';
import { X, AlertCircle, Mail } from 'lucide-react';

function Login(){

 const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative shadow-xl">
        {/* Close button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Log in or sign up
          </h1>
          <p className="text-gray-600 leading-relaxed">
            To register a wedding, please log in to your account below. If you don't 
            have an account yet, you can sign up for WeddingTour using the same 
            buttons.
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="text-blue-500 mt-0.5 flex-shrink-0" size={20} />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Important Notice</h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                <span className="font-medium">Facebook login is currently unavailable.</span> Please use an alternative login 
                method for now. Thank you for your understanding!
              </p>
              <p className="text-blue-800 text-sm mt-3">
                If you are having problems logging in, please see the{' '}
                <a href="#" className="text-blue-600 underline hover:text-blue-700">
                  Technical troubleshooting
                </a>
                {' '}section of our FAQ.
              </p>
            </div>
          </div>
        </div>

        {/* Login Buttons */}
        <div className="space-y-3">
          {/* Google Login */}
          <button className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center border">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <span>Continue with Google</span>
          </button>

          {/* Email Login */}
          <button className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700">
            <Mail className="text-gray-500" size={20} />
            <span>Continue with email</span>
          </button>
        </div>

        {/* Footer section with teal background */}
        <div className="mt-6 -mx-6 -mb-6 bg-orange-950 rounded-b-lg p-4">
          <div className="text-center">
            <div className="text-white text-sm opacity-90">
              Secure login powered by WeddingTour
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login