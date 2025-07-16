const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente ');
});


app.post('/register', async (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  if (!nombre || !correo || !contraseña) {
    return res.status(400).json({ error: 'Faltan campos' });
  }

  const hash = await bcrypt.hash(contraseña, 10);

  console.log("Nuevo usuario registrado:");
  console.log("Nombre:", nombre);
  console.log("Correo:", correo);
  console.log("Contraseña encriptada:", hash);
  

  res.json({ mensaje: 'Usuario registrado exitosamente', hash });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});