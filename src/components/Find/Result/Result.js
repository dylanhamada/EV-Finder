import React from "react";

import Showcase from "../../Info/Showcase/Showcase";
import Blurb from "../../Info/Blurb/Blurb";
import Specs from "../../Info/Specs/Specs";

const Result = (props) => {
  return (
    <React.Fragment>
      <Showcase vehicle={props.result.specs} result />
      <Blurb text={props.result.specs.blurb} />
      <Specs specs={props.result.specs} />
    </React.Fragment>
  );
};

export default Result;
