export function error(errors: any[]) {
	return new Response(JSON.stringify({
		success: false,
		errors
	}), {
		status: 400
	})
}

export function success(data: Record<string, any>) {
	return new Response(JSON.stringify({
		success: true,
		data
	}), {
		status: 200
	})
}