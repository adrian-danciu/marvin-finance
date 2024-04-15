import User from "../models/User.js";

export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, created_at, accounts } =
      req.body;

    const oldUser = await User.findOne({ email });

    if (oldUser)
      return res
        .status(400)
        .json({ message: "User already exists, please login" });

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      created_at,
      accounts,
    });

    const token = user.generateAuthToken();
    res.status(201).json({ user, token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating the user", error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    const user = await User.findOne({ email });
    if (user && (await user.comparePassword(password))) {
      const token = user.generateAuthToken(); // to be implemented in the User model
      res.status(200).json({ user, token });
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};
