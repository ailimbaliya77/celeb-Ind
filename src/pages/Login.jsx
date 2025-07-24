import React from 'react'
import { useState } from 'react'
import { Eye, EyeOff, Mail, Lock, LogIn } from 'lucide-react';

function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you would handle authentication here
    console.log('Login attempt with:', { email, password, rememberMe });
  };

  const handleLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    // Here you would implement the actual authentication logic
  };


  return (
     <div className="flex min-h-screen items-center justify-center bg-gray-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md space-y-6 sm:space-y-8 bg-white p-6 sm:p-10 rounded-xl shadow-md">
        <div>
          <h2 className="mt-4 sm:mt-6 text-center text-2xl sm:text-3xl font-extrabold text-pink-900">
            Login to your account
          </h2>
        </div>
        
        <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-3 sm:space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 pl-10 placeholder-gray-500 focus:border-pink-500 focus:outline-none focus:ring-pink-500 text-sm sm:text-base"
                  placeholder="Email address"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 pl-10 pr-10 placeholder-gray-500 focus:border-pink-500 focus:outline-none focus:ring-pink-500 text-sm sm:text-base"
                  placeholder="Password"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" />
                    ) : (
                      <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-3 w-3 sm:h-4 sm:w-4 rounded border-gray-300 text-pink-600 focus:ring-blue-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-xs sm:text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-xs sm:text-sm">
              <a href="#" className="font-medium text-pink-600 hover:text-pink-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-xs sm:text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LogIn className="h-4 w-4 sm:h-5 sm:w-5 text-pink-500 group-pink:text-blue-400" />
              </span>
              Log in
            </button>
          </div>
        </form>

        <div className="flex flex-col w-full max-w-sm space-y-4 mx-auto">
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-3 text-gray-500 text-sm">Or continue with</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      
      <div className="grid grid-cols-3 gap-3">
        {/* Google Login Button */}
        <button 
          onClick={() => handleLogin('Google')}
          className="flex items-center justify-center py-2 px-4 rounded-md bg-pink-400 hover:bg-pink-500 text-white"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.01 14.99c-1.45 1.32-3.35 2.01-5.01 2.01-1.66 0-3.57-.69-5.01-2.01C5.68 15.68 5 14.09 5 12s.68-3.68 1.99-4.99C8.43 5.68 10.33 5 12 5c1.67 0 3.57.68 5.01 1.99C18.32 8.32 19 9.91 19 12s-.68 3.68-1.99 4.99z" />
            <path d="M11 7v4.18l3.79 2.19.21-0.37-3-1.73V7z" />
          </svg>
        </button>

        {/* Facebook Login Button */}
        <button
          onClick={() => handleLogin('Facebook')}
          className="flex items-center justify-center py-2 px-4 rounded-md bg-pink-400 hover:bg-pink-500 text-white"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </button>

        {/* Instagram Login Button */}
        <button
          onClick={() => handleLogin('Instagram')}
          className="flex items-center justify-center py-2 px-4 rounded-md bg-pink-400 hover:bg-pink-500 text-white"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.228.415.562.217.96.477 1.382.9.423.423.683.82.9 1.382.165.423.36 1.058.415 2.228.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.415 2.228-.217.562-.477.96-.9 1.382-.423.423-.82.683-1.382.9-.423.165-1.058.36-2.228.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.228-.415-.562-.217-.96-.477-1.382-.9-.423-.423-.683-.82-.9-1.382-.165-.423-.36-1.058-.415-2.228-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.415-2.228.217-.562.477-.96.9-1.382.423-.423.82-.683 1.382-.9.423-.165 1.058-.36 2.228-.415 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.058-2.147.26-2.913.556-.79.306-1.459.713-2.126 1.384-.67.667-1.078 1.336-1.384 2.126-.296.766-.498 1.636-.556 2.913-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.277.26 2.147.556 2.913.306.79.713 1.459 1.384 2.126.667.67 1.336 1.078 2.126 1.384.766.296 1.636.498 2.913.556 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.058 2.147-.26 2.913-.556.79-.306 1.459-.713 2.126-1.384.67-.667 1.078-1.336 1.384-2.126.296-.766.498-1.636.556-2.913.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.277-.26-2.147-.556-2.913-.306-.79-.713-1.459-1.384-2.126-.667-.67-1.336-1.078-2.126-1.384-.766-.296-1.636-.498-2.913-.556-1.28-.058-1.688-.072-4.947-.072z" />
            <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
            <circle cx="18.406" cy="5.594" r="1.44" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* Twitter/X Login Button */}
        <button 
          onClick={() => handleLogin('Twitter')}
          className="flex items-center justify-center py-2 px-4 rounded-md bg-pink-400 hover:bg-pink-500 text-white"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </button>

        {/* GitHub Login Button */}
        <button
          onClick={() => handleLogin('GitHub')}
          className="flex items-center justify-center py-2 px-4 rounded-md bg-pink-400 hover:bg-pink-500 text-white"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
        </button>
      </div>
    </div>

        {/* <div className="mt-4 sm:mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-3">
            <div>
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-pink-400 py-1.5 sm:py-2 px-2 sm:px-4 text-xs sm:text-sm font-medium text-black-500 hover:bg-gray-50"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>

            <div>
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-pink-400 py-1.5 sm:py-2 px-2 sm:px-4 text-xs sm:text-sm font-medium text-black-500 hover:bg-gray-50"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            <div>
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-pink-400 py-1.5 sm:py-2 px-2 sm:px-4 text-xs sm:text-sm font-medium text-black-500 hover:bg-gray-50"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div> */}

        <div className="text-center mt-3 sm:mt-4">
          <p className="text-xs sm:text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
