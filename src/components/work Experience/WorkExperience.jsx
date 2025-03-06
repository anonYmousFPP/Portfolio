import React from 'react';
import './WorkExperience.css'; // Import the CSS file

const WorkExperience = () => {
  const workExperiences = [
    {
      id: 1,
      company: "Appinventiv",
      role: "Software Trainee",
      duration: "Mar 2025 - Present",
      description: "As a Software Trainee at Appinventiv, I actively contributed to the development and maintenance of robust web applications using Node.js. Collaborated with cross-functional teams to design, develop, and deploy scalable software solutions. Gained hands-on experience in backend development, API integration, and database management. Additionally, participated in code reviews, debugging, and performance optimization to ensure high-quality deliverables.",
      logo: "./appinventivLogo.png",
    },
    {
      id: 2,
      company: "Geek Room",
      role: "DSA Head",
      duration: "Feb 2024 - Feb 2025",
      description: "Leading a team of enthusiasts to solve Data Structures and Algorithms (DSA) problems on a regular basis. Organized and participated in coding contests on platforms like LeetCode, Codeforces, and CodeChef. Mentored peers to improve problem-solving skills and achieve better rankings in competitive programming.",
      logo: "./geekRoom.jpeg"
    },
  ];

  return (
    <div className="work-experience-container">
      <h2>Work Experience</h2>
      {workExperiences.map((experience) => (
        <div key={experience.id} className="experience-card">
          <img src={experience.logo} />
          <h3>{experience.role}</h3>
          <h4>{experience.company}</h4>
          <p className="duration">{experience.duration}</p>
          <p className="description">{experience.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;