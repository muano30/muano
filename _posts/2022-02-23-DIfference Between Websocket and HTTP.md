---
Layout: 
Title: "DIfference Between Websocket and HTTP."
date: "2022-02-23"
---

# Introduction.

This blog post is to understand what differentiate Websocket and HTTP(Hyper text transfer protocol), the challenge that i'm cerrently doing on the freecodeCamp allows me to use socket and also require me to change my port from app.listen to http.listen. this is not what i will talk about today i will just share what differentiate HTTP and Websocket.

#### What is HTTP and Websocket.

HTTP(Hyper text transfer protocol) and WebSocket both are communication protocols used in client-server communication. 

Client-Server communication involves two components, namely a client and a server. They are usually multiple clients in communication with a single server. The clients send requests to the server and the server responds to the client requests.

# Body.

# Explanation.

#### HTTP. 

is unidirectional(operating in single direction) where the client sends the request and the server sends the response. Let’s take an example when a user sends a request to the server this request goes in the form of HTTP, after receiving a request server send the response to the client, each request is associated with a corresponding response, after sending the response the connection gets closed, each HTTP request establish the new connection to the server every time and after getting the response the connection gets terminated by itself. 


#### WebSocket.

Is bidirectional(functioning in two direction), a full-duplex protocol that is used in the same scenario of client-server communication, unlike HTTP it starts from ws:// or wss://. It is a stateful protocol, which means the connection between client and server will keep alive until it is terminated by either party (client or server). After closing the connection by either of the client and server, the connection is terminated from both ends. 

Let’s take an example of client-server communication, there is the client which is a web browser and a server, whenever we initiate the connection between client and server, the client-server made the handshaking and decide to create a new connection and this connection will keep alive until terminated by any of them. When the connection is established and alive the communication takes place using the same connection channel until it is terminated. 

This is how after client-server handshaking, the client-server decide on a new connection to keep it alive, this new connection will be known as WebSocket. Once the communication link establishment and the connection are opened, message exchange will take place in bidirectional mode until connection persists between client-server. If anyone of them (client-server) dies or decide to close the connection is closed by both of the party. The way in which socket works is slightly different from how HTTP works, the status code 101 denotes the switching protocol in WebSocket. 


# Conclusion.

It is important to understand both websocket and HTTP and when can we use or not use them.Here is my link to learn more about Websocket and HTTP....https://www.geeksforgeeks.org/what-is-web-socket-and-how-it-is-different-from-the-http/