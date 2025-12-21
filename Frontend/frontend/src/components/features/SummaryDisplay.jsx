import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function SummaryDisplay({ summary, onUploadNew }) {
    if (!summary) return null;

    return (
        <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-8">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                            Summary: {summary.title}
                        </h2>
                        <div className="flex items-center space-x-2">
                            <span className={`px-3 py-1 rounded-full text-sm ${
                                summary.risk === 'low' ? 'bg-green-500/20 text-green-300' :
                                summary.risk === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                                'bg-red-500/20 text-red-300'
                            }`}>
                                {summary.risk.toUpperCase()} RISK
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={onUploadNew}
                        className="text-slate-400 hover:text-white transition"
                    >
                        Upload New
                    </button>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Key Points:</h3>
                    {summary.keyPoints.map((point, index) => (
                        <div key={index} className="flex items-start space-x-3 bg-slate-900/50 p-4 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <p className="text-slate-200">{point}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition">
                    Download Summary
                </button>
                <button className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg transition">
                    Share
                </button>
            </div>
        </div>
    );
}
