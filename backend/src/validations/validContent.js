// eslint-disable-next-line consistent-return
const validContent = async (req, res, next) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ message: 'required task' });
  }
  next();
};

module.exports = validContent;
