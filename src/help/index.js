import * as actions from "./actions";
import Worker from "./actions.worker.js";

let worker;
const workerStack = [];
if (typeof window !== "undefined") {
  if (window.Worker) {
    worker = new Worker();
    worker.onmessage = ({ data: { data } }) => {
      workerStack.shift()(data);
    };
  }
}

export const performAction = async (action, data) => {
  if (worker) {
    return new Promise((resolve) => {
      worker.postMessage({ action, data });
      workerStack.push(resolve);
    });
  }
  return Promise.resolve(actions[action](data));
};
