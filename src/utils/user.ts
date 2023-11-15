import type { User } from "@prisma/client";
import { verifyToken } from "./jwt";
import { prisma } from "./prisma";
import { PERSISTENT_DIR } from "../lib/constants";
import * as fs from "fs"
import * as path from "path"

export async function getUser(token: string): Promise<User | null> {
	const result = verifyToken(token);

	if (!result) {
		return null;
	}

	const { email, uid } = result;

	if (!uid) {
		return null;
	}

	const user = await prisma.user.findUnique({
		where: {
			uid
		}
	})

	if (!user) {
		return null;
	}

	return user;
}

export async function getProfileImage(user: User): Promise<null | { href: string, raw: string }> {
	const imagePath = path.join(PERSISTENT_DIR, "profile-images", `${user.uid}.svg`);

	if (!fs.existsSync(imagePath)) {
		return null;
	}

	const raw = fs.readFileSync(imagePath, "utf-8");
	const href = "/api/profile-image.svg"

	return { raw, href }
}