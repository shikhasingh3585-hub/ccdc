import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, CheckCircle, MessageSquare, Shield, HelpCircle, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: "Is vehicle parking available near the clinic?",
    answer: "Yes, ample public parking space is available directly in Sector 22 B and in the surrounding blocks adjacent to the clinic premises."
  },
  {
    id: 'faq-2',
    question: "Do you accept walk-in patients, or are appointments required?",
    answer: "While we highly recommend scheduling appointments in advance to minimize your wait time, walk-ins are welcome and will be accommodated based on clinical availability and urgency."
  },
  {
    id: 'faq-3',
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods including cash, credit and debit cards, and secure mobile UPI digital payments."
  },
  {
    id: 'faq-4',
    question: "What is the process for my first dental visit?",
    answer: "Please arrive 10 minutes prior to your scheduled time. Your first visit includes a comprehensive oral evaluation, discussion of your dental history, and a collaborative consultation to design your customized treatment plan."
  }
];

export default function Contact() {
  // Accordion state
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  // Appointment Form State
  const [apptForm, setApptForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    treatment: 'Dental Implants',
    message: ''
  });
  const [apptSubmitting, setApptSubmitting] = useState(false);
  const [apptSuccess, setApptSuccess] = useState<any | null>(null);

  const handleApptSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApptSubmitting(true);
    try {
      // Simulate slight network latency for polished UX feel
      await new Promise(resolve => setTimeout(resolve, 600));

      const newAppointment = {
        id: `appt-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        name: apptForm.name,
        phone: apptForm.phone,
        email: apptForm.email || "",
        date: apptForm.date,
        time: 'Preferred Date Request',
        treatment: apptForm.treatment,
        message: apptForm.message || "",
        status: "pending",
        createdAt: new Date().toISOString()
      };

      const stored = localStorage.getItem('ccdc_submissions');
      const submissions = stored ? JSON.parse(stored) : { appointments: [], messages: [] };
      submissions.appointments.unshift(newAppointment);
      localStorage.setItem('ccdc_submissions', JSON.stringify(submissions));

      setApptSuccess(newAppointment);
      // Clear form
      setApptForm({
        name: '',
        phone: '',
        email: '',
        date: '',
        treatment: 'Dental Implants',
        message: ''
      });
    } catch (error) {
      console.error(error);
      alert('Submission failed');
    } finally {
      setApptSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16" id="contact-appointment-page">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">Scheduling & Access</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-950 tracking-tight">
            Contact & Book Appointment
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Reach out to our clinical staff for appointment reservations, treatment inquiries, or general queries.
          </p>
        </div>

        {/* Form & Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Column: Direct Info Cards & Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Info */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-6">
              <h2 className="font-display text-xl font-bold text-slate-950">
                Clinic Location & Timing
              </h2>

              <div className="space-y-4 text-sm">
                
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-900">Centre For Complete Dental Care</span>
                    <span className="block text-slate-500 mt-0.5 leading-relaxed">
                      House No-1273, Sector 22 B, Ground Floor, Chandigarh, 160022, behind Hotel Sunbeam
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Phone className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-900">Phone Support</span>
                    <div className="space-y-1 mt-0.5">
                      <a href="tel:+919876768558" className="block text-teal-600 font-semibold hover:underline">
                        +91 98767 68558
                      </a>
                      <a href="tel:+917814504050" className="block text-teal-600 font-semibold hover:underline">
                        +91 78145 04050
                      </a>
                      <a href="tel:01725000348" className="block text-teal-600 font-semibold hover:underline">
                        0172 5000 348
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Mail className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-900">Electronic Support</span>
                    <span className="block text-slate-500 mt-0.5">contact@ccdcchandigarh.com</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 pt-4 border-t border-slate-50">
                  <Clock className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-900">Clinical Timings</span>
                    <span className="block text-slate-500 mt-0.5 font-medium">Monday – Saturday</span>
                    <span className="block text-xs text-slate-500 mt-1">10:00 AM – 01:30 PM</span>
                    <span className="block text-xs text-slate-500">04:30 PM – 07:30 PM</span>
                    <span className="block text-xs text-rose-500 font-bold mt-2 uppercase tracking-wider">* Sundays closed</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white border border-slate-100 rounded-3xl p-4 shadow-sm overflow-hidden h-[320px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.145398246473!2d76.76796917618991!3d30.73037998533157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed1574bfda3b%3A0x6b70a7df844e99f5!2sSector%2022%20B%2C%20Sector%2022%2C%20Chandigarh%2C%20160022!5e0!3m2!1sen!2sin!4v1720480000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CCDC Location Map Sector 22 Chandigarh"
                className="rounded-2xl"
              ></iframe>
            </div>

            {/* Verification & Badging */}
            <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-8 shadow-sm space-y-4">
              <span className="text-xs text-teal-400 font-bold uppercase tracking-widest block">Defense Welfare</span>
              <h3 className="font-display text-lg font-bold">ECHS Army Chandimandir</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                We are proud to be empanelled with ECHS Army Chandimandir. Defense veterans, active duty personnel, and families are eligible for priority diagnostic checkups and treatment authorizations.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center space-x-1.5 bg-slate-800 text-teal-400 text-[10px] font-bold px-3 py-1 rounded border border-teal-500/20 uppercase tracking-wider">
                  <Shield className="w-3.5 h-3.5" />
                  <span>ECHS Army Empanelled</span>
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Appointment Booking Form */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl shadow-sm p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <h2 className="font-display text-2xl font-bold text-slate-950">Book an Appointment</h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                  Fill in your details below to request your clinical consultation slot.
                </p>
              </div>

              {apptSuccess ? (
                <div className="text-center py-8 space-y-6 animate-fade-in" id="appt-success-box">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-2xl text-slate-900">Request Received!</h3>
                    <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
                      Your appointment request has been recorded. Our clinical desk will reach out to you shortly at **{apptSuccess.phone}** to finalize your schedule.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-left space-y-2.5 max-w-sm mx-auto text-xs font-medium text-slate-600">
                    <div className="flex justify-between"><span>Patient Name:</span> <span className="font-bold text-slate-900">{apptSuccess.name}</span></div>
                    <div className="flex justify-between"><span>Preferred Date:</span> <span className="font-bold text-slate-900">{apptSuccess.date}</span></div>
                    <div className="flex justify-between"><span>Service Interested:</span> <span className="font-bold text-slate-900">{apptSuccess.treatment}</span></div>
                  </div>
                  <button
                    onClick={() => setApptSuccess(null)}
                    className="bg-slate-950 text-white hover:bg-slate-900 font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Request Another Appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApptSubmit} className="space-y-5" id="appt-booking-form">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={apptForm.name}
                      onChange={(e) => setApptForm({ ...apptForm, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 focus:border-teal-500 focus:bg-white rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter your mobile number"
                      value={apptForm.phone}
                      onChange={(e) => setApptForm({ ...apptForm, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 focus:border-teal-500 focus:bg-white rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Email Address (Optional)</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={apptForm.email}
                      onChange={(e) => setApptForm({ ...apptForm, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 focus:border-teal-500 focus:bg-white rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Preferred Date *</label>
                      <input
                        type="date"
                        required
                        value={apptForm.date}
                        onChange={(e) => setApptForm({ ...apptForm, date: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-100 focus:border-teal-500 focus:bg-white rounded-xl px-4 py-3 text-sm outline-none transition-all cursor-pointer"
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Service Interested *</label>
                      <select
                        value={apptForm.treatment}
                        onChange={(e) => setApptForm({ ...apptForm, treatment: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-100 focus:border-teal-500 focus:bg-white rounded-xl px-4 py-3 text-sm outline-none transition-all cursor-pointer"
                      >
                        <option>Dental Implants</option>
                        <option>Zirconia Crowns</option>
                        <option>Dental Veneers & Smile Designing</option>
                        <option>Invisalign Clear Aligners</option>
                        <option>Root Canal Treatment (RCT)</option>
                        <option>General Dental Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Message / Treatment Notes (Optional)</label>
                    <textarea
                      placeholder="Briefly state your concern or query..."
                      rows={4}
                      value={apptForm.message}
                      onChange={(e) => setApptForm({ ...apptForm, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-100 focus:border-teal-500 focus:bg-white rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={apptSubmitting}
                    className="w-full bg-gradient-to-r from-teal-600 to-sky-600 text-white font-bold py-4 rounded-xl text-sm shadow-md hover:shadow-lg hover:from-teal-700 hover:to-sky-700 transition-all disabled:opacity-55 cursor-pointer"
                  >
                    {apptSubmitting ? 'Requesting booking...' : 'Request Clinical Consultation'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-20 border-t border-slate-200 pt-16 max-w-4xl mx-auto text-left" id="faq-section">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">Patient Information</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-sm">
              General administrative information about visiting our clinic premises.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-slate-900 text-sm sm:text-base hover:text-teal-600 transition-colors"
                  >
                    <span className="pr-4">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-teal-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-slate-50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
