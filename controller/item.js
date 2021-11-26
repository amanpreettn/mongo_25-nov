const item = require("../services/services");

const create = async (req, res) => {
  try {
    const response = await item.create(req.body);
    res.status(200).json({
      data: response,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "Fail",
      err: err.message,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await item.getAll();
    res.status(200).json({
      data: response,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "Fail",
      err: err.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const data = { body: req.body, params: req.params };
    //console.log("controller", data);
    const response = await item.update(data);
    res.status(200).json({
      data: response,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "Fail",
      err: err.message,
    });
  }
};

const deleteitem = async (req, res) => {
  try {
    const data = { body: req.body, params: req.params };
    const reponse = await item.deleteitem(data);
    res.status(200).json({
      data: reponse,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "Fail",
      err: err.message,
    });
  }
};
module.exports = { create, getAll, update, deleteitem };
