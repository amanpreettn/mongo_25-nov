const { ItemModel } = require("../model/Item");

const create = async (data) => {
  console.log(data.name);
  try {
    const item = await ItemModel.findOneAndUpdate(data.name, data, {
      new: true,
      upsert: true,
    });
    return item;
  } catch (err) {
    console.log(err);
  }
};

const deleteitem = async (data) => {
  try {
    const item = await ItemModel.findByIdAndDelete(data.params.id, data.body);
    return item;
  } catch (err) {
    console.log(err);
  }
};

const getAll = async () => {
  try {
    const items = await ItemModel.find();
    return items;
  } catch (err) {
    console.log(err);
  }
};

const update = async (data) => {
  try {
    const item = await ItemModel.findByIdAndUpdate(data.params.id, data.body);
    return item;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { create, deleteitem, update, getAll };
