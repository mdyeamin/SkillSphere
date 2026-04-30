import React from "react";

const ReadyToTransForm = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-[#7a3f00] to-[#b4690e] rounded-[32px] md:rounded-[48px] p-10 md:py-16 md:px-20 text-center text-white shadow-xl">
          {/* Headline - specific to image_e21f07.png */}
          <h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">
            Ready to transform your career?
          </h2>

          <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Join 50,000+ professionals who are already learning on SkillSphere.
            Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="w-full sm:w-auto bg-white text-[#7a3f00] px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all active:scale-95">
              Get Started for Free
            </button>

            <button className="w-full sm:w-auto bg-[#ff8c00] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#e67e00] transition-all shadow-md active:scale-95">
              Browse Catalog
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToTransForm;
