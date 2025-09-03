import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HostStep1 = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (
      !formData.brideFirst ||
      !formData.brideLast ||
      !formData.groomFirst ||
      !formData.groomLast ||
      !formData.email ||
      !formData.phone
    ) {
      setError("All fields are required.");
      return;
    }
    navigate("/weddings/register/step2");
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      {/* Progress */}
      <div className="flex justify-between mb-10">
        {["Couple", "Wedding", "Story", "Photos", "Review"].map((label, i) => (
          <div key={i} className="flex-1 text-center">
            <div
              className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                i === 0
                  ? "bg-teal-600 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {i + 1}
            </div>
            <p className="mt-2 text-sm">{label}</p>
          </div>
        ))}
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6">Step 1: Couple Details</h2>

      {/* Error */}
      {error && (
        <div className="mb-4 text-red-600 font-medium bg-red-100 p-3 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleNext} className="space-y-6">
        {/* Bride */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Bride’s First Name
          </label>
          <input
            type="text"
            name="brideFirst"
            value={formData.brideFirst || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Bride’s Last Name
          </label>
          <input
            type="text"
            name="brideLast"
            value={formData.brideLast || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
            required
          />
        </div>

        {/* Groom */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Groom’s First Name
          </label>
          <input
            type="text"
            name="groomFirst"
            value={formData.groomFirst || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Groom’s Last Name
          </label>
          <input
            type="text"
            name="groomLast"
            value={formData.groomLast || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Your Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">
            Mobile Number
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone || ""}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            We will only use your email and phone to verify your wedding.
          </p>
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-teal-600 text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-teal-700 transition"
          >
            Next Step →
          </button>
        </div>
      </form>
    </div>
  );
};

export default HostStep1;
