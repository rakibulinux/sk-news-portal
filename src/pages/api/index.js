const runServer = (req, res) => {
  if (req.method === "GET") {
    res.json("API Server is running");
  }
};
export default runServer;
