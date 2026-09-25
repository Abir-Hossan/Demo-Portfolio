import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  BarChart3, 
  Code2, 
  Palette, 
  Globe, 
  Play, 
  RotateCcw, 
  Copy, 
  Check, 
  Terminal, 
  Send,
  Zap,
  Sliders
} from 'lucide-react';

export const LivePlayground: React.FC = () => {
  const [activeWidget, setActiveWidget] = useState<'chart' | 'formatter' | 'palette' | 'api'>('chart');

  // Widget 1: Real-Time Chart Data State
  const [dataPoints, setDataPoints] = useState<number[]>([45, 62, 58, 75, 82, 69, 88, 94, 86, 92]);
  const [metricType, setMetricType] = useState<'cpu' | 'req' | 'memory'>('req');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataPoints((prev) => {
        const nextVal = Math.floor(Math.random() * 40) + 55;
        return [...prev.slice(1), nextVal];
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // Widget 2: Formatter State
  const [inputCode, setInputCode] = useState<string>(
    `function calculatePerformance(metrics) {\n  return metrics.map(m => m.val * 1.5);\n}`
  );
  const [formattedCode, setFormattedCode] = useState<string>('');
  const [isFormatting, setIsFormatting] = useState<boolean>(false);

  const handleFormatCode = () => {
    setIsFormatting(true);
    setTimeout(() => {
      setFormattedCode(
        `/**\n * @version 2.4.0 Strict TypeScript Output\n */\nexport function calculatePerformance(\n  metrics: Array<{ id: string; val: number }>\n): number[] {\n  return metrics.map((m) => m.val * 1.5);\n}`
      );
      setIsFormatting(false);
    }, 400);
  };

  // Widget 3: Palette State
  const [baseHue, setBaseHue] = useState<number>(240);
  const [paletteShades, setPaletteShades] = useState<string[]>([]);

  useEffect(() => {
    const shades = [
      `hsl(${baseHue}, 85%, 95%)`,
      `hsl(${baseHue}, 80%, 80%)`,
      `hsl(${baseHue}, 75%, 60%)`,
      `hsl(${baseHue}, 70%, 45%)`,
      `hsl(${baseHue}, 65%, 30%)`
    ];
    setPaletteShades(shades);
  }, [baseHue]);

  // Widget 4: API Inspector State
  const [endpoint, setEndpoint] = useState<string>('/api/v1/developer/profile');
  const [method, setMethod] = useState<'GET' | 'POST'>('GET');
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [apiLatency, setApiLatency] = useState<number>(0);
  const [isRequesting, setIsRequesting] = useState<boolean>(false);

  const handleSendApiRequest = () => {
    setIsRequesting(true);
    const start = performance.now();
    setTimeout(() => {
      const end = performance.now();
      setApiLatency(Math.round(end - start));
      setApiResponse({
        status: 200,
        ok: true,
        developer: 'S. Kabir Hossan',
        role: 'Senior Web Developer & UI Architect',
        stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Vite'],
        availability: 'Immediate',
        timestamp: new Date().toISOString()
      });
      setIsRequesting(false);
    }, 350);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="playground" className="py-24 bg-slate-950 relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Code Playground</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Component Showcase & Tools
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Test actual live widgets engineered by Kabir directly inside this portfolio. Select a tool below to interact with real-time state mutations.
          </p>
        </div>

        {/* Playground Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 bg-slate-900/90 p-2 rounded-2xl border border-slate-800 max-w-2xl mx-auto">
          <button
            onClick={() => setActiveWidget('chart')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeWidget === 'chart'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Live Telemetry Chart</span>
          </button>

          <button
            onClick={() => setActiveWidget('formatter')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeWidget === 'formatter'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Code Formatter & AST</span>
          </button>

          <button
            onClick={() => setActiveWidget('palette')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeWidget === 'palette'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>Design Tokens</span>
          </button>

          <button
            onClick={() => setActiveWidget('api')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeWidget === 'api'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>REST API Tester</span>
          </button>
        </div>

        {/* Playground Container Box */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl max-w-4xl mx-auto min-h-[380px] flex flex-col justify-between">
          
          {/* Widget 1: Live Telemetry Visualizer */}
          {activeWidget === 'chart' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-indigo-400" />
                    Real-time WebSocket Data Visualizer
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Live stream calculation updating every 1.2s via React state pipeline.
                  </p>
                </div>

                <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                  <button
                    onClick={() => setMetricType('req')}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${metricType === 'req' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400'}`}
                  >
                    Requests/sec
                  </button>
                  <button
                    onClick={() => setMetricType('cpu')}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${metricType === 'cpu' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400'}`}
                  >
                    CPU %
                  </button>
                  <button
                    onClick={() => setMetricType('memory')}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${metricType === 'memory' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400'}`}
                  >
                    Heap MB
                  </button>
                </div>
              </div>

              {/* Bar Graph Render */}
              <div className="h-48 bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-end justify-between gap-2">
                {dataPoints.map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                    <span className="text-[10px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {val}
                    </span>
                    <div
                      className="w-full bg-gradient-to-t from-indigo-600 via-violet-500 to-indigo-400 rounded-t-lg transition-all duration-500 group-hover:brightness-125"
                      style={{ height: `${val}%` }}
                    ></div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Telemetry Stream Active
                </span>
                <span>Peak Load: {Math.max(...dataPoints)} units</span>
              </div>
            </div>
          )}

          {/* Widget 2: Code Formatter & AST */}
          {activeWidget === 'formatter' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-indigo-400" />
                  TypeScript Syntax Formatter & Type Enforcer
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Type unformatted JavaScript and watch the compiler enforce strict interfaces.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Input JS Snippet:</label>
                  <textarea
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    rows={6}
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-mono text-emerald-400">Strict TS Output:</label>
                    {formattedCode && (
                      <button
                        onClick={() => copyToClipboard(formattedCode)}
                        className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-mono"
                      >
                        {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copied ? 'Copied' : 'Copy'}</span>
                      </button>
                    )}
                  </div>
                  <div className="w-full h-[120px] p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-indigo-300 overflow-auto">
                    <pre><code>{formattedCode || '// Click "Run Formatter" below...'}</code></pre>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={handleFormatCode}
                  disabled={isFormatting}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md active:scale-95 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isFormatting ? 'Compiling...' : 'Run Formatter'}</span>
                </button>
              </div>
            </div>
          )}

          {/* Widget 3: Design Tokens & Palette */}
          {activeWidget === 'palette' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Palette className="w-5 h-5 text-indigo-400" />
                  Dynamic HSL Theme Token Engine
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Adjust base hue slider to generate WCAG compliant color palettes.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                  <span>Base Hue Angle: {baseHue}°</span>
                  <button
                    onClick={() => setBaseHue(Math.floor(Math.random() * 360))}
                    className="text-indigo-400 hover:underline flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" /> Randomize
                  </button>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={baseHue}
                  onChange={(e) => setBaseHue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              {/* Color Swatches Grid */}
              <div className="grid grid-cols-5 gap-2">
                {paletteShades.map((shade, i) => (
                  <div
                    key={i}
                    onClick={() => copyToClipboard(shade)}
                    className="h-20 rounded-xl p-2 flex flex-col justify-between cursor-pointer transition-transform hover:scale-105 shadow-md"
                    style={{ backgroundColor: shade }}
                  >
                    <span className="text-[10px] font-mono font-bold text-slate-900 bg-white/80 px-1 py-0.5 rounded w-max">
                      500-{i + 1}
                    </span>
                    <span className="text-[9px] font-mono font-semibold text-slate-900 bg-white/80 px-1 rounded truncate">
                      {shade}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-center text-xs text-slate-400">
                Click any color swatch to copy exact HSL value to clipboard.
              </div>
            </div>
          )}

          {/* Widget 4: REST API Tester */}
          {activeWidget === 'api' && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Globe className="w-5 h-5 text-emerald-400" />
                  Express REST API Endpoint Inspector
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Simulate API requests to the server backend and inspect live JSON payload responses.
                </p>
              </div>

              <div className="flex gap-2">
                <select
                  value={method}
                  onChange={(e: any) => setMethod(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-indigo-400 font-bold focus:outline-none"
                >
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                </select>

                <input
                  type="text"
                  value={endpoint}
                  onChange={(e) => setEndpoint(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 focus:outline-none"
                />

                <button
                  onClick={handleSendApiRequest}
                  disabled={isRequesting}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isRequesting ? 'Fetching...' : 'Send'}</span>
                </button>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-200 min-h-[140px] max-h-[180px] overflow-auto">
                {apiResponse ? (
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-emerald-400 mb-2 pb-1 border-b border-slate-800">
                      <span>HTTP 200 OK</span>
                      <span>Latency: {apiLatency}ms</span>
                    </div>
                    <pre><code>{JSON.stringify(apiResponse, null, 2)}</code></pre>
                  </div>
                ) : (
                  <div className="text-slate-500">// Response body will appear here after sending request...</div>
                )}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
