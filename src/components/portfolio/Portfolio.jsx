import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/p1.png",
    title: "Stream Sphere",
    desc: `Stream Sphere is a full-stack streaming platform built with Next.js for both frontend and backend. It enables users to generate a unique stream key for live streaming via software like OBS Studio. The platform is designed to provide a seamless live streaming experience for both content creators and viewers.

    Key features include:
    ● Real-time live streaming: Stream content in real time using a unique stream key.
    ● Follow/unfollow options: Users can follow or unfollow their favorite streamers.
    ● Real-time live chat: Engage with viewers through a real-time chat system.`,
    link: "https://stream-sphere-eight.vercel.app/",
  },
  {
    id: 2,
    img: "/p2.png",
    title: "Docs",
    desc: `Docs is a powerful, real-time collaborative document editing platform inspired by Google Docs. Built using Liveblocks for seamless real-time synchronization, it allows multiple users to work on the same document simultaneously, with changes reflected instantly for all collaborators.
    
    Key features include:
    ● Real-time collaboration: Work together with team members in real time.
    ● Team creation: Create teams and invite members to collaborate on shared documents.
    ● Admin roles: Assign admin roles to manage team settings, user permissions, and document access.`,
    link: "https://docs-xi-kohl-85.vercel.app/",
  },
  {
    id: 3,
    img: "/p3.png",
    title: "Blogify",
    desc: `Blogify is a modern blogging platform that empowers users to create, publish, and manage blog posts seamlessly. Built with         TypeScript, React, Hono, Cloudflare, and Prisma, it leverages a serverless architecture for scalability and cost efficiency.

    Key Features
    ● User Authentication: Sign up and log in securely to manage personal blog posts.
    ● Blog Creation & Management: Write, edit, and publish engaging content effortlessly.
    ● Serverless Backend: Utilizes Hono, a lightweight JavaScript runtime, for high-performance serverless functionality.
    ● Cloudflare Deployment: Hosted on Cloudflare, ensuring fast, global delivery with a pay-per-click (PPC) monetization model.`,
    link: "https://blogify-liard.vercel.app/",
  },
  {
    id: 4,
    img: "/p4.png",
    title: "iDragon",
    desc: `
    iDragon is a JavaScript-based game where players control a dragon and avoid incoming obstacles by jumping. The speed of obstacles increases every second, making the game progressively more challenging. Built with HTML5, CSS, and vanilla JavaScript, iDragon offers a fast-paced and addictive gaming experience.

    Key features include:
    ● Dynamic Obstacles: Obstacles speed up every second, increasing the difficulty.
    ● Simple Controls: Jump with a single tap or click to avoid obstacles.
    ● Score Tracking: Track your high score and aim to beat it.
    ● Responsive Design: Play seamlessly on both desktop and mobile devices.`,
    link: "https://anonymousfpp.github.io/Dragon-Ball-Z/",
  },
  {
    id: 5,
    img: "/p5.png",
    title: "Animated Portfolio",
    desc: `This animated portfolio website showcases my education, professional experience, projects, problem-solving skills, and technical expertise in a visually engaging and interactive way.

    Key features include:
    ● Interactive Animations: Smooth scroll-triggered animations and transitions for an engaging UX.
    ● Professional Experience: Details about the companies I've worked with, my roles.
    ● Project Showcase: A dedicated section for my projects, complete with descriptions, images, and live links.
    ● Problem-Solving Skills: A section highlighting my expertise in Data Structures and Algorithms (DSA).`,
    link: "https://portfolio-abhays-projects-caa0dc14.vercel.app/",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link} target="_blank" rel="noopener noreferrer" >
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem
          item={{
            ...item,
            desc: item.desc.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            )),
          }}
        />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
