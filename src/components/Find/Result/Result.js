import React from "react";

import Showcase from "../../Info/Showcase/Showcase";
import Blurb from "../../../components/Info/Blurb/Blurb";

const Result = (props) => {
  return (
    <React.Fragment>
      <Showcase vehicle={props.result.specs} result />
      <Blurb text={props.result.specs.blurb} />
    </React.Fragment>
  );
};

export default Result;
