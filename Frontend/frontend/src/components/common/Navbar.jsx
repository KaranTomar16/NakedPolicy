import React from 'react';
import { FileText } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate }) {
    return (
        <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div
                        className="flex items-center space-x-2 cursor-pointer"
                        onClick={() => onNavigate('landing')}
                    >
                        <FileText className="w-8 h-8 text-blue-400" />
                        <span className="text-2xl font-bold text-white">Naked Policy</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        {currentPage !== 'pricing' && (
                            <button
                                onClick={() => onNavigate('pricing')}
                                className="text-slate-300 hover:text-white transition px-4 py-2"
                            >
                                Pricing
                            </button>
                        )}
                        {currentPage !== 'signin' && (
                            <button
                                onClick={() => onNavigate('signin')}
                                className="text-slate-300 hover:text-white transition px-4 py-2"
                            >
                                Sign In
                            </button>
                        )}
                        {currentPage !== 'login' && (
                            <button
                                onClick={() => onNavigate('login')}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
                            >
                                Log In
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
