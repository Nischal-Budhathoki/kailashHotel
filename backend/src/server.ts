import dotenv from "dotenv"
dotenv.config();

import app from "./app.js";

console.log("JWT_SECRET_KEY:", process.env.JWT_SECRET_KEY);
console.log("JWT_REFRESH_SECRET:", process.env.JWT_REFRESH_SECRET);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});