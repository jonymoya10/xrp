const express = require("express");
const router = new express.Router();
const { ConnectionPool } = require("mssql");




const sqlConfig = {
  user: "ldb_desarrollo",
  password: "249768BFFODE",
  server: "64.76.23.59",
  port: 45006,
  database: "desarrollo",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};
const pool = new ConnectionPool(sqlConfig);

pool.connect((err) => {
  if (err) {
    console.error("Error al conectar con la base de datos:", err.stack);
  } else {
    console.log("Conexión exitosa Base de datos SQL SERVER");
  }
});



router.post("/api/v2/CommunicationEvent", async (req, res) => {
  const query = `INSERT INTO XRP.COMMUNICATION_EVENT (
    communication_event_id,
    contact_mechanism_category_id,
    status_type_id,
    start_date,
    end_date,
    comment,
    party_id_from,
    party_id_to,
    role_type_id_from,
    role_type_id_to,
    from_date,
    creation_date,
    party_user_creation_id,
    modification_date,
    party_user_modification_id,
    contact_mechanism_category_classification_id,
    description,
    online,
    priority_type_id,
    communication_event_type_id,
    p_party_user_creation_id,
    p_party_user_modification_id,
    p_role_type_to_id,
    p_role_type_from_id,
    p_party_from_id,
    p_party_to_id,
    p_tracking_id,
    doccount
  ) VALUES (
    '${req.body.communication_event_id}',
    ${req.body.contact_mechanism_category_id},
    ${req.body.status_type_id},
    '${req.body.start_date}',
    '${req.body.end_date}',
    '${req.body.comment}',
    ${req.body.party_id_from},
    ${req.body.party_id_to},
    ${req.body.role_type_id_from},
    ${req.body.role_type_id_to},
    '${req.body.from_date}',
    '${req.body.creation_date}',
    ${req.body.party_user_creation_id},
    ${req.body.modification_date},
    ${req.body.party_user_modification_id},
    ${req.body.contact_mechanism_category_classification_id},
    '${req.body.description}',
    ${req.body.online},
    ${req.body.priority_type_id},
    ${req.body.communication_event_type_id},
    ${req.body.p_party_user_creation_id},
    ${req.body.p_party_user_modification_id},
    ${req.body.p_role_type_to_id},
    ${req.body.p_role_type_from_id},
    ${req.body.p_party_from_id},
    ${req.body.p_party_to_id},
    ${req.body.p_tracking_id},
    ${req.body.doccount}
  )`;

  pool
    .request()
    .query(query)
    .then((result) => {
      console.log("Evento de comunicación agregado con éxito");
      res.send("Evento de comunicación agregado con éxito");
    })
    .catch((error) => {
      console.error("Error al agregar evento de comunicación:", error);
      res.status(500).send("Error al agregar evento de comunicación");
    });
});

module.exports = router;
