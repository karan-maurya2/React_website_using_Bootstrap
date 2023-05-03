import React from "react";

import MadeGoal from "./User-1";
import MissedGoal from "./User-2";

const Football = (props) => {
  const goalDone = props.isGoal;

  if (goalDone) {
    return <MadeGoal />;
  } else {
    return <MissedGoal />;
  }
};
export default Football;
