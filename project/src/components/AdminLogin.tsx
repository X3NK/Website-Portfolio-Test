import React, { useState } from 'react';
import { Lock, User, ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface AdminLoginProps {
  onLogin: (success: boolean) => void;
  onCancel: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, onCancel }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Demo credentials - in production, this would be handled by a backend
  const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'dyu2024',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (
      credentials.username === ADMIN_CREDENTIALS.username &&
      credentials.password === ADMIN_CREDENTIALS.password
    ) {
      onLogin(true);
    } else {
      setError('Invalid username or password');
      onLogin(false);
    }

    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  return (
    <div className="min-h-screen bg-grunge-dark flex items-center justify-center relative grunge-texture grain-effect">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-grunge-purple rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-grunge-gray rotate-12"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-grunge-purple/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-grunge-gray/30"></div>
      </div>

      <div className="w-full max-w-md mx-4 relative z-10">
        {/* Back Button */}
        <button
          onClick={onCancel}
          className="flex items-center space-x-2 text-grunge-gray hover:text-grunge-purple transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Site</span>
        </button>

        {/* Login Form */}
        <div className="bg-grunge-gray/10 border border-grunge-gray/20 p-8 backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="logo-container mb-4 flex justify-center">
              <svg 
                className="logo-svg" 
                width="100" 
                height="36" 
                viewBox="0 0 745 266"
                fill="currentColor"
              >
                <path d="M0 132.838V265.676H79.7028H159.406V239.108V212.541H185.973H212.541V132.838V53.1352H185.973H159.406V26.5676V3.8147e-06H79.7028H0V132.838ZM157.192 132.838V212.541H105.163H53.1352V132.838V53.1352H105.163H157.192V132.838Z" fill="currentColor"/>
                <path d="M426.189 53.1352V106.27H399.621H373.053V185.973V265.676H399.621H426.189V185.973V106.27H452.756H479.324V53.1352V3.8147e-06H452.756H426.189V53.1352Z" fill="currentColor"/>
                <path d="M532.459 132.838V265.676H638.73H745V132.838V3.8147e-06H718.432H691.865V106.27V212.541H638.73H585.594V106.27V3.8147e-06H559.027H532.459V132.838Z" fill="currentColor"/>
                <path d="M266.783 79.7028V106.27H293.351H319.918V79.7028V53.1351H293.351H266.783V79.7028Z" fill="currentColor"/>
                <path d="M266.783 185.973V212.541H293.351H319.918V185.973V159.406H293.351H266.783V185.973Z" fill="currentColor"/>
              </svg>
            </div>
            <h1 className="text-3xl font-black text-grunge-gray mb-2">
              ADMIN <span className="text-grunge-purple">ACCESS</span>
            </h1>
            <p className="text-grunge-gray/80 text-sm">
              Enter your credentials to access the admin panel
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-grunge-gray font-medium mb-2">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-grunge-gray/50" />
                </div>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray placeholder-grunge-gray/50 focus:outline-none focus:border-grunge-purple focus:bg-grunge-gray/20 transition-all duration-300"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-grunge-gray font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-grunge-gray/50" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 bg-grunge-gray/10 border border-grunge-gray/20 text-grunge-gray placeholder-grunge-gray/50 focus:outline-none focus:border-grunge-purple focus:bg-grunge-gray/20 transition-all duration-300"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-grunge-gray/50 hover:text-grunge-purple transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-grunge-purple text-grunge-gray px-8 py-4 font-semibold hover:bg-grunge-gray hover:text-grunge-dark transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? 'AUTHENTICATING...' : 'LOGIN TO ADMIN'}
            </button>
          </form>

          {/* Demo Credentials Info */}
          <div className="mt-8 pt-6 border-t border-grunge-gray/20">
            <p className="text-grunge-gray/60 text-xs text-center mb-2">Demo Credentials:</p>
            <div className="text-grunge-gray/80 text-xs text-center space-y-1">
              <div>Username: <span className="text-grunge-purple">admin</span></div>
              <div>Password: <span className="text-grunge-purple">dyu2024</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;