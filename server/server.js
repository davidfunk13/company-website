import express from 'express';
import api from './routes/routes';
import exphbs  from 'express-handlebars';
import path from 'path';

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

app.engine("handlebars", exphbs({
  defaultLayout: "main",
}));

app.set("view engine", "handlebars");
app.set("views", path.join(__dirname + "/views"));

app.use(api);

app.listen(PORT, err => {
    if (!err) {
        return console.log(`Express listening on port ${PORT}`);
    }

    return console.log(err);
});