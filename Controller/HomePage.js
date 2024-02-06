exports.HomePage = (req, res) => {
  res.sendFile("index.html", { root: "View" });
};
