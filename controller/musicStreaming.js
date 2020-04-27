const ytdl = require("ytdl-core");
const ytsr = require("ytsr");

const catchAsyn = require("./../utils/catchAsyn");
exports.search = async (req, res, next) => {
  try {
    ytsr(req.params.str, { limit: 1 }, (err, data) => {
      if (err) {
        res.status(400).json({
          status: "fail",
          err,
        });
      } else {
        res.status(200).json({
          status: "success",
          data,
        });
      }
    });
  } catch (err) {
    next(err);
  }
};

exports.play = catchAsyn(async (req, res, next) => {
  try {
    let url = `https://www.youtube.com/watch?v=` + req.params.urls;
    res.header({
      "Content-Type": "audio/mp3",
    });
    ytdl(url, {
      format: "mp3",
      filter: "audioonly",
    }).pipe(res);
  } catch (err) {
    next(err);
  }
});
