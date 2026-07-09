import React, { useState, useEffect } from 'react';
import { Database, Calendar, MessageSquare, Shield, Clock, Phone, Mail, Trash2, Check, RefreshCw, Layers, Copy, BookOpen, Star } from 'lucide-react';

export default function Admin() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [clearing, setClearing] = useState(false);

  const fetchSubmissions = async () => {
    try {
      const stored = localStorage.getItem('ccdc_submissions');
      if (stored) {
        const data = JSON.parse(stored);
        setAppointments(data.appointments || []);
        setMessages(data.messages || []);
      } else {
        setAppointments([]);
        setMessages([]);
      }
    } catch (error) {
      console.error("Error loading submissions:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchSubmissions();
  };

  const handleClear = async () => {
    if (!window.confirm("Warning: This will permanently wipe all local database clinical submissions. Are you sure?")) {
      return;
    }
    setClearing(true);
    try {
      localStorage.setItem('ccdc_submissions', JSON.stringify({ appointments: [], messages: [] }));
      setAppointments([]);
      setMessages([]);
    } catch (error) {
      console.error(error);
    } finally {
      setClearing(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 text-left" id="clinical-admin-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12 border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-md mb-2">
              <Database className="w-3.5 h-3.5" />
              <span>CCDC Local Database Engine</span>
            </div>
            <h1 className="font-display text-3xl font-bold text-slate-950 tracking-tight">
              CCDC Clinician's Desk & CMS
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Real-time submission monitoring, local persistence records, and Google Sheets integration guidelines.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="flex items-center space-x-1.5 bg-white hover:bg-slate-50 text-slate-700 font-bold px-4 py-2.5 rounded-xl border border-slate-200 text-xs transition-all disabled:opacity-50 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin' : ''}`} />
              <span>Refresh data</span>
            </button>
            <button
              onClick={handleClear}
              disabled={clearing}
              className="flex items-center space-x-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold px-4 py-2.5 rounded-xl border border-rose-200 text-xs transition-all disabled:opacity-50 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Wipe DB</span>
            </button>
          </div>
        </div>

        {/* Google Sheets CMS Integration Guidelines */}
        <div className="bg-gradient-to-r from-teal-800 to-sky-900 text-white rounded-3xl p-8 mb-12 shadow-md space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="space-y-2">
            <span className="text-xs text-teal-400 font-bold uppercase tracking-widest block">Active CMS Sync Module</span>
            <h2 className="font-display text-2xl font-bold tracking-tight">Google Sheets-Backed CMS Setup</h2>
            <p className="text-sky-100 text-sm max-w-3xl leading-relaxed">
              This application has a real-world, high-performance parser that can fetch your clinic's services, blog posts, patient reviews, and smile gallery directly from a live Google Sheet! When a sheet is not connected, it falls back seamlessly to pre-populated clinical data based strictly on Dr. Vikramaditya's credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-teal-700">
            
            <div className="space-y-3.5">
              <span className="block font-bold text-teal-300 text-xs uppercase tracking-wider">How to Link Your Sheet:</span>
              <ol className="list-decimal list-inside text-xs text-sky-100 space-y-2 leading-relaxed">
                <li>Create a Google Sheet with 4 tabs: <span className="font-mono font-bold text-white bg-teal-950/40 px-1 py-0.5 rounded">Services</span>, <span className="font-mono font-bold text-white bg-teal-950/40 px-1 py-0.5 rounded">Reviews</span>, <span className="font-mono font-bold text-white bg-teal-950/40 px-1 py-0.5 rounded">Blog</span>, and <span className="font-mono font-bold text-white bg-teal-950/40 px-1 py-0.5 rounded">SmileGallery</span>.</li>
                <li>In Google Sheets, click <span className="font-bold text-white">File &gt; Share &gt; Publish to the web</span>, set to Web Page, and copy the Sheet ID from your URL bar.</li>
                <li>Go to the AI Studio Settings / Secrets panel and add the variable <span className="font-mono font-bold text-teal-300 bg-teal-950/40 px-1.5 py-0.5 rounded">GOOGLE_SHEET_ID</span> with your sheet ID.</li>
                <li>The server will fetch and parse your spreadsheet tabs in real-time!</li>
              </ol>
            </div>

            <div className="bg-slate-950/40 p-5 rounded-2xl border border-teal-500/15 text-xs text-sky-100 space-y-4">
              <span className="block font-bold text-teal-300 uppercase tracking-wider">Recommended Columns Structure:</span>
              <div className="space-y-2 leading-relaxed">
                <p><span className="font-semibold text-white">Services tab:</span> ID, Title, ShortDescription, FullDescription, Benefits (split by |), Procedure (split by |), Duration, Icon, Slug, FAQs (split by | and ?).</p>
                <p><span className="font-semibold text-white">Reviews tab:</span> ID, Name, Rating, Comment, Date, Treatment, Verified (true/false).</p>
                <p><span className="font-semibold text-white">Blog tab:</span> ID, Title, Excerpt, Content, Date, Author, ReadTime, Category, Slug.</p>
                <p><span className="font-semibold text-white">SmileGallery tab:</span> ID, Title, Category, BeforeLabel, AfterLabel.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Real-time Form Submissions Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* APPOINTMENTS LIST */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-teal-600" />
                <h2 className="font-display text-xl font-bold text-slate-900">Clinical Bookings</h2>
              </div>
              <span className="bg-teal-50 text-teal-700 text-xs font-bold px-2.5 py-1 rounded-full border border-teal-100">
                {appointments.length} Total Requests
              </span>
            </div>

            {loading ? (
              <div className="py-8 text-slate-400 text-center text-xs">Accessing clinical database records...</div>
            ) : appointments.length === 0 ? (
              <div className="bg-white border border-slate-100 rounded-3xl p-10 text-center text-slate-400 text-sm space-y-2 shadow-sm">
                <Calendar className="w-8 h-8 text-slate-300 mx-auto" />
                <p className="font-semibold">No Bookings Registered Yet</p>
                <p className="text-xs">Incoming website bookings will display here in real-time.</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {appointments.map((appt) => (
                  <div
                    key={appt.id}
                    className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-4 hover:border-teal-500/15 transition-all text-sm"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="block font-bold text-slate-900 text-base">{appt.name}</span>
                        <span className="text-xs text-teal-600 font-semibold mt-0.5 block">{appt.treatment}</span>
                      </div>
                      <span className="bg-amber-100 text-amber-700 text-[10px] uppercase font-bold px-2.5 py-1 rounded border border-amber-200/50">
                        {appt.status}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-xs text-slate-500 border-t border-slate-50 pt-3">
                      <div className="flex items-center space-x-1.5">
                        <Clock className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                        <span>{appt.date} • {appt.time.split(' ')[0]}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 sm:justify-end">
                        <Phone className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                        <span>{appt.phone}</span>
                      </div>
                    </div>

                    {appt.email && (
                      <div className="text-xs text-slate-500 flex items-center space-x-1.5">
                        <Mail className="w-3.5 h-3.5 text-teal-500" />
                        <span>{appt.email}</span>
                      </div>
                    )}

                    {appt.message && (
                      <div className="bg-slate-50/50 p-3 rounded-xl border border-slate-100 text-xs text-slate-600 leading-relaxed italic">
                        "{appt.message}"
                      </div>
                    )}

                    <div className="text-[10px] text-slate-400 text-right pt-1 border-t border-slate-50">
                      Logged At: {new Date(appt.createdAt).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* CONTACT MESSAGES LIST */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-teal-600" />
                <h2 className="font-display text-xl font-bold text-slate-900">Query Submissions</h2>
              </div>
              <span className="bg-teal-50 text-teal-700 text-xs font-bold px-2.5 py-1 rounded-full border border-teal-100">
                {messages.length} Total Messages
              </span>
            </div>

            {loading ? (
              <div className="py-8 text-slate-400 text-center text-xs">Accessing queries database...</div>
            ) : messages.length === 0 ? (
              <div className="bg-white border border-slate-100 rounded-3xl p-10 text-center text-slate-400 text-sm space-y-2 shadow-sm">
                <MessageSquare className="w-8 h-8 text-slate-300 mx-auto" />
                <p className="font-semibold">No Messages Received</p>
                <p className="text-xs">Queries transmitted via the website form will display here.</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-4 hover:border-teal-500/15 transition-all text-sm"
                  >
                    <div>
                      <span className="block font-bold text-slate-900 text-base">{msg.name}</span>
                      <span className="text-xs text-slate-400 font-semibold mt-0.5 block">Subject: {msg.subject}</span>
                    </div>

                    <div className="bg-slate-50/50 p-3.5 rounded-xl border border-slate-100 text-xs text-slate-600 leading-relaxed italic">
                      "{msg.message}"
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-xs text-slate-500 border-t border-slate-50 pt-3">
                      <div className="flex items-center space-x-1.5">
                        <Phone className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                        <span>{msg.phone}</span>
                      </div>
                      {msg.email && (
                        <div className="flex items-center space-x-1.5 sm:justify-end">
                          <Mail className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                          <span>{msg.email}</span>
                        </div>
                      )}
                    </div>

                    <div className="text-[10px] text-slate-400 text-right pt-1 border-t border-slate-50">
                      Logged At: {new Date(msg.createdAt).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
