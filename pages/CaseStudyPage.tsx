import React from "react";
import CaseStudyBlock from "../components/case-study-block";

const CaseStudyPage = () => {
  const caseStudies = [
    {
      title: "Case Study 1",
      image: "/case-study-1.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, justo sed consectetur aliquet, mauris tellus lacinia neque, sit amet ultrices velit nunc at ligula. Nulla facilisi. Phasellus auctor, nunc et tincidunt convallis, nunc nisl cursus nisl, et lacinia nulla mauris sit amet tellus. Sed vel purus id tellus malesuada tincidunt. Sed et massa a dolor pulvinar pretium. Integer euismod, sapien a tincidunt tincidunt, nibh enim venenatis dolor, sit amet lacinia arcu ante ac metus. Vivamus et turpis at urna elementum tristique. Donec vitae justo at enim pharetra malesuada. Suspendisse potenti. Nulla facilisi. Phasellus auctor, nunc et tincidunt convallis, nunc nisl cursus nisl, et lacinia nulla mauris sit amet tellus. Sed vel purus id tellus malesuada tincidunt. Sed et massa a dolor pulvinar pretium. Integer euismod, sapien a tincidunt tincidunt, nibh enim venenatis dolor, sit amet lacinia arcu ante ac metus. Vivamus et turpis at urna elementum tristique. Donec vitae justo at enim pharetra malesuada. Suspendisse potenti.",
    },
    // Add more case studies here
  ];

  return (
    <div className="case-study-page">
      <h1>Case Studies</h1>
      <div className="case-studies-container">
        {caseStudies.map((study, index) => (
          <CaseStudyBlock
            key={index}
            title={study.title}
            image={study.image}
            content={study.content}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudyPage;