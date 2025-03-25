"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var PORT = process.env.PORT || 3000;
app_1.app
  .listen(PORT, function () {
    console.log("Server currently listening on port ".concat(PORT));
  })
  .on("error", function (error) {
    throw new Error(error.message);
  });
