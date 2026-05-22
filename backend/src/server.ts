import app from "./app.js";
import "dotenv/config"

const PORT = process.env.PORT || 5000;

app.listen(5000, () =>{
    console.log(`Server is running on port ${PORT}`)
})






