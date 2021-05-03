import React, { useEffect } from "react";

const Result = (props) => {
  useEffect(() => {
    props.dispatchScore();
  }, [props]);

  return <div></div>;
};

export default Result;
