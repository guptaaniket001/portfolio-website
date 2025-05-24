// src/data/experienceData.js
export const experienceData = [
    {
      id: 1,
      company: "Microsoft",
      position: "Software Engineer",
      location: "Hyderabad, India",
      period: "Jul 2023 - Present",
      logo: "/src/assets/images/microsoft-logo.png", // Add this logo to your assets
      accomplishments: [
        "Improved the site coherence of the Teams Admin Center (TAC) by 15% by adding features such as export, search, and sort, enhancing the admin user experience on the portal.",
        "Led to an increase in revenue from the TAC from $1.2 billion to $2 billion. Furthermore involved in the project to increase the revenue to $5 billion.",
        "Enhanced the test coverage from 28% to 100% for all areas of TAC-Voice, ensuring no customer-notified sev2 incidents.",
        "Facilitated the migration of the end-to-end testing process from the Protractor framework to the Playwright framework, improving efficiency for new E2E tests.",
        "Gained promotion within a year at Microsoft going from L59 to L60 Software Engineer."
      ],
      technologies: ["React", "TypeScript", "Playwright", "Protractor"]
    },
    {
      id: 2,
      company: "Microsoft",
      position: "Software Engineer Intern",
      location: "Bengaluru, India",
      period: "May 2022 - Jul 2022",
      logo: "/src/assets/images/microsoft-logo.png",
      accomplishments: [
        "Worked on gRPC and gRPC streaming integrated CSO with gRPC streaming, and performed ODATA operations in gRPC."
      ],
      technologies: ["C#", "ASP.NET Core", "gRPC", "Protobufs"]
    },
    {
      id: 3,
      company: "Microsoft",
      position: "Mentee at Engage",
      location: "Virtual",
      period: "Jun 2021 - Jul 2021",
      logo: "/src/assets/images/microsoft-logo.png",
      accomplishments: [
        "Developed a video-calling Android application using Jitsi Programmable Video SDK and Android Studio. The application included features such as chat functionality, screen sharing, and user authentication via Firebase."
      ],
      technologies: ["Java", "XML", "Android Studio", "Firebase"]
    }
  ];