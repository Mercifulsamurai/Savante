"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';

const Signup = () => {
  const [isInfluencer, setIsInfluencer] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      router.push('/');
    }, 3000);
  };

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-100">
      <Header />
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        {isInfluencer ? (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-gray-500">Influencer Signup</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Instagram Handle</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Content Niche</label>
                <select className="w-full p-2 border border-gray-300 rounded mt-1" defaultValue="">
                  <option value="" disabled>Select content niche</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Business & Investing">Business & Investing</option>
                  <option value="Food">Food</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Fitness">Fitness</option>
                  <option value="Travel">Travel</option>
                  <option value="Beauty">Beauty</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Photography">Photography</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Followers Count</label>
                <input type="number" className="w-full p-2 border border-gray-300 rounded mt-1" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Audience Description</label>
                <textarea className="w-full p-2 border border-gray-300 rounded mt-1"></textarea>
              </div>
              <button type="submit" className="w-full bg-gray-500 text-white p-2 rounded">Sign Up</button>
            </form>
            <p className="mt-4 text-gray-600">
              Already have an account? <Link href="#" legacyBehavior><a className="text-blue-500">Login</a></Link>
            </p>
            <p className="mt-2 text-gray-600">
              Are you a brand? <span className="text-blue-500 cursor-pointer" onClick={() => setIsInfluencer(false)}>Sign up here</span>
            </p>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-gray-500">Brand Signup</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Brand Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Website URL</label>
                <input type="url" className="w-full p-2 border border-gray-300 rounded mt-1" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Niche/Industry</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Company Size</label>
                <select className="w-full p-2 border border-gray-300 rounded mt-1" defaultValue="">
                  <option value="" disabled>Select company size</option>
                  <option value="Startup">Startup</option>
                  <option value="Small">Small</option>
                  <option value="Mid">Mid</option>
                  <option value="Large">Large</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Instagram Handle</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Brand Description</label>
                <textarea className="w-full p-2 border border-gray-300 rounded mt-1"></textarea>
              </div>
              <button type="submit" className="w-full bg-gray-500 text-white p-2 rounded">Sign Up</button>
            </form>
            <p className="mt-4 text-gray-600">
              Already have an account? <Link href="#" legacyBehavior><a className="text-blue-500">Login</a></Link>
            </p>
            <p className="mt-2 text-gray-600">
              Are you an influencer? <span className="text-blue-500 cursor-pointer" onClick={() => setIsInfluencer(true)}>Sign up here</span>
            </p>
          </div>
        )}
      </div>
      {showAlert && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <h2 className="text-xl font-bold mb-4">Thank You for Registering!</h2>
            <p>We will get back to you soon.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
