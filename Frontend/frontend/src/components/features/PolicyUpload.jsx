import React from 'react';
import { Upload } from 'lucide-react';

export default function PolicyUpload({ onFileUpload, isProcessing }) {
    return (
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border-2 border-dashed border-slate-600 p-12 text-center">
            <input
                type="file"
                id="fileUpload"
                className="hidden"
                accept=".pdf,.doc,.docx,.txt"
                onChange={onFileUpload}
                disabled={isProcessing}
            />
            <label
                htmlFor="fileUpload"
                className="cursor-pointer inline-block"
            >
                <Upload className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <p className="text-xl text-white mb-2">
                    Drop your policy document here
                </p>
                <p className="text-slate-400 mb-6">
                    or click to browse (PDF, DOC, DOCX, TXT)
                </p>
                <span className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition inline-block">
                    Choose File
                </span>
            </label>
        </div>
    );
}
