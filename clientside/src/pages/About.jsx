import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="px-4 sm:px-0">

      {/* ── Header ───────────────────────────────── */}
      <div className="text-center pt-12 pb-2">
        <p className="text-3xl font-medium text-gray-800">About <span className="text-primary">Us</span></p>
        <p className="text-gray-500 text-sm mt-3">Committed to making healthcare simple and accessible.</p>
        <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4"></div>
      </div>

      {/* ── Story Section ────────────────────────── */}
      <div className="my-14 flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:max-w-[380px] rounded-2xl overflow-hidden border border-green-100">
          <img className="w-full object-cover" src={assets.about_image} alt="About Curely" />
        </div>

        <div className="flex flex-col gap-6 md:w-2/4 text-sm text-gray-500 leading-7">
          <p>
            Welcome to <span className="text-primary font-medium">Curely</span>, your trusted partner in managing your healthcare needs conveniently and efficiently. We understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Curely is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Curely is here to support you every step of the way.
          </p>

          <div className="bg-green-50 border-l-4 border-primary rounded-r-xl p-5">
            <p className="text-primary font-medium text-base mb-2">Our Vision</p>
            <p className="text-gray-500 text-sm leading-7">
              Our vision at Curely is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
            </p>
          </div>
        </div>
      </div>

      {/* ── Stats Row ────────────────────────────── */}
      <div className="grid grid-cols-3 gap-4 my-12">
        <div className="text-center bg-green-50 border border-green-100 rounded-xl py-6">
          <p className="text-3xl font-medium text-primary">200+</p>
          <p className="text-gray-500 text-sm mt-1">Verified Doctors</p>
        </div>
        <div className="text-center bg-green-50 border border-green-100 rounded-xl py-6">
          <p className="text-3xl font-medium text-primary">50K+</p>
          <p className="text-gray-500 text-sm mt-1">Happy Patients</p>
        </div>
        <div className="text-center bg-green-50 border border-green-100 rounded-xl py-6">
          <p className="text-3xl font-medium text-primary">30+</p>
          <p className="text-gray-500 text-sm mt-1">Specialities</p>
        </div>
      </div>

      {/* ── Why Choose Us ────────────────────────── */}
      <div className="mb-4">
        <p className="text-2xl font-medium text-gray-800">Why <span className="text-primary">Choose Us</span></p>
        <p className="text-gray-500 text-sm mt-2">Everything you need for a better healthcare experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

        <div className="group border border-green-100 rounded-2xl p-8 flex flex-col gap-4 cursor-pointer hover:bg-primary hover:border-primary transition-all duration-300">
          <div className="w-12 h-12 bg-green-50 group-hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#639922" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-all duration-300">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <p className="font-medium text-gray-800 group-hover:text-white text-base transition-colors duration-300">Efficiency</p>
          <p className="text-gray-500 group-hover:text-white/90 text-sm leading-6 transition-colors duration-300">
            Streamlined appointment scheduling that fits into your busy lifestyle.
          </p>
        </div>

        <div className="group border border-green-100 rounded-2xl p-8 flex flex-col gap-4 cursor-pointer hover:bg-primary hover:border-primary transition-all duration-300">
          <div className="w-12 h-12 bg-green-50 group-hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#639922" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-all duration-300">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <p className="font-medium text-gray-800 group-hover:text-white text-base transition-colors duration-300">Convenience</p>
          <p className="text-gray-500 group-hover:text-white/90 text-sm leading-6 transition-colors duration-300">
            Access to a network of trusted healthcare professionals in your area.
          </p>
        </div>

        <div className="group border border-green-100 rounded-2xl p-8 flex flex-col gap-4 cursor-pointer hover:bg-primary hover:border-primary transition-all duration-300">
          <div className="w-12 h-12 bg-green-50 group-hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#639922" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-all duration-300">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
          <p className="font-medium text-gray-800 group-hover:text-white text-base transition-colors duration-300">Personalization</p>
          <p className="text-gray-500 group-hover:text-white/90 text-sm leading-6 transition-colors duration-300">
            Tailored recommendations and reminders to help you stay on top of your health.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;