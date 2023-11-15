import type { APIRoute } from "astro";
import * as Z from "zod";
import jsonwebtoken from "jsonwebtoken";
import {prisma} from "../../utils/prisma";
import { error, success } from "../../utils/Response";
import crypto from "crypto"
import { verifyToken } from "../../utils/jwt";

const resetPasswordValidator = Z.object({
	token: Z.string(),
	password: Z.string().min(8)
});

export const POST: APIRoute = async function({ request }) {
	const json = await request.json()

	const result = resetPasswordValidator.safeParse(json);
	if (!result.success) {
		return error([result.error])
	}

	const { token, password } = result.data;

	// Verify the token
	const decoded = verifyToken(token)

	if (!decoded) {
		return error(["Invalid token"])
	}

	const email = (decoded as any).email;

		const user = await prisma.user.findUnique({
			where: {
				email
			}
		})

		if (!user) {
			return error(["User not found"])
		}

		// Hash the password
		const passwordHash = crypto.createHash("sha256").update(password).digest("base64")
		// Update the password
		await prisma.user.update({
			where: {
				email
			},
			data: {
				password: passwordHash
			}
		})

		return success({})
}