const { Router } = require("express");
const { create, getAll, update,deleteitem } = require("../controller/item");

const router = Router();

router.post("/items", create);
router.get("/items", getAll);
router.patch("/items/:id", update);
router.delete("/items/:id",deleteitem)

module.exports = router;
