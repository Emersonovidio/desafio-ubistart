const email = (req, res, next) => {
    const { email } = req.body;
    const responseMessage = '"email" is required';
    if (!email) return res.status(400).json({ message: responseMessage });
    const regex = /^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/;//teste@test.com
    const validEmail = '"email" must be a valid email';
    if (!regex.test(email)) return res.status(400).json({ message: validEmail });
    next();
};

const senha = (req, res, next) => {
    const { senha } = req.body;
    const requiredPassword = '"password" is required';
    if (!senha) return res.status(400).json({ message: requiredPassword });
    const validPassword = '"password" length must be 8 characters long';
    if (senha.length !== 8) return res.status(400).json({ message: validPassword });
    next();
};

module.exports = {
    email,
    senha,
};
