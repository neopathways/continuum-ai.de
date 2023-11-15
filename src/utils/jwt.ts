import jsonwebtoken from "jsonwebtoken";
import "dotenv/config"

export function verifyToken(token: string): null | (jsonwebtoken.JwtPayload) {
	try {
		const decoded = jsonwebtoken.verify(token, process.env["JWT_SECRET"], {
			ignoreExpiration: false,
			algorithms: ["HS256"]
		})

		return decoded
	} catch(e) {
		return null
	}
}

export function signToken(payload: jsonwebtoken.JwtPayload, expiresIn: string = "1d"): string {
	return jsonwebtoken.sign(payload, process.env["JWT_SECRET"], {
		expiresIn,
		algorithm: "HS256"
	})
}