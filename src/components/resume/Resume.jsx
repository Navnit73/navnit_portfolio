import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="container m-auto mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className="text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card */}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className="w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className="relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className="flex flex-col gap-5 sm:gap-5 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                {/* Experience 1 */}
                <div className="flex flex-col gap-1">
                  <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                    Frontend Developer
                  </h1>
                  <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
                    Full-time Remote
                  </span>
                  <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                    August 2024 - Present
                  </span>
                  <p className="text-[.9rem] text-justify break-words text-gray-500">
                    As a full-time Vue.js front-end developer, I have been involved in 
                    designing and implementing user-friendly interfaces using Vue.js, Vuetify, 
                    Vuex, Router, and CSS. Collaborated with cross-functional teams to develop 
                    scalable and responsive web applications. Focused on performance optimization 
                    and seamless user experience.
                  </p>
                </div>

                {/* Experience 2 */}
                <div className="flex flex-col gap-1 sm:gap-1">
                  <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                    Web Developer
                  </h1>
                  <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
                    Topper World
                  </span>
                  <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                    June 2023 - January 2024
                  </span>
                  <p className="text-[.9rem] text-justify break-words text-gray-500">
                    During my internship at TopperWorld as a front-end web developer, I gained 
                    invaluable hands-on experience in crafting user-centric interfaces. Collaborating 
                    with the design team, I translated concepts into responsive layouts using HTML, 
                    CSS, and JavaScript. Through optimizing website performance and implementing 
                    interactive features, I honed my coding skills and adapted to dynamic project 
                    requirements. This immersive journey not only enhanced my technical proficiency 
                    but also cultivated a deeper appreciation for user experience design, setting a 
                    strong foundation for my future in web development.
                  </p>
                </div>
              </div>
            </div>
          </fieldset>
        </div>

        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className="w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className="relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className="flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.Tech, Computer Science
                </h1>
                <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  School of Management Science
                </span>
                <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2020 - Year 2024
                </span>
                <p className="text-[.9rem] text-justify text-gray-500">
                  Nurtured within the School of Management Science, my B.Tech CSE odyssey blends 
                  technology and business acumen. Innovative curriculum, guided by adept faculty, 
                  seamlessly fuses coding finesse with strategic insight. Interdisciplinary ventures, 
                  hackathons, and global connections shape a holistic skill set, priming me for tech-driven 
                  business realms. This synergy readies me to innovate, collaborate, and lead in our 
                  ever-evolving digital landscape.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
