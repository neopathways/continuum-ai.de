import type { APIRoute } from "astro";
import { error } from "../../../../utils/Response";
import { verifyToken } from "../../../../utils/jwt";
import { getUser } from "../../../../utils/user";
import { PERSISTENT_DIR } from "../../../../lib/constants";
import * as path from "path"
import * as fs from "fs"

export const GET: APIRoute = async function({ request, cookies, params }) {
	// Try to get the token from the cookie or the authorization header.
	const uid = params.uid;
	const cookie = cookies.get("token")
	let token: string;
	if (!cookie) {
		token = ""
	} else {
		token = cookie.value
	}

	if (!token) {
		return error(["Missing authorization token"])
	}

	const result = verifyToken(token);

	if (!result) {
		return error(["Invaid authorization token"])
	}

	if (result.uid !== uid) {
		return error(["Invaid authorization token"])
	}

	const imagePath = path.join(PERSISTENT_DIR, "profile-images", `${uid}.svg`)

	if (!fs.existsSync(imagePath)) {
		return error(["Image could not be found."])
	}

	const image = fs.readFileSync(imagePath, "utf-8")


	return new Response(image, {
		headers: {
			"content-type": "image/svg+xml"
		},
		status: 200
	})
}