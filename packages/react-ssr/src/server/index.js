import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";

import App from "../client/App";

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  const data = fs.readFileSync(path.resolve(process.cwd(), 'public/index.html'), "utf8")
  res.send(
    data.replace(
      '<div id="root"></div>',
      `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
    )
  );
});

app.use(
  express.static(path.resolve(process.cwd(), "client-dist"), { maxAge: "30d" })
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});