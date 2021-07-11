import React from "react";
import { useParams } from "react-router-dom";

const Details = (props) => {
  let { vehicle } = useParams();

  return <div>Now showing post {vehicle}</div>;
};

export default Details;
