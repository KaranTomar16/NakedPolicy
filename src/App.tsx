import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { RiskBadge } from './components/RiskBadge';
import { RiskCard } from './components/RiskCard';
import { Button } from './components/Button';
import { Eye, Lock, Globe, ChevronRight } from 'lucide-react';

function App() {
  const [currentUrl, setCurrentUrl] = useState('example.com');

  useEffect(() => {
    // In a real extension, we would get the tab URL here
    if (chrome?.tabs?.query) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]?.url) {
          try {
            const url = new URL(tabs[0].url);
            setCurrentUrl(url.hostname);
          } catch (e) {
            // fallback
          }
        }
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-brand-500/30">
      <Header />

      <main className="p-4 space-y-6">
        {/* Domain & Score */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 rounded-full border border-slate-800 text-xs text-slate-400 hover:border-slate-700 transition-colors cursor-default">
            <Globe className="w-3 h-3" />
            {currentUrl}
          </div>

          <div className="flex justify-center">
            <RiskBadge level="HIGH" />
          </div>
        </div>

        {/* Risk Grid */}
        <div className="space-y-3">
          <RiskCard
            title="Data Collection"
            icon={<Eye className="w-4 h-4" />}
            items={[
              "Uses aggressive tracking cookies",
              "Collects precise location data",
              "Shares emails with 3rd parties"
            ]}
            delay={100}
          />

          <RiskCard
            title="Security Issues"
            icon={<Lock className="w-4 h-4" />}
            items={[
              "TLS 1.1 strictly deprecated",
              "No Content Security Policy",
              "Exposes server version header"
            ]}
            delay={200}
          />
        </div>

        {/* Actions */}
        <div className="pt-4 flex flex-col gap-3">
          <Button variant="primary" icon={<ChevronRight className="w-4 h-4" />} className="w-full justify-center text-base py-3">
            View Detailed Report
          </Button>
          <div className="flex gap-3">
            <Button variant="secondary" className="flex-1 text-xs py-2 justify-center">
              Full Policy
            </Button>
            <Button variant="danger" className="flex-1 text-xs py-2 justify-center">
              Block Tracking
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
