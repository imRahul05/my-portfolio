import FinSageImg from '../assets/Projects/FinSage.png';
import pillpalImg from '../assets/Projects/pillpal.png';
import crmsImg from '../assets/Projects/crms.png';
import omsImg from '../assets/Projects/oms.png';
import mnsIMG from '../assets/Projects/mns.png'
import FriendLoopImg from '../assets/Projects/FriendLoop.png';
import bloggyImg from '../assets/Projects/bloggy.png';
import communityGifImg from '../assets/Projects/community.gif';

// Define the project type for type safety
export interface ProjectType {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  url: string;
  image: string;
  video?: string;
  category: string;
}

export const projects: ProjectType[] = [
  {
    id: "finsage",
    name: "FinSage AI",
    description: "A better way to manage your finances. Take control of your financial journey with our comprehensive suite of tools.",
    technologies: ["React", "Web", "JS","FireBase"],
    github: "https://github.com/imRahul05/Fin_service",
    url: "https://finsage-ai.vercel.app/",
    image: FinSageImg,
    video: 'https://res.cloudinary.com/divkfbddw/video/upload/v1756879926/Screen_Recording_2025-09-03_at_11.40.15_AM_qxxhxn.mov',
    category: "Web"
  },{
      id:"MNS",
      name: "School Management System",
      description: "A comprehensive school management system and website designed to serve various stakeholders including students, parents, teachers, and administrators. The application includes both public-facing pages and authenticated portals for different user types.",
      technologies: ["MERN"],
    //   github: "https://github.com/imRahul05/mansarovar_public_school",
      url: "https://mansarovar-public-school-green.vercel.app/",
      // stars: 2,
      image: mnsIMG,
      video:"https://res.cloudinary.com/divkfbddw/video/upload/v1756874792/Screen_Recording_2025-08-06_at_12.28.02_PM_j0yhhi.mov",
      category: "Education"
    },
  {
    id: "pillpal",
    name: "PillPal AI",
    description: "PillPal helps you manage medications, track doses, and stay on top of refills with smart reminders and a simple tracking system.",
    technologies: ["React", "Web", "JS", "FireBase"],
    github: "https://github.com/imRahul05/PillPal",
    url: "https://pill-pal-ai.vercel.app/",
    image: pillpalImg,
    video: 'https://res.cloudinary.com/divkfbddw/video/upload/v1756880629/Screen_Recording_2025-09-03_at_11.51.59_AM_yxxqql.mov',
    category: "Healthcare"
  },
  {
    id: "crms",
    name: "CRMS - Candidate Referral System",
    description: "A comprehensive web application for managing employee referrals. Employees can submit and track referrals while admins manage the hiring pipeline.",
    technologies: ["MERN", "Tailwind", "JWT"],
    github: "https://github.com/imRahul05/crms-MERN",
    url: "https://crms-frontend-theta.vercel.app",
    image: crmsImg,
    category: "Web"
  },
  {
    id: "oms",
    name: "OMS - Order Management System",
    description: "A web app for managing orders with role-based authentication. Users can place orders, staff/admins can manage them via dashboards.",
    technologies: ["MERN", "Vite", "Tailwind", "JWT"],
    github: "https://github.com/imRahul05/Order_management_system",
    url: "https://order-management-system-inky-alpha.vercel.app/",
    image: omsImg,
    category: "E-commerce"
  },
  {
    id: "friendloop",
    name: "FriendLoop",
    description: "Facebook-inspired web app with authentication, posting, notifications, and interactive UI components.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/imRahul05/masai_WEB205_Unit_3_Facebook_clone",
    url: "https://fb-clone-masai.netlify.app/",
    image: FriendLoopImg,
    category: "Web"
  },
  {
    id: "bloogyy",
    name: "Bloogyy",
    description: "Blog site using React, Node.js, Express, MongoDB, and Firebase for real-time updates and authentication. Includes commenting and upvoting.",
    technologies: ["MERN", "Firebase"],
    github: "https://github.com/imRahul05/Blog_frontend",
    url: "https://bloogyy.vercel.app/",
    image: bloggyImg,
    category: "Blog Platform"
  },
  {
    id: "community",
    name: "Community Care",
    description: "Mobile app built with Flutter + Firebase for Smart India Hackathon 2023. Lets users post local municipal issues like sanitation directly to authorities.",
    technologies: ["Flutter", "Mobile", "Firebase"],
    github: "https://github.com/imRahul05/Community-Care",
    url: "https://communitycarev4.web.app/",
    image: communityGifImg,
    category: "Mobile App"
  }
];
