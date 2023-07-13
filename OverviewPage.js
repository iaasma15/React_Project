import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      setModules(data.modules.slice(0, 10));
    } catch (error) {
      console.error("Error fetching modules:", error);
    }
  };

  return (
    <div>
      <h1>Overview Page</h1>
      <ul>
        {modules.map((module) => (
          <li key={module.uid}>
            <Link to={`/detail/${encodeURIComponent(module.url)}`}>
              <h3>{module.title}</h3>
              <p>{module.summary}</p>
              <img src={module.social_image_url} alt={module.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OverviewPage;
