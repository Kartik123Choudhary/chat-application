const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "85b41ce0-590b-40b3-bc40-d192c9a77e99" } }
    );
    return res.status(r.status).json(r.data);
  } catch (error) {
    return res.status(error.response.status).json(error.response.data);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
