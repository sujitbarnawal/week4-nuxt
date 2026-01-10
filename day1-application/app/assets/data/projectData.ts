import image1 from "../images/talent_path.png"
import image2 from "../images/job_seek.png"
import image3 from "../images/mern_auth.png"

export interface Project {
  title: string;
  description: string;
  image: string;
  github_link: string;
  live_link: string;
  tech_stack: string[];
}



export const projects: Project[] = [
  {
    title: "TalentPath",
    description:
      "TalentPath is a full-featured MERN stack-based online learning platform that connects students and instructors through intuitive interfaces.",
    image:image1,
    github_link:"https://github.com/sujitbarnawal/LMS",
    live_link:"https://talentpath-frontend.onrender.com",
    tech_stack:["React JS","NodeJS","HTML","Tailwind CSS","JavaScript","ExpressJS","MongoDB","Shadcn UI","Zustand","Esewa"]
  },
  {
    title:"JobSeek",
    description:"JobSeek is a modern job-hunting platform designed to bridge the gap between ambitious job seekers and forward-thinking employers.",
    image:image2,
    github_link:"https://github.com/sujitbarnawal/JobPortal",
    live_link:"https://jobportal-frontend-p4dr.onrender.com",
    tech_stack:["React JS","NodeJS","HTML","Tailwind CSS","JavaScript","ExpressJS","MongoDB","Shadcn UI","Zustand"]
  },
  {
    title:"Mern Authentication App",
    description:"Mern Authentication is a simple implementation of login,signup,forgot password and reset password using mern stack",
    image:image3,
    github_link:"https://github.com/sujitbarnawal/MernAuthenticationApp",
    live_link:"https://mernauthenticationapp-frontend.onrender.com",
    tech_stack:["React JS","NodeJS","HTML","CSS","JavaScript","ExpressJS","MongoDB"]
  }
];
