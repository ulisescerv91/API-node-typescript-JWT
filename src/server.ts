import { app } from "./app";

// Run serverr
app.listen(app.get('port'), () => {
    console.log(`Server run in http://localhost:${app.get('port')}`);
});
