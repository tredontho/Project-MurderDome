"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET classes.
 */
const express = require("express");
const path = require("path");
const router = express.Router();
const classSrcPath = '../src/classes';
router.use((req, res) => {
    res.sendFile(path.join(__dirname, classSrcPath, path.basename(req.url)));
});
//router.get('/priorityQueue.js', (req: express.Request, res: express.Response) => {
//    res.sendFile(path.join(__dirname, classSrcPath,'priorityQueue.js'));
//});
//router.get('/testControl.js', (req: express.Request, res: express.Response) => {
//    res.sendFile(path.join(__dirname, classSrcPath,'testControl.js'));
//});
//router.get('/testData.js', (req: express.Request, res: express.Response) => {
//    res.sendFile(path.join(__dirname, classSrcPath,'testData.js'));
//});
exports.default = router;
//# sourceMappingURL=classes.js.map