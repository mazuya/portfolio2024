import React, { useState } from "react";
//import myLogo from "/mylogo.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
const skillsContent = [
  "HTML",
  "CSS, SCSS ,Tailwind",
  "Javascript",
  "Typescript",
  "React",
  "Next.js",
  "Node.js",
  "express",
  "MongoDB",
  "SQL mySQL",
  "Prisma ORM",
  "Python",
  "Docker",
  "GitHub",
];

function MySkill() {
  const [isOpenJuniorDev, setIsOpenJuniorDev] = useState(true);
  const [isOpenInternship, setIsOpenInternship] = useState(true);

  const toggleJuniorDevContent = () => {
    setIsOpenJuniorDev(!isOpenJuniorDev);
  };

  const toggleInternshipContent = () => {
    setIsOpenInternship(!isOpenInternship);
  };
  return (
    <div className=" tracking-widest bg-[#F8F8F8]  ">
      <div className="mt-20 max-w-[80%] lg:max-w-[60%] mx-auto flex flex-col items-center justify-center ">
        <h1 className="font-Barlow uppercase font-semibold  text-2xl md:text-4xl">
          programming skills & experience
        </h1>
        <section className="w-[350px] text-[0.7rem] md:text-base md:w-[900px] flex-wrap flex gap-1 md:gap-3 mt-5 md:mt-10 font-Poppins items-center justify-center border-b-[1px] pb-5 border-solid border-black">
          {skillsContent.map((skill, index) => (
            <button
              key={index}
              className={`py-2 px-3 font-medium hover:scale-105 hover:bg-slate-500 hover:text-white duration-300 ${
                index % 2 === 0 ? "bg-[#EFDADF]" : "bg-[#D9D9D9]"
              }`}
            >
              {skill}
            </button>
          ))}
        </section>

        <div className="my-10 w-full md:w-[900px] flex flex-col gap-8">
          {/* Junior dev */}

          <section className="shadow-lg bg-black text-white  w-full h-[500px] md:w-[900px] md:h-[300px] flex md:flex-row flex-col relative">
            <div className="md:w-[50%] w-[full] h-[200px] md:h-full bg-red-200 relative">
              <Image
                src={"/tlo3.png"}
                fill
                alt="pci of junior dev"
                className="overflow-hidden object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 max-w-[26rem] items-center p-10 md:p-8 md:ml-6 md:mt-5 md:mb-0 pb-16 md:pb-0 pl-14 ">
              <div className="flex items-start flex-col gap-2 ">
                <h1 className="font-bold text-2xl text-[#F783A0]">
                  Junior developer
                </h1>
                <p className="text-xs">
                  making website for NRRU client website
                </p>
                <p className="text-xs mt-3">
                  Engaged as a key member of the development team at Tatugacamp,
                  specializing in front-end solutions for the Nakhon Ratchasima
                  Rajabhat University (NRRU) client website
                </p>
                <button
                  onClick={toggleJuniorDevContent}
                  className="flex items-center gap-5 font-semibold py-3 px-14 absolute right-0 bottom-0 text-black hover:bg-[#da8ca1] duration-300"
                  style={{
                    backgroundColor: isOpenJuniorDev ? "#CBD5E0" : "#EEA5B8",
                  }}
                >
                  {isOpenJuniorDev ? "Less info" : "More info"}
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </section>
          {isOpenJuniorDev && (
            <div className=" p-5 pt-8 md:p-10 border-[1.5px] flex flex-col border-solid border-slate-600 rounded-md">
              <p className="font-semibold text-xl mb-3">
                Position : Junior developer
              </p>

              <p className="font-semibold">NEXT.js with MERN stack </p>
              <p>Duration : April - June</p>

              <p className="text-[0.8rem] mt-3">
                As a junior developer at Tatugacamp, I played a crucial role in
                the development team, specializing in front-end solutions for
                the Nakhon Ratchasima Rajabhat University (NRRU) client website.
                From the initial concept and design phases, I focused on
                creating user-friendly and visually appealing interfaces.
                Utilizing the latest front-end technologies, I ensured the
                website's responsiveness across various devices for optimal
                performance.
              </p>
            </div>
          )}

          {/* Intern */}
          <section className="shadow-lg bg-black text-white w-full h-[400px] md:w-[900px] md:h-[300px] flex flex-col md:flex-row relative">
            <div className="flex flex-col gap-3  md:w-[31rem] items-center p-8 md:mt-5 md:-ml-8 relative order-2 md:order-1">
              <div className="flex items-start flex-col gap-2 ">
                <h1 className="font-bold text-xl md:text-2xl text-[#F783A0]">
                  Fullstack internship
                </h1>
                <p className="text-xs">at Tatugacamp</p>
                <p className="text-xs mt-3">December2023 - April 2024</p>
                <button
                  onClick={toggleInternshipContent}
                  className={`flex items-center gap-5 font-semibold w-[220px] py-3 px-14 absolute -bottom-12 md:bottom-0 right-0 text-black hover:bg-[#da8ca1] duration-300`}
                  style={{
                    backgroundColor: isOpenInternship ? "#CBD5E0" : "#EEA5B8",
                  }}
                >
                  {isOpenInternship ? "Less info" : "More info"}
                  <FaArrowRight />
                </button>
              </div>
            </div>

            <div className="w-full md:w-[50%] h-[200px] md:h-full bg-red-200 relative order-1 md:order-2">
              <Image
                src={"/tatuga.png"}
                fill
                alt="pci of junior dev"
                className="overflow-hidden object-cover"
              />
            </div>
          </section>

          {isOpenInternship && (
            <div className=" p-5 pt-8 md:p-10 border-[1.5px] flex flex-col border-solid border-slate-600 rounded-md">
              <h1 className="font-bold">
                Fullstack developer Internship at Tatugacamp
              </h1>
              <p className="text-[0.8rem] mt-3">
                My main responsibility is working on the Front-end, developing
                the company's main website using Next.js (React Typescript), and
                undertaking outsourced projects for school and farmer websites.
                Additionally, I have had the opportunity to work on Backend
                tasks, handling various APIs, services, and even developing
                Dashboards.
              </p>

              <div className="w-full bg-slate-200 my-5   ">
                <Swiper
                  slidesPerView={1}
                  pagination={true}
                  modules={[Pagination]}
                  spaceBetween={30}
                >
                  <SwiperSlide>
                    <div className="min-h-[10rem] md:min-h-[25rem] flex items-center justify-center relative ">
                      <Image
                        src={"/tatuga2.png"}
                        fill
                        alt="pci of junior dev"
                        className="overflow-hidden object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="min-h-[10rem] md:min-h-[25rem] flex items-center justify-center relative ">
                      <Image
                        src={"/tatuga3.png"}
                        fill
                        alt="pci of junior dev"
                        className="overflow-hidden object-cover"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="min-h-[10rem] md:min-h-[25rem] flex items-center justify-center relative ">
                      <Image
                        src={"/tatuga4.png"}
                        fill
                        alt="pci of junior dev"
                        className="overflow-hidden object-cover"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <p className="text-[0.8rem] mt-5">
                <span className="font-bold">Convert design to code:</span> I'm
                most responsible for converting designs from Design team into
                code and deploying my work onto the production website.
                <Link
                  href={"https://tatugacamp.com/classroom"}
                  className="underline text-blue-800 md:mx-3 flex flex-wrap"
                >
                  https://tatugacamp.com/classroom
                </Link>
                This website serves as a classroom management system, similar to
                Google Classroom, for Thailand, with over 100,000 users. I use
                the NEXT framework to create the client-side, improve webpage
                performance, and migrate old React JavaScript to React
                TypeScript.
              </p>
              <p className="text-[0.8rem] mt-5">
                <span className="font-bold">
                  Implement secure login and registration system :
                </span>{" "}
                This includes creating database queries with MongoDB, and
                creating efficient, user-friendly interfaces for user
                authentication and data submission.
              </p>
              <p className="text-[0.8rem] mt-5">
                <span className="font-bold">
                  UX/UI design & convert my own design to code :
                </span>{" "}
                Collaborated with design teams to create the new client page and
                user-friendly interfaces based on Figma designs. Successfully
                converted design mockups into responsive code development.
              </p>
              <p className="text-[0.8rem] mt-5">
                <span className="font-bold">Version control with GitHub :</span>{" "}
                Utilizing Git and GitHub enables collaborative development, code
                tracking, and project management with my dev team.
              </p>
            </div>
          )}

          {/* 3rd prize */}
          <div className="w-full flex flex-col md:flex-row bg-black h-[70rem] md:h-[38rem] shadow-lg ">
            <div className="flex w-full md:w-[50%] h-full items-center justify-center text-white flex-col px-7 md:px-10">
              <h1 className="text-[#F783A0] text-base md:text-2xl font-bold">
                3rd place in Chula High Tech Sandbox competition
              </h1>
              <p className="mt-5 text-[0.65rem] md:text-xs">
                The Chula High Tech Sandbox competition is a contest where
                participants within the university come together to do anything
                related to tech, whether it's applications or websites. My team
                secured the 3rd prize with a project called 'Hueme.'
                Furthermore, the competition featured distinguished guest
                lecturers, such as executives and high-level professionals, who
                provided feedback on our projects and ideas for further
                development and real-life applications.
              </p>
              <p className="mt-5 text-[0.65rem] md:text-xs">
                Throughout the competition, there were technology training
                sessions and seminars held weekly. We gained both knowledge and
                friendships during this program. After receiving the award, we
                are currently working on further developing the design to make
                it fully functional in the future.
              </p>
            </div>
            <div className="flex w-full md:w-[50%] h-full items-center justify-center text-white bg-slate-300 relative">
              <Image
                src={"/hp.png"}
                fill
                alt="pci of junior dev"
                className="overflow-hidden object-cover"
              />
            </div>
          </div>

          {/* Mazuya */}
          <div className="w-full flex flex-col shadow-lg md:flex-col-reverse">
            <div className="w-full h-[23rem] md:h-[21rem] bg-black  flex flex-col justify-center px-5 md:px-16">
              <h1 className="text-[#F783A0] text-base md:text-2xl font-bold">
                Created commission website for freenlance artist
              </h1>
              <Link
                href={"https://mazuya-cms.netlify.app/"}
                className="underline text-blue-200 text-xs md:text-base mt-8 flex flex-wrap"
              >
                https://mazuya-cms.netlify.app/
              </Link>
              <p className="text-white text-[0.65rem] md:text-[0.8rem] mt-3">
                I've developed a commission information website for freelance
                artists using NEXT.js, which allows clients to view pricing,
                detailed commission information, and check their place in the
                queue. At first, I created the website for myself as a freelance
                artist and have provided it to over 100 clients for real use.
                Additionally, I am currently developing websites for other
                artists, covering everything from designing UX/UI to converting
                it into code and then deploying it for live use.
              </p>
            </div>
            <div className="w-full bg-[#EEEBE6]">
              <Swiper
                slidesPerView={1}
                pagination={true}
                modules={[Pagination]}
                spaceBetween={30}
              >
                <SwiperSlide>
                  <div className="min-h-[15rem] md:min-h-[26rem] flex items-center justify-center relative ">
                    <Image
                      src={"/mzy1.png"}
                      fill
                      alt="pci of junior dev"
                      className="overflow-hidden object-cover"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="min-h-[15rem] md:min-h-[26rem] flex items-center justify-center relative ">
                    <Image
                      src={"/mzy2.png"}
                      fill
                      alt="pci of junior dev"
                      className="overflow-hidden object-cover"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="min-h-[15rem] md:min-h-[26rem] flex items-center justify-center relative ">
                    <Image
                      src={"/mzy4.png"}
                      fill
                      alt="pci of junior dev"
                      className="overflow-hidden object-cover"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySkill;
