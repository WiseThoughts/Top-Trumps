export const signUp = async (signObj, setter) => {
	try {
		let path = `${process.env.REACT_APP_REST_API}user`; //grab url from .env file http://localhost:5001/
		console.log(`Path: ${path}`);

		const res = await fetch(path, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(signObj),
		});

		const data = await res.json();
		console.log(data);

		setter(data.user.username);
		localStorage.setItem("myToken", data.token);
	} catch (error) {
		console.log(error);
	}
};

export const tokenLogin = async (token, setter) => {
	try {
		const res = await fetch(`${process.env.REACT_APP_REST_API}login`, {
			method: "GET",
			headers: { Authorization: token },
		});

		console.log(res);
		const data = await res.json();
		setter(data.user);
	} catch (error) {
		console.log(error);
	}
};

export const logIn = async (signObj, setter) => {
	try {
		let path = `${process.env.REACT_APP_REST_API}login`;
		console.log(`Path: ${path}`);

		const res = await fetch(path, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(signObj),
		});

		const data = await res.json();
		console.log(`data:`);
		console.log(data);

		setter(data.user);
		localStorage.setItem("myToken", data.token);
	} catch (error) {
		console.log(error);
	}
};

export const updateFetch = async (
	user,
	username,
	email,
	password,
	setter
) => {
	try {
		console.log(
			JSON.stringify({
				user,
				username,
				email,
				password,
			})
		);
		const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				user,
				username,
				email,
				password,
			}),
		});
		console.log("res.body:");
		console.log(res.body);
		const data = await res.json();
		if (data.msg !== "Successfully Updated") {
			throw new Error(data.msg);
		}
		if (username) {
			setter(username);
		}
	} catch (error) {
		console.log(error);
	}
};

export const deleteFetch = async (setter) => {
	try {
		const res = await fetch(`${process.env.REACT_APP_REST_API}delete-account`, {
			method: "DELETE",
			headers: { Authorization: localStorage.getItem("myToken") },
		});
		console.log(res);
		const data = await res.json();
		console.log(data);
		if (data.msg !== "Successfully Deleted") {
			throw new Error(data.msg);
		} else {
			setter();
		}
	} catch (error) {
		console.log(error);
	}
};

export const createListing = async (listObj, setter) => {
	try {
		let path = `${process.env.REACT_APP_REST_API}sell`;
		console.log(`Path: ${path}`);

		const res = await fetch(path, {
			method: "POST",
			headers: { Authorization: localStorage.getItem("myToken") },
			body: JSON.stringify(listObj),
		});

		const data = await res.json();
		console.log(data);

		setter(data.listObj);
	} catch (error) {
		console.log(error);
	}
};

export const fetchListings = async (setter) => {
	try {
		const res = await fetch(`${process.env.REACT_APP_REST_API}shop`, {
			method: "GET",
		});
		const data = await res.json();
		console.log(data);
		setter(data);
	} catch (error) {
		console.log(error);
	}
};
