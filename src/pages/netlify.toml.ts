import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
const redirectsCollection = await getCollection("redirects");

export const GET: APIRoute = ({ site }) => {

	let redirects = [];


	for (let i = 0; i < redirectsCollection.length; i++) {
		const { data: { force, from, status, to } } = redirectsCollection[i];
		redirects.push(`[[redirects]]\nfrom = "${from}"\nto = "${to}"\nforce = ${force}\nstatus = ${status}\n`);
	}



	return new Response(redirects.join("\n"));
};