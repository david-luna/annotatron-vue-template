// eslint-disable-next-line @typescript-eslint/no-var-requires
const { contextBridge, ipcRenderer } = require("electron");

const observableLike = (key) => {
  return {
    subscribe: (observer) => {
      const ipcHandler = (evt, payload) => observer(payload);

      ipcRenderer.on(`annotatron:${key}`, ipcHandler);
      return {
        unsubscribe: function () {
          ipcRenderer.removeListener(`annotatron:${key}`, ipcHandler);
        },
      };
    },
  };
};

const dispatcherOf = (key) => (toSend) => {
  ipcRenderer.send(`annotatron:${key}`, toSend);
};

contextBridge.exposeInMainWorld("backend", {
  dispatchCommand: dispatcherOf("commands"),
  dispatchQuery: dispatcherOf("queries"),
  results$: observableLike("results"),
  errors$: observableLike("errors"),
  events$: observableLike("events"),
});
