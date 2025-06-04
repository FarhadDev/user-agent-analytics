const getTestResponse = (req, res) => {
    res.status(200).json({ message: "This route is working...from controller" });
}

module.exports = getTestResponse;