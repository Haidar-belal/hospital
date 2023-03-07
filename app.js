const express = require('express');
const bodyParser = require('body-parser');
const {sequelize} = require('./models');
const multer = require('multer');
const { date } = require('faker/lib/locales/az');
const path = require('path');

const app = express();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, new date().toISOString() + '-' + file.originalname)
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));
app.use(express.static(path.join(__dirname, 'public')));

const doctorRoutes = require('./routes/doctor');
const emloyeeRoutes = require('./routes/employee');
const managerRoutes = require('./routes/manager');
const departmentRoutes = require('./routes/department');
const patientRoutes = require('./routes/patient');
const billRoutes = require('./routes/bill');
const authRoutes = require('./routes/auth');
const consultationRoutes = require('./routes/consultation');
const operationRoutes = require('./routes/operation');
const dateRoutes = require('./routes/date');




app.use('/hospital3', doctorRoutes);

app.use('/hospital3', emloyeeRoutes);

app.use('/hospital3', managerRoutes);

app.use('/hospital3', departmentRoutes);

app.use('/hospital3', patientRoutes);

app.use('/hospital3', billRoutes);

app.use('/hospital3', consultationRoutes);

app.use('/hospital3', operationRoutes);

app.use('/hospital3', authRoutes);

app.use('/hospital3', dateRoutes);





app.listen({ port: 5000}, async () => {
    // await sequelize.sync();
    // await sequelize.authenticate();
    console.log('starting');
})