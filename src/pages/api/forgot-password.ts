import type { APIRoute } from "astro";
import * as Z from "zod";
import jsonwebtoken from "jsonwebtoken";
import {prisma} from "../../utils/prisma";
import { error, success } from "../../utils/Response";
import { signToken } from "../../utils/jwt";

const forgotPasswordValidator = Z.object({
	email: Z.string().email()
});

export const POST: APIRoute = async function({ request }) {
	const json = await request.json()

	const result = forgotPasswordValidator.safeParse(json);
	if (!result.success) {
		return error([result.error])
	}

	const { email } = result.data;

	const user = await prisma.user.findUnique({
		where: {
			email
		}
	})

	if (!user) {
		return error(["User not found"])
	}

	// Generate a JWT to allow for recovering the password.
	const jwt = signToken({
		email
	}, "1h")

	// Send an email to the user with the link to recover the password.
	// In this example, we will just log the link to the console.
	console.log(`https://example.com/recover-password?token=${jwt}`)

	return success({})
}