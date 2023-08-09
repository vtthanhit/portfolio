import project1 from "../../asset/image/project_1.png";
import project2 from "../../asset/image/project_2.png";
import project3 from "../../asset/image/project_3.jpg";

const projectList = [
  {
    image: project1,
    name: "Smart ticket",
    description: "A web application that helps buildings and parking lots manage vehicle cards and apartment entrance cards in a smart and convenient way.",
    languages: ["ReactJS", "Material UI"],
  },
  {
    image: project2,
    name: "Health care",
    description: "A web application that helps pharmacies manage medication status, medical conditions. The application helps pharmacists take care of patients via LINE chat.",
    languages: ["NestJs", "TypeScript", "PostgreSQL", "GraphQL"],
  },
  {
    image: project3,
    name: "Government support",
    description: "A website system to assist the government in managing subsidy projects. The application helps administrative staff to handle claims faster and more efficiently. Help improve everyday manual workflows with technology.",
    languages: ["NestJs", "TypeScript", "SQL", "RestAPI"],
  },
]

export default projectList;
