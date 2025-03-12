"use client"
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios'; 

export default function Loginid() {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        'https://109.230.200.230:2222/api/Users/Login',
        {
          username: phone,
          password: password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      console.log('Login successful, response:', response.data);
      
    } catch (err) {
          console.error('Login failed:', err.response?.data || err.message);
      setError('خطایی در ورود رخ داد. لطفاً دوباره تلاش کنید.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="شماره موبایل"
          className="w-full rounded-md border border-gray-300 p-3 text-right focus:border-blue-500 focus:outline-none"
          dir="rtl"
        />
      </div>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="رمز کاربری"
          className="w-full rounded-md border border-gray-300 p-3 text-right focus:border-blue-500 focus:outline-none"
          dir="rtl"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <button
        type="submit"
        className="w-full bg-[#5DAF6EA8]/70 text-white py-2 px-4 rounded-md hover:bg-green-600 text-sm font-xbold"
      >
        ورود به درنا
      </button>
      <div className="text-center">
        <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
          فراموشی کلمه عبور
        </a>
      </div>
    </form>
  );
}