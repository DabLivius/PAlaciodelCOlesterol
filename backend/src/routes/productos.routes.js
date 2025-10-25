import express from "express";
import { verifyTokenAndRole } from "../middlewares/authRole.js";
import {
  crearProducto,
  listarProductos,
  eliminarProducto,
  actualizarProducto,
} from "../controllers/productosController.js";

const router = express.Router();

// 👇 Solo el admin puede crear, actualizar o eliminar
router.post("/", verifyTokenAndRole(["admin"]), crearProducto);
router.put("/:id", verifyTokenAndRole(["admin"]), actualizarProducto);
router.delete("/:id", verifyTokenAndRole(["admin"]), eliminarProducto);

// 👇 Todos los usuarios pueden listar
router.get("/", listarProductos);
export default router;
