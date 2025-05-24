// src/data/projectsData.js
export const projectsData = [
    {
      id: "fraud-news-detection",
      title: "Fraudulent News Detection",
      description: "Enhanced fake news detection using ML algorithms on a bilingual dataset in English (American) and Hindi.",
      thumbnail: "/src/assets/images/project-thumbnails/fake-news-detection.png",
      period: "Feb 2023 - May 2023",
      category: "Machine Learning",
      details: {
        overview: "This project aimed to enhance fake news detection using a dataset in English (American) and Hindi, evaluating multiple machine learning algorithms for optimal performance.",
        accomplishments: [
          "Evaluated Multinomial Naive Bayes, Logistic Regression, Bernoulli Naive Bayes, and Bidirectional LSTM on the dataset.",
          "Achieved 86% average accuracy with Logistic Regression and Bernoulli Naive Bayes.",
          "Analyzed textual complexity, stylometric, and psychological features for effective fake news detection.",
          "Drafted a detailed manuscript of the project that was published in the conference MECO 2023."
        ],
        technologies: ["Python", "Machine Learning", "NLP", "TensorFlow", "scikit-learn"],
        links: [
          {
            title: "IEEE Publication",
            url: "#"
          }
        ]
      }
    },
    {
      id: "path-visualizer",
      title: "Path Visualizer",
      description: "An interactive web application that visualizes pathfinding algorithms such as Dijkstra's, A*, and BFS.",
      thumbnail: "/src/assets/images/project-thumbnails/path-visualizer.png",
      period: "October 2020",
      category: "Web Development",
      details: {
        overview: "Developed an interactive web application that visualizes pathfinding algorithms, enhancing understanding of algorithms and data structures through practical implementation.",
        accomplishments: [
          "Implemented Dijkstra's, A*, and Breadth-First Search (BFS) algorithms with visual representation.",
          "Created an interactive grid for users to place start points, endpoints, and barriers.",
          "Developed animated visualization to show how each algorithm explores the grid.",
          "Implemented various grid configurations to demonstrate algorithm efficiency in real time."
        ],
        technologies: ["React", "JavaScript", "CSS", "Data Structures & Algorithms"],
        links: [
          {
            title: "GitHub",
            url: "#"
          },
          {
            title: "Live Demo",
            url: "#"
          }
        ]
      }
    },
    {
      id: "microsoft-hackathon",
      title: "Bionic Text Converter",
      description: "Microsoft Global Hackathon winning project for converting text to bionic format to improve reading speed and efficiency.",
      thumbnail: "/src/assets/images/project-thumbnails/bionic-text.png",
      period: "September 2023",
      category: "Hackathon",
      details: {
        overview: "A project for the Microsoft Global Hackathon that converts regular text to Bionic text format for Edge and M365, helping people read faster and more efficiently.",
        accomplishments: [
          "Developed an algorithm to convert regular text to Bionic text format",
          "Conducted user studies and surveys within Microsoft to validate the solution",
          "Created a browser extension for Microsoft Edge",
          "Published a complete study with Microsoft documenting the benefits and implementation",
          "Won the Microsoft Global Hackathon in September 2023"
        ],
        technologies: ["JavaScript", "Edge Extension API", "M365 Integration", "UX Research"],
        links: []
      }
    }
];