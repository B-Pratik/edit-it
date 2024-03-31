const callStack = [];
let worker;
if (typeof window !== "undefined") {
  worker = new Worker(new URL('./actions.worker.js', import.meta.url), {
    type: 'module',
  })
  worker.onmessage = ({ data: { data } }) => {
    callStack.shift()(data);
  };
}


export const performAction = async (action, data) => {
  return new Promise((resolve) => {
    worker.postMessage({ action, data });
    callStack.push(resolve);
  });
};
