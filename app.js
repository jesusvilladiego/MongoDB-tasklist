const express = require("express");
const PORT = 3000
const connection= require('./src/db');
const UserModel = require('./src/modelos/usermodel');

const app = express();
connection();


const createUser = async (tarea) => {
  try {
    const newUser = new UserModel(tarea);
    const result = await newUser.save();
    return result;
  } catch (error) {
    return error;
  }
};

const findUsers = async () => {
  try {
    const users = await UserModel.find({});
    return users;
  } catch (error) {
    return error;
  }
};

// Función para encontrar un tarea por ID
const findUserById = async (id) => {
  try {
    const user = await UserModel.findById(id);
    return user;
  } catch (error) {
    return error;
  }
};


const deleteUserById = async (id) => {
  try {
    const result = await UserModel.deleteOne(id);
    return result;
  } catch (error) {
    return error;
  }
};

const updateUser = async (id, data) => {
  try {
    const result = await UserModel.updateOne(
      {_id: id},
      { $set: { ...data } },
      { new: true }
    );
    return result;
  } catch (error) {
    return error;
  }
};
 

const CRUD = {
  createUser,
  findUsers,
  findUserById,
  deleteUserById,
  updateUser,
};
app.listen(PORT, ()=>{console.log("el servidor esta funcionando en el:",PORT)})
module.exports = CRUD;