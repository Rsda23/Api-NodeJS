"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
// inference de type : lorsque le 'langage' devine le type d'une variable a partir du type de donnees qui sert à l'initialisation
exports.app = (0, express_1.default)();
//Creation premiere route
//Une route : association METHOD http + URL (unique au seins de l'app)
exports.app.get("/", function (req, res) {
  res.status(200).send("Hello");
});
