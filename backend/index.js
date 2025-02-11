import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoute.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
import session from "express-session";
import connectMongoDBSession from "connect-mongodb-session";
// Initialize MongoDB session store
const MongoDBStore = connectMongoDBSession(session);
const app = express();
app.use(cors());

// { credentials: true, origin: "http://localhost:3000" }

dotenv.config();
const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

const store = new MongoDBStore({
  uri: URL,
  collection: "sessions",
});

app.use(
  session({
    //Secret key used to sign the session ID cookie and encrypt session data
    secret: "Complete Coding Secret",
    // Forces session to be saved back to the session store,even if not modified
    resave: false,
    //Forces a session that is "uninitialized" to be saved to the store
    saveUninitialized: false,
    store,
    // ttl: 24 * 60 * 60, // 1-day expiration
  })
);

try {
  mongoose.connect(URL);
  console.log("Connected to database");
} catch (error) {
  console.log("error while connecting to database", error);
}

app.use(express.json());

//Define Routes
app.use("/book", bookRoute);
app.use("/", userRoute);

app.listen(PORT, () => {
  console.log(`Server run on http://localhost:${PORT}`);
});
