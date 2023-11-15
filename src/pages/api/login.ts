import type { APIRoute } from "astro";
import * as Z from "zod";
import jsonwebtoken from "jsonwebtoken";
import {prisma} from "../../utils/prisma";
import crypto from "crypto"
import { error, success } from "../../utils/Response";
import { signToken } from "../../utils/jwt";

const loginValidator = Z.object({
	email: Z.string().email(),
	password: Z.string().min(1),
	remember: Z.boolean().optional()
});

export const POST: APIRoute = async function({ request }) {
	const json = await request.json()

	const result = loginValidator.safeParse(json);
	if (!result.success) {
		return error([result.error])
	}

	const { email, password, remember } = result.data;

	const user = await prisma.user.findUnique({
		where: {
			email
		}
	})

	if (!user) {
		return error(["User not found"])
	}

	// Check password
	// The stored password will be hashed
	// So we need to hash the password the user entered
	const passwordHash = crypto.createHash("sha256").update(password).digest("base64")

	if (passwordHash !== user.password) {
		return error(["Incorrect password"])
	}

	// Generate a JWT for user access
	const jwt = signToken({
		email,
		uid: user.uid
	}, remember ? "30d" : "1d")

	return success({
		token: jwt
	})
}