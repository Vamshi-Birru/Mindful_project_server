
const express = require("express");
const UserCard = require("../models/userCard");
const User = require("../models/User");
const router = express.Router();

router.get("/get", async (req, res) => {
    try {
        const userId = req.headers.userid;
        const user = await User.findOne({ _id: userId });
        if (!user) {
            return res.status(401).json("Unauthorised");
        }
        const userCards = await UserCard.find({ userId: userId });
        res.status(200).json(userCards);

    }
    catch (err) {
        console.log("error: ", err);
        res.status(500).json("Error in fetching data");
    }
});

router.post("/create", async (req, res) => {
    try {
        const userId = req.headers.userid;
        const user = await User.findOne({ _id: userId });
        if (!user) {
            return res.status(401).json("Unauthorised");
        }
        const newUserCard = new UserCard({
            ...req.body,
            userId:userId
        });
        newUserCard.save();
        res.status(200).json("Successfully Created");
    }
    catch (err) {
        res.status(500).json('Error in creating userCard');
    }
});
router.put("/update", async (req, res) => {
    try {
        const userId = req.headers.userid;
        const user = await User.findOne({ _id: userId });
        if (!user) {
            return res.status(401).json("Unauthorised");
        }
        const updateData = req.body;
        const updatedUserCard = await UserCard.findOneAndUpdate(
            { _id: req.headers._id },
            { $set: updateData },
            { new: true }
        );
        if (!updatedUserCard) {
            return res.status(404).json('UserCard not found');
        }
        res.status(200).json(updatedUserCard);
    }
    catch (err) {
        res.status(500).json('Error in creating userCard');
    }
});

router.delete("/delete", async (req, res) => {
    try {
        const userId = req.headers.userid;
        const user = await User.findOne({ _id: userId });
        if (!user) {
            return res.status(401).json("Unauthorised");
        }
        const deletedUserCard = await UserCard.findOneAndDelete({ _id: req.headers._id });
        if (!deletedUserCard) {
            return res.status(404).json('UserCard not found');
        }
        res.status(200).json('UserCard deleted successfully');
    }
    catch (err) {
        res.status(500).json('Error in creating userCard');
    }
});


module.exports = router;