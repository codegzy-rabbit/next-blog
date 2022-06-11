export default (req, res) => {
  if (req.method == 'POST') {
    const { email, name, message } = req.body;

    console.log('需要存储的信息是' + name + email + message);
    res.status(200).json({ message: 'SUCCESS' });
  } else {
    res.status(401).json({ message: 'Method is not Allowed' });
  }
};
