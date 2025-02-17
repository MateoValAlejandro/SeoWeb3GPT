import React, { useState } from 'react';
import { Send, AlertCircle, LineChart } from 'lucide-react';
import { generateSEOContent } from '../services/openai';

export default function AIGenerator() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const generateContent = async () => {
    try {
      setLoading(true);
      setError('');
      const content = await generateSEOContent(prompt);
      setResult(content);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">AI SEO Analysis</h2>
      <div className="space-y-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your content or URL to analyze..."
          className="w-full h-32 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        
        {error && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
            <AlertCircle className="w-5 h-5" />
            <span>{error}</span>
          </div>
        )}

        <button
          onClick={generateContent}
          disabled={loading || !prompt}
          className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Analyzing...' : (
            <>
              Analyze Content
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        {result && (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Analysis Results</h3>
              <button
                onClick={() => navigator.clipboard.writeText(result)}
                className="text-sm text-blue-600 hover:text-blue-500 transition-colors"
              >
                Copy to clipboard
              </button>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <pre className="whitespace-pre-wrap text-gray-700">{result}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}