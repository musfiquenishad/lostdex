// ...............................Importing Packages..............................................//
const express = require("express");
const chalk = require("chalk");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const sharp = require("sharp");
const _ = require("lodash");

require("dotenv").config();
const path = require("path");
const Schema = mongoose.Schema;
const app = express();
const port = 5000;
// ......................................Imorting Packages Ends..................................//

//......................................Body persing Middleware...................................//
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
//......................................Body persing Middleware Ends..............................//
//......................................Serving Static Files.....................................//
app.use("/uploads/images", express.static(path.join("uploads", "images")));
//......................................Mongoose connection.......................................//
mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then((result) => {
		console.log(chalk.black.bgYellow("Database connected"));
	})
	.catch((error) => {
		console.log(error);
	});

//..................................Mongoose Connection End.......................................//

//..............................Check for authorization middleware................................//
function isAuthorized(req, res, next) {
	if (req.headers.authorization) {
		const token = req.headers.authorization.split(" ")[1];
		if (!token) {
			return res.status(401).json({ msg: "You are not authorized" });
		}

		try {
			let decoded = jwt.verify(token, process.env.JWT_KEY);

			next();
		} catch (error) {
			return res.status(401).json({ msg: "You are not authorized" });
		}
	} else {
		return res.status(401).json({ msg: "You are not authorized" });
	}
}
//...........................Check for authorization middleware End............................//

//.............................. User SignUp, SignIn Section......................................//

//User Schema
const userSchema = new Schema({
	firstname: { type: String, required: true },
	lastname: { type: String, required: true },
	email: { type: String, required: true },
	profilePicture: { type: String },
	password: { type: String, required: true },
	username: { type: String, required: true },
	listings: [{ type: Schema.Types.ObjectId, ref: "Listings" }],
});
//User Model
const User = mongoose.model("User", userSchema);

//REVIEW
//signup route
app.post("/api/users/signup", async (req, res) => {
	const { username, firstname, lastname, email, password } = req.body;
	try {
		hashedPassword = await bcrypt.hash(password, 10);
	} catch (error) {
		res.status(500);
		return;
	}

	User.findOne({ email }, (error, user) => {
		if (error) {
			console.log(error);
		} else if (user) {
			res.status().json({ msg: "User already exist with that email address" });
		} else {
			const user = new User({
				username,
				firstname,
				lastname,
				email,
				profilePicture: "",
				password: hashedPassword,
				listings: [],
			});

			user
				.save()
				.then((success) => {
					const token = jwt.sign(
						{ userId: success.id, email: email },
						process.env.JWT_KEY,
						{
							expiresIn: "7d",
						}
					);

					res.status(201).json({
						authorized: true,
						msg: "User successfully signed up",
						token,
					});
				})
				.catch((error) => {
					res.status(500).send(error.message);
				});
		}
	});
});

