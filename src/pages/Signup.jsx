import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () =>  {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    role: 'couple', // Default role
    agreeTerms: false
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    // Validate last name
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    // Validate phone number
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }
    
    // Validate terms agreement
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms and conditions';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // This would be replaced with your actual API call
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API delay
      
      console.log('Form submitted successfully:', formData);
      setShowSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        role: 'couple',
        agreeTerms: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({
        form: 'There was an error creating your account. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 py-8 sm:py-16 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Registration Successful!</h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Thank you for joining ShaadiGlobal. Your account has been created successfully.
            </p>
            <div className="flex gap-3 sm:gap-4 justify-center">
              <Link to="/login" className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 sm:px-6 rounded-md transition duration-300 text-sm sm:text-base">
                Login Now
              </Link>
              <Link to="/" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 sm:px-6 rounded-md transition duration-300 text-sm sm:text-base">
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 py-8 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-pink-600 text-white p-4 sm:p-6 text-center">
              <h1 className="text-2xl sm:text-3xl font-bold">Create Your Account</h1>
              <p className="mt-2 text-sm sm:text-base">Join ShaadiGlobal and start attending your dream wedding</p>
            </div>
            
            <div className="p-4 sm:p-8">
              {errors.form && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded mb-4 sm:mb-6 text-sm" role="alert">
                  {errors.form}
                </div>
              )}
              
              <div className="mb-4 sm:mb-6 text-xs sm:text-sm text-gray-600 italic">
                Fields marked with <span className="text-red-500">*</span> are mandatory
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">First Name<span className="text-red-500"> *</span></label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-sm sm:text-base ${errors.firstName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-pink-200'}`}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Last Name<span className="text-red-500"> *</span></label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-sm sm:text-base ${errors.lastName ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-pink-200'}`}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Email Address<span className="text-red-500"> *</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-sm sm:text-base ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-pink-200'}`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Password<span className="text-red-500"> *</span></label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-sm sm:text-base ${errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-pink-200'}`}
                      placeholder="Create a password"
                    />
                    {errors.password && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.password}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Confirm Password<span className="text-red-500"> *</span></label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-sm sm:text-base ${errors.confirmPassword ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-pink-200'}`}
                      placeholder="Confirm your password"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.confirmPassword}</p>}
                  </div>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-sm sm:text-base ${errors.phoneNumber ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-pink-200'}`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phoneNumber}</p>}
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <label htmlFor="role" className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">I am a:</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    <div className={`border rounded-md p-3 sm:p-4 text-center cursor-pointer transition-all ${formData.role === 'couple' ? 'bg-pink-50 border-pink-400' : 'hover:bg-gray-50'}`} onClick={() => handleChange({ target: { name: 'role', value: 'couple' } })}>
                      <div className="mb-1 sm:mb-2">
                        <svg className={`w-5 h-5 sm:w-6 sm:h-6 mx-auto ${formData.role === 'couple' ? 'text-pink-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                      </div>
                      <div className="font-medium text-xs sm:text-sm">Particular</div>
                    </div>
                    
                    <div className={`border rounded-md p-3 sm:p-4 text-center cursor-pointer transition-all ${formData.role === 'planner' ? 'bg-pink-50 border-pink-400' : 'hover:bg-gray-50'}`} onClick={() => handleChange({ target: { name: 'role', value: 'planner' } })}>
                      <div className="mb-1 sm:mb-2">
                        <svg className={`w-5 h-5 sm:w-6 sm:h-6 mx-auto ${formData.role === 'planner' ? 'text-pink-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="font-medium text-xs sm:text-sm">Planner</div>
                    </div>
                    
                    <div className={`border rounded-md p-3 sm:p-4 text-center cursor-pointer transition-all ${formData.role === 'guest' ? 'bg-pink-50 border-pink-400' : 'hover:bg-gray-50'}`} onClick={() => handleChange({ target: { name: 'role', value: 'guest' } })}>
                      <div className="mb-1 sm:mb-2">
                        <svg className={`w-5 h-5 sm:w-6 sm:h-6 mx-auto ${formData.role === 'guest' ? 'text-pink-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                      </div>
                      <div className="font-medium text-xs sm:text-sm">Guest</div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className={`h-3 w-3 sm:h-4 sm:w-4 ${errors.agreeTerms ? 'border-red-500 text-red-600' : 'border-gray-300 text-pink-600'} rounded focus:ring-pink-500`}
                      />
                    </div>
                    <div className="ml-2 sm:ml-3 text-xs sm:text-sm">
                      <label htmlFor="agreeTerms" className="text-gray-700">
                        I agree to the <Link to="/terms" className="text-pink-600 hover:text-pink-800">Terms of Service</Link> and <Link to="/privacy" className="text-pink-600 hover:text-pink-800">Privacy Policy</Link>
                      </label>
                      {errors.agreeTerms && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.agreeTerms}</p>}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-md transition duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating Account...
                      </>
                    ) : (
                      'Create Account'
                    )}
                  </button>
                  
                  <div className="text-xs sm:text-sm text-gray-600">
                    Already have an account? <Link to="/login" className="text-pink-600 hover:text-pink-800 font-medium">Log in</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          <div className="text-center mt-6 sm:mt-8">
            <div className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">Or sign up with</div>
            <div className="flex justify-center gap-3 sm:gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 sm:py-2 px-3 sm:px-4 rounded-md transition duration-300 flex items-center text-xs sm:text-sm">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </button>
              
              <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium py-1.5 sm:py-2 px-3 sm:px-4 rounded-md transition duration-300 flex items-center text-xs sm:text-sm">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;