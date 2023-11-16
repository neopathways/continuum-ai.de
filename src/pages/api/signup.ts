import type { APIRoute } from "astro";
import * as Z from "zod";
import {prisma} from "../../utils/prisma";
import crypto from "crypto"
import { error, success } from "../../utils/Response";
import { Avatar, AvatarType } from "@continuum-ai/avatars"
import * as fs from "fs"
import { v4 as uuidv4 } from 'uuid';
import { PERSISTENT_DIR } from "../../lib/constants";
import * as path from "path"

const signUpValidator = Z.object({
	email: Z.string().email(),
	password: Z.string().min(1),
	first_name: Z.string().min(1),
	last_name: Z.string().min(1)
});

export const POST: APIRoute = async function({ request }) {
	const json = await request.json()

	const result = signUpValidator.safeParse(json);
	if (!result.success) {
		return error([result.error])
	}

	const { email, password, first_name, last_name } = result.data;

	const user = await prisma.user.findUnique({
		where: {
			email
		}
	})

	if (user) {
		return error(["Email already in use"])
	}

	// Hash the password
	const passwordHash = crypto.createHash("sha256").update(password).digest("base64")

	// Generate a uuid
	const uid = uuidv4()

	// Generate a unique robot avatar
	const avatar = await Avatar.assemble(email, AvatarType.Robots, null)
	const buffer = await avatar.toBuffer()
	// This will generate an svg animal that we can easily write to disk
	const outputPath = path.join(PERSISTENT_DIR, "profile-images", `${uid}.jpeg`)

	fs.writeFileSync(outputPath, buffer);


	const newUser = await prisma.user.create({
		data: {
			email,
			uid,
			password: passwordHash,
			first_name,
			last_name,
			avatar_url: `/api/user/${uid}/avatar.jpeg`
		}
	})

	return success({
		uid
	})
}