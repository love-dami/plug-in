 //使用方法
/*
    import createSocket from "./socket";
    createSocket({
      key: `1_${orderNumber}`,
      host: "http://ws.zx0093.com/",
      onmessage(data) {
        console.log("push", data);
        window.location.href = `${__path}/web/showccSuccess.htm?productId=${typeNum}`;
      }
    });
*/

import ReconnectingWebSocket from "reconnecting-websocket";
const createSocket = function({ key, host, onmessage }) {
  try {
    const path = host.replace("http:", "");
    const webSocketPath = "ws:" + path + "websocket";
    let webSocket = new ReconnectingWebSocket(webSocketPath);
    webSocket.debug = true;
    webSocket.timeoutInterval = 5400;
    window.onbeforeunload = function() {
      webSocket.close();
    };
    webSocket.onopen = function() {
      webSocket.send(key);
    };
    webSocket.onmessage = event => {
      const push = JSON.parse(event.data);
      if (process.env.NODE_ENV !== "production") {
        console.log("push >>", push);
      }
      onmessage(push);
    };
  } catch (e) {
    //not support webSocket
  }
};

export default createSocket;
