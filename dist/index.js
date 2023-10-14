"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const serve_index_1 = __importDefault(require("serve-index"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "../static")));
app.use("/static", (0, serve_index_1.default)(path_1.default.join(__dirname, "../static"), { icons: true }));
app.get("/static/:file", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../static", req.params.file));
});
app.listen(5001, () => {
    console.log('Server listening on port 5001');
});
