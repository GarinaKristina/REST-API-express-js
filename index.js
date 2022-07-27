import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';

const app = express();
const PORT = 8081;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);
app.get('/', (req, res) => res.send(`Server running on ${PORT} :)`));

app.listen(PORT, () => console.log(`Your server running on ${PORT}, don't worry and smile`));
