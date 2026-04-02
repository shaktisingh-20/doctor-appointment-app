import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="px-4 sm:px-0">

      {/* ── Header ───────────────────────────────── */}
      <div className="text-center pt-12 pb-2">
        <p className="text-3xl font-medium text-gray-800">Contact <span className="text-primary">Us</span></p>
        <p className="text-gray-500 text-sm mt-3">We'd love to hear from you. Reach out anytime.</p>
        <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4"></div>
      </div>

      {/* ── Main Content ─────────────────────────── */}
      <div className="my-14 flex flex-col md:flex-row gap-12 mb-28 items-center">

        {/* Image */}
        <div className="w-full md:max-w-[380px] rounded-2xl overflow-hidden border border-green-100">
          <img className="w-full object-cover" src={assets.contact_image} alt="Contact Curely" />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-7 flex-1">

          {/* Office */}
          <div className="bg-green-50 border border-green-100 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <p className="font-medium text-gray-800">Our Office</p>
            </div>
            <p className="text-gray-500 text-sm leading-6">
              54709 Willms Station, Suite 350<br />Washington, USA
            </p>
          </div>

          {/* Contact Details */}
          <div className="bg-white border border-green-100 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <p className="font-medium text-gray-800">Get in Touch</p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <p className="flex items-center gap-2">
                <span className="text-primary font-medium">Tel:</span> (+91) 93685-95086
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary font-medium">Email:</span> shakti33123singh@gmail.com
              </p>
            </div>
          </div>

          {/* Careers */}
          <div className="bg-white border border-green-100 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <p className="font-medium text-gray-800">Careers at Curely</p>
            </div>
            <p className="text-gray-500 text-sm mb-4">
              Learn more about our teams and job openings. Join us in making healthcare accessible for everyone.
            </p>
            <button className="bg-primary text-white px-7 py-2.5 rounded-full text-sm font-medium hover:bg-[#3B6D11] transition-colors duration-300">
              Explore Jobs
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;