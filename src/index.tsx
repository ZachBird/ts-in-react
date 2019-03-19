import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./component/auth/test";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);