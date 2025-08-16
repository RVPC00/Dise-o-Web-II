// backend/index.js

const express = require('express');
const mysql = require('mysql2/promise'); // Usamos la versión con promesas
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json()); // Permite al servidor entender JSON en el body de las peticiones

// Configuración de la conexión a la base de datos
const dbConfig = {
    host: 'localhost', // o la IP de tu servidor de DB
    user: 'root',      // tu usuario de DB
    password: '',      // tu contraseña de DB
    database: 'tienda'
};

// --- API Endpoints (Rutas CRUD) ---

// READ (Obtener todos los productos)
app.get('/api/productos', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.execute('SELECT * FROM productos ORDER BY id DESC');
        await connection.end();
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los productos', error: error.message });
    }
});

// CREATE (Crear un nuevo producto)
app.post('/api/productos', async (req, res) => {
    try {
        const { nombre, descripcion, precio } = req.body;
        if (!nombre || !precio) {
            return res.status(400).json({ message: 'El nombre y el precio son obligatorios.' });
        }

        const connection = await mysql.createConnection(dbConfig);
        const [result] = await connection.execute(
            'INSERT INTO productos (nombre, descripcion, precio) VALUES (?, ?, ?)',
            [nombre, descripcion, precio]
        );
        await connection.end();
        res.status(201).json({ id: result.insertId, nombre, descripcion, precio });

    } catch (error) {
        res.status(500).json({ message: 'Error al crear el producto', error: error.message });
    }
});

// UPDATE (Actualizar un producto existente)
app.put('/api/productos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, precio } = req.body;
        if (!nombre || !precio) {
            return res.status(400).json({ message: 'El nombre y el precio son obligatorios.' });
        }
        
        const connection = await mysql.createConnection(dbConfig);
        await connection.execute(
            'UPDATE productos SET nombre = ?, descripcion = ?, precio = ? WHERE id = ?',
            [nombre, descripcion, precio, id]
        );
        await connection.end();
        res.json({ message: 'Producto actualizado correctamente' });

    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el producto', error: error.message });
    }
});

// DELETE (Eliminar un producto)
app.delete('/api/productos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await mysql.createConnection(dbConfig);
        await connection.execute('DELETE FROM productos WHERE id = ?', [id]);
        await connection.end();
        res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto', error: error.message });
    }
});


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Node.js corriendo en http://localhost:${PORT}`);
});