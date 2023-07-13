import React from "react";
import { useParams } from "react-router-dom";

const DetailPage = function DetailPage() {
  const { moduleId, url } = useParams();
  console.log("moduleId", moduleId, url, useParams);

  return (
    <div>
      <h1>Detail Page</h1>
    </div>
  );
};

export default DetailPage;
