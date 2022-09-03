export default function handler(req, res) {
  var logins = 30;
  var logouts = 5;
  var todos = 71;

  res.status(200).json({ logins, logouts, todos });
}
