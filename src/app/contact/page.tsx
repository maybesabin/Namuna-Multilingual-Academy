export default function Page() {
  return (
    <>
      {/* Map */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d901387.4223294647!2d81.76062546510204!3d28.053662226540087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39943d1035fcc47b%3A0x8e11a9b5adb38a9f!2sN.C%20Namuna%20English%20School!5e0!3m2!1sen!2snp!4v1746857025416!5m2!1sen!2snp" className="border-0 w-full h-64" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      {/* Card */}
      <div className="w-full rounded-lg bg-blue-600 text-white p-6 flex flex-col items-center gap-2 text-center">
        <h3 className="md:text-2xl text-lg font-semibold">
          Need Immediate Assistance?
        </h3>
        <p className="md:text-sm text-xs text-neutral-200">
          For urgent matters, please call our main office during business hours.
        </p>
        <button className="mt-2 cursor-pointer bg-white text-blue-600 transition-all font-medium rounded-md md:text-sm text-xs px-4 py-2.5">
          Call Now: (+977) 9829100636
        </button>
      </div>
    </>
  );
}
