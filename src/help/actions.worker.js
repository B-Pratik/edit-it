import * as actions from "./actions";

onmessage = ({ data: { action, data } }) =>
  postMessage({ data: actions[action](data) });
