import React from 'react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919876768558"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group"
      title="Chat with us on WhatsApp"
      id="floating-whatsapp-btn"
    >
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.906-6.993-1.876-1.879-4.36-2.915-7.001-2.915-5.441 0-9.869 4.42-9.873 9.863-.001 1.748.463 3.456 1.343 4.966l-.993 3.633 3.739-.981zm12.355-6.848c-.27-.135-1.597-.788-1.845-.878-.248-.09-.43-.135-.61.135-.18.27-.697.878-.855 1.058-.158.18-.315.203-.585.068-.27-.135-1.138-.42-2.167-1.34-.801-.715-1.342-1.6-1.5-1.87-.158-.27-.017-.417.118-.552.122-.121.27-.315.405-.473.135-.158.18-.27.27-.45.09-.18.045-.338-.023-.473-.067-.135-.61-1.467-.835-2.007-.218-.524-.457-.453-.61-.461-.158-.007-.338-.008-.518-.008-.18 0-.473.068-.72.338-.248.27-.945.923-.945 2.253s.967 2.61 1.103 2.79c.135.18 1.9 2.901 4.6 4.07.643.279 1.144.445 1.534.569.646.205 1.234.175 1.699.105.519-.078 1.597-.653 1.822-1.283.225-.63.225-1.17.157-1.283-.067-.113-.248-.18-.518-.315z" />
      </svg>
      <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs px-2 py-1.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap font-medium">
        Painless Appointment Support
      </span>
    </a>
  );
}
