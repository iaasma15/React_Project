import React, { useEffect, useState } from "react";

function OverviewPage() {
  const [modules, setModules] = useState([]);
  useEffect(() => {
    fetchModules();
  }, []);

  const fetchModules = async () => {
    try {
      const response = await fetch("https://learn.microsoft.com/api/catalog/");
      const data = await response.json();
      console.log("Data", data.modules.slice(0, 1));
      setModules(data.modules);
    } catch (error) {
      console.error("Error fetching modules:", error);
    }
  };
  const handleClick = () => {
    console.log("Anchor element clicked");
  };

  return (
    <div>
      <h1 style={{ color: "blue" }}>List of Modules</h1>
      <ul>
        {modules.map((module) => (
          <li key={module.uid}>
            <a
              onClick={(event) => handleClick(event, module.url)}
              href={`${module.url}`}
              target="_blank"
              rel="noreferrer"
            >
              <h3>{module.title}</h3>
            </a>
            <p>{module.summary}</p>
            <img src={module.social_image_url} alt={module.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OverviewPage;
