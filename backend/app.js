const express = require('express');
const cors = require('cors');
const nutritionistRoutes = require('./routes/nutritionistRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/nutritionists', nutritionistRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));