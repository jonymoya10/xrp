const express = require("express");
const morgan = require("morgan");
const app = express();
const indexRouter = require("./src/routes/index");


// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Rutas
app.use("/", indexRouter);
// app.post("/v2/CommunicationEvent", indexRouter, (req, res) => {
//   const communicationEvent = req.body.communication_event;
//   // Implementación para agregar un nuevo evento de comunicación
// });

// app.get("/v2/CommunicationEvent", (req, res) => {
//   // Implementación para obtener todos los eventos de comunicación
// });

// app.get("/v2/CommunicationEvent/:id", (req, res) => {
//   const id = req.params.id;
//   // Implementación para obtener el evento de comunicación con el ID especificado
// });

// app.post("/v2/CommunicationEvent", (req, res) => {
//   const communicationEvent = req.body.communication_event;
//   // Implementación para agregar un nuevo evento de comunicación
// });

// app.put("/v2/CommunicationEvent/:id", (req, res) => {
//   const id = req.params.id;
//   const communicationEvent = req.body.communication_event;
//   // Implementación para actualizar el evento de comunicación con el ID especificado
// });

// app.delete("/v2/CommunicationEvent/:id", (req, res) => {
//   const id = req.params.id;
//   // Implementación para eliminar el evento de comunicación con el ID especificado
// });

// app.get("/v2/CommunicationEvent/outbox", (req, res) => {
//   // Implementación para obtener todos los eventos de comunicación de la bandeja de salida
// });

// app.patch(
//   "/v2/CommunicationEvent/:p_communication_event_id/mark_send",
//   (req, res) => {
//     const p_communication_event_id = req.params.p_communication_event_id;
//     // Implementación para marcar el evento de comunicación con el ID especificado como enviado
//   }
// );

// app.get(
//   "/v2/CommunicationEvent/:p_communication_event_id/attachments",
//   (req, res) => {
//     const p_communication_event_id = req.params.p_communication_event_id;
//     // Implementación para obtener todos los adjuntos de la comunicación con el ID especificado
//   }
// );

// app.get(
//   "/v2/CommunicationEvent/:p_communication_event_id/attachments/:id_document",
//   (req, res) => {
//     const p_communication_event_id = req.params.p_communication_event_id;
//     const id_document = req.params.id_document;
//     // Implementación para obtener el adjunto de la comunicación con el ID especificado
//   }
// );

module.exports = app;
