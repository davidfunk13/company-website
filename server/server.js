import express from 'express';

const app = express();

const PORT = process.env.PORT || 3001;

app.listen((PORT, err) => {
    if (!err) {
        console.log(`Express listening on port ${PORT}`);
    }

    console.log(err);
});