const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const path = require("path");

const app = express();
const PORT = 3000;

const mongoUrl = "mongodb://127.0.0.1:27017";
const client = new MongoClient(mongoUrl);

let eventsCollection;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

async function connectDatabase() {
    try {
        await client.connect();

        const db = client.db("shiftsync_db");
        eventsCollection = db.collection("events");

        console.log("Connected to ShiftSync MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

connectDatabase();

app.get("/api/events", async (req, res) => {
    try {
        const events = await eventsCollection.find().toArray();

        res.json(events);
    } catch (error) {
        res.status(500).json({
            message: "Unable to load events"
        });
    }
});

app.post("/api/events", async (req, res) => {
    try {
        const newEvent = {
            title: req.body.title,
            eventType: req.body.eventType,
            date: req.body.date,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            location: req.body.location,
            priority: req.body.priority,
            notes: req.body.notes
        };

        const result = await eventsCollection.insertOne(newEvent);

        res.status(201).json({
            message: "Event saved successfully",
            id: result.insertedId
        });

    } catch (error) {
        res.status(500).json({
            message: "Unable to save event"
        });
    }
});

app.delete("/api/events/:id", async (req, res) => {
    try {
        await eventsCollection.deleteOne({
            _id: new ObjectId(req.params.id)
        });

        res.json({
            message: "Event deleted"
        });

    } catch (error) {
        res.status(500).json({
            message: "Unable to delete event"
        });
    }
});

app.listen(PORT, () => {
    console.log(`ShiftSync running at http://localhost:${PORT}`);
});