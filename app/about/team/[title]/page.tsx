import React from "react";

const DynamicTeampage = async ({ params }) => {
  const title = (await params).title;
  return <div>Team Name Page {title}</div>;
};

export default DynamicTeampage;