//REVIEW
//signin route
app.post("/api/users/signin", (req, res) => {
	const { email, password } = req.body;

	User.findOne({ email }, (error, user) => {
		if (error) {
			console.log(error.message);
		} else if (user) {
			bcrypt.compare(password, user.password, (error, success) => {
				if (error) {
					console.log(error.message);
				} else if (success) {
					const token = jwt.sign(
						{ userId: user.id, email: email },
						process.env.JWT_KEY,
						{
							expiresIn: "7d",
						}
					);

					res.json({
						authorized: true,
						msg: "User SignedIn successfully",
						token,
					});
				} else if (!success) {
					res
						.status(401)
						.json({ authorized: false, msg: "Incorrect credantials" });
				}
			});
		} else {
			res
				.status(401)
				.json({ authorized: false, msg: "Incorrect email address" });
		}
	});
});
//..................................User SignUp, SignIn Section Ends..............................//
//...................................Check if user name is exists or not..........................//
app.post("/api/users", (req, res) => {
	User.findOne({ username: req.query.username }, (error, user) => {
		if (error) {
			res.status(500).send(error);
		} else if (user) {
			res.json({
				available: false,
				msg: "User name is unavailable, Please use another username",
			});
		} else {
			res.json({
				available: true,
				msg: "User name is available you can use this username",
			});
		}
	});
});
//.........................................Check username availability ends.......................//
//.........................................Check email availability .......................//
app.post("/api/email", (req, res) => {
	User.findOne({ email: req.query.email }, (error, user) => {
		if (error) {
			res.status(500).send(error);
		} else if (user) {
			res.json({
				available: false,
				msg: "An user is already registered with that email address please use another one",
			});
		} else {
			res.json({
				available: true,
				msg: "email is available you can use this email",
			});
		}
	});
});
//....................................Get user by username........................................//
app.get("/api/users/:username", (req, res) => {
	User.findOne({ username: req.params.username }, (error, user) => {
		if (error) {
			res.status(500).send(error);
		} else if (!user) {
			res.status(404).json({
				msg: "User doesn't exist in our database. Try searching with different username",
			});
		} else {
			res.send(user);
		}
	});
});

//..................................Get user by username ends......................................//
//....................................Get Listings by username.....................................//
app.get("/api/users/listings/:username", (req, res) => {
	User.findOne({ username: req.params.username })
		.populate("listings")
		.exec(function (error, listings) {
			if (error) {
				res.status(500).json({
					mgs: error.message,
				});
			} else if (listings) {
				res.send(listings);
			} else {
				res.status(404).json({
					msg: "User doesn,t exist with that username",
				});
			}
		});
});
//..................................Get Listings by username Ends..................................//

//.....................................Edit user information.......................................//
//...............................Multer file upload config.....................................//
const upload = multer({
	limits: { fileSize: 5000000 },
	fileFilter(req, file, cb) {
		if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
			return cb(new Error("File must be a PNG/JPG/JPEG image"));
		}
		cb(undefined, true);
	},
});

app.post(
	"/api/users/uploadprofilepicture",
	isAuthorized,
	upload.single("profilePicture"),
	async (req, res) => {
		await sharp(req.file.buffer)
			.resize(200, 200)
			.toFile(`./uploads/images/${req.file.originalname}`);

		if (req.headers.authorization) {
			const token = req.headers.authorization.split(" ")[1];
			if (!token) {
				res.status(404).json({
					error: "User not found with that user id",
				});
			} else {
				let decoded = jwt.verify(token, process.env.JWT_KEY);
				User.findByIdAndUpdate(
					{ _id: decoded.userId },
					{
						profilePicture: `uploads/images/${req.file.originalname}`,
					},
					(error, user) => {
						if (error) {
							res.status(500).json({
								msg: "Something went wrong while updating user information",
							});
						} else if (!user) {
							res.status(404).json({
								msg: "User doesn't exist in our database wrong authorization token",
							});
						} else {
							res
								.status(201)
								.json({ msg: "User's Profile picture updated successfully" });
						}
					}
				);
			}
		}
	},
	(error, req, res, next) => {
		res.status(400).json({ error: error.message });
	}
);

app.put(
	"/api/users/updateuserinformation",
	isAuthorized,

	(req, res) => {
		if (req.headers.authorization) {
			const token = req.headers.authorization.split(" ")[1];
			if (!token) {
				res.status(404).json({
					error: "User not found with that user id",
				});
			} else {
				let decoded = jwt.verify(token, process.env.JWT_KEY);
				User.findByIdAndUpdate(
					{ _id: decoded.userId },
					{
						firstname: req.body.firstname,
						lastname: req.body.lastname,
					},
					(error, user) => {
						if (error) {
							res.status(500).json({
								msg: "Something went wrong while updating user information",
							});
						} else if (!user) {
							res.status(404).json({
								msg: "User doesn't exist in our database. Wrong authorization key",
							});
						} else
							res
								.status(201)
								.json({ msg: "User's information updated successfully" });
					}
				);
			}
		}
	}
);

