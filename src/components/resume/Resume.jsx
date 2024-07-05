import React from "react";

const Resume = () => {
  const downloadResume = () => {
    // Path to your resume PDF file
    const resumeUrl = "/path/to/your/resume.pdf"; 
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="resume" className="container m-auto mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      {/* Download button */}
      <div className="flex justify-center">
        <button
          onClick={downloadResume}
          className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-600 transition duration-300"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
