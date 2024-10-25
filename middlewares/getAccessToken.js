const jwt = require("jsonwebtoken");

const getAccessToken = async (payload) => {
  return await jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET_KEY, {
    expiresIn: "10d",
  });
};

module.exports = getAccessToken;