//...............................Get Individual Listings by Listing title..........................//
app.get("/api/listings", (req, res) => {
	let link = _.kebabCase(req.query.search);
	Listings.findOne({ permalink: link }, (error, listing) => {
		if (error) {
			res.status(500).json({ msg: "Something went wrong while searching" });
		} else if (listing) {
			res.send(listing);
		} else {
			res
				.status(404)
				.json({ msg: "What you are looking for could not be found" });
		}
	});
});
//............................Get Individual Listings by Listing title Ends........................//

//...................................Listings Schema...............................................//
const listingsSchema = new Schema(
	{
		location: { type: String, required: true },
		title: { type: String, required: true },
		category: { type: Array, required: true },
		description: { type: String, required: true },
		reward: { type: String },
		itemType: { type: String, required: true },
		permalink: { type: String, required: true },
		previewImages: { type: Array, required: true },
		author: { type: Schema.Types.ObjectId, ref: "User", required: true },
	},
	{ timestamps: true }
);

const Listings = new mongoose.model("Listings", listingsSchema);

app.post(
	"/api/listings/listitem",
	isAuthorized,
	upload.array("images", 6),
	async (req, res) => {
		const previewImages = [];
		await req.files.forEach((image, index) => {
			sharp(image.buffer)
				.resize(200, 200)
				.toFile(`./uploads/images/${image.originalname}`);
			previewImages.push(`uploads/images/${image.originalname}`);
		});

		const { userId, email } = jwt.verify(
			req.headers.authorization.split(" ")[1],
			process.env.JWT_KEY
		);
		User.findOne({ _id: userId }, (error, user) => {
			if (error) {
				res.status(500).json({ msg: error.message });
			} else if (!user) {
				res.status(404).json({ msg: "User not found" });
			}
		});
		const { location, title, category, description, reward, itemType } =
			req.body;

		const listing = new Listings({
			location,
			title,
			category,
			description,
			reward,
			itemType,
			permalink: _.kebabCase(title),
			previewImages,
			author: userId,
		});

		listing.save((error, success) => {
			if (error) {
				res.status(500).json({ msg: error.message });
			} else {
				User.findOneAndUpdate(
					{ _id: userId },
					{ $addToSet: { listings: success.id } },
					(error, user) => {
						if (error) {
							res.status(500).json({ msg: error.message });
						} else {
							res.status(201).json({ mgs: "Item listed successfully" });
						}
					}
				);
			}
		});
	}
);

app.put("/api/listings/edit/:id", isAuthorized, (req, res) => {
	Listings.findOneAndUpdate(
		{ _id: req.params.id },
		{
			location: req.body.location,
			title: req.body.title,
			category: req.body.category,
			description: req.body.description,
			reward: req.body.reward,
			permalink: _.kebabCase(title),
			itemType: req.body.itemType,
		},
		(error, listing) => {
			if (error) {
				res.status(500).json({ msg: error.message });
			} else {
				res.json({ msg: "Item updated succesfully" });
			}
		}
	);
});

app.delete("/api/listings/delete/:id", isAuthorized, (req, res) => {
	const { userId, email } = jwt.verify(
		req.headers.authorization.split(" ")[1],
		process.env.JWT_KEY
	);
	User.findOneAndUpdate({ _id: userId }, { $pull: { listings: req.params.id } })
		.then((user) => {
			Listings.findByIdAndDelete({ _id: req.params.id }, (error, success) => {
				if (error) {
					res.status(500).json({ msg: error.message });
				} else if (success) {
					res.send("Successfully deleted the item");
				}
			});
		})
		.catch((error) => {
			res.status(500).json({ msg: "Something went wrong while deleting" });
		});
});

//........................................server starts............................................//
app.listen(port, () => {
	console.log(chalk.black.bgGreen(`App listening at port ${port}`));
});
//.........................................server Ends............................................//
