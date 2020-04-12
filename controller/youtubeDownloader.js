const ytdl = require("ytdl-core");

module.exports = (req, res) => {
  let URL = req.query.URL;
  console.log(URL);

  res.header("Content-Disposition", 'attachment; filename="video.mp4"');
  ytdl(URL, {
    format: "mp4",
  }).pipe(res);
};
