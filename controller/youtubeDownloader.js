const ytdl = require("ytdl-core");
const cA = require("./../utils/catchAsyn");

exports.mp4 = cA(async (req, res, next) => {
  try {
    let URL = req.query.url;
    let title = "";
    await ytdl.getBasicInfo(URL, { format: "mp4" }, (err, info) => {
      title = info.player_response.videoDetails.title;
    });

    res.header("Content-Disposition", `attachment; filename="${title}.mp4"`);
    ytdl(URL, {
      format: "mp4",
    }).pipe(res);
  } catch (err) {
    next(err);
  }
});

exports.mp3 = cA(async (req, res, next) => {
  try {
    var url = req.query.url;
    let title = "";
    await ytdl.getBasicInfo(url, { format: "mp4" }, (err, info) => {
      title = info.player_response.videoDetails.title;
    });
    res.header("Content-Disposition", `attachment; filename="${title}.mp3"`);
    ytdl(url, {
      format: "mp3",
      filter: "audioonly",
    }).pipe(res);
  } catch (err) {
    next(err);
  }
});
