import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import todoRoutes from './Routes/todoRoutes.js'
import cors from 'cors'; 
import { connnectDb } from './database/mongos.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()) 
app.use(express.json());

connnectDb();

app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});