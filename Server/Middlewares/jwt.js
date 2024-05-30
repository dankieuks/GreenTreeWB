import jwt from "jsonwebtoken";
const token = (uid, role) =>
  jwt.sign({ _id: uid, role }, process.env.JWT_SECRET, { expiresIn: "1d" });
export default token;
