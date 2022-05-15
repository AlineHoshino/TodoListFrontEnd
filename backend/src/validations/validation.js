// eslint-disable-next-line consistent-return
const valideTask = (req, res, next) => {
  const { title, task } = req.body;
  if (!title || !task) {
    return res.status(400).json({ message: 'required title or task' });
  }
  next();
};

module.exports = valideTask;
