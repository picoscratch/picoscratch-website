import { error } from "@sveltejs/kit"

export async function load({ params, data }) {
	let post: { default: any; metadata: any; };
	const splitName = params.support.split('/');
	try {
		if (splitName.length === 1) {
			post = await import(`../../../../support/mint/${splitName[0]}.md`);
		}
		if (splitName.length === 2) {
			post = await import(`../../../../support/mint/${splitName[0]}/${splitName[1]}.md`);
		}
		if (splitName.length === 3) {
			post = await import(`../../../../support/mint/${splitName[0]}/${splitName[1]}/${splitName[2]}.md`);
		}
		if (splitName.length === 4) {
			post = await import(`../../../../support/mint/${splitName[0]}/${splitName[1]}/${splitName[2]}/${splitName[3]}.md`);
		}
	} catch (e) {}
	try {
		if(!post) {
			if (splitName.length === 1) {
				if(splitName[0] === "") {
					// @ts-ignore
					post = await import(`../../../../support/mint/index.md`);
				} else {
					post = await import(`../../../../support/mint/${splitName[0]}/index.md`);
				}
			}
			if (splitName.length === 2) {
				post = await import(`../../../../support/mint/${splitName[0]}/${splitName[1]}/index.md`);
			}
			if (splitName.length === 3) {
				post = await import(`../../../../support/mint/${splitName[0]}/${splitName[1]}/${splitName[2]}/index.md`);
			}
			if (splitName.length === 4) {
				post = await import(`../../../../support/mint/${splitName[0]}/${splitName[1]}/${splitName[2]}/${splitName[3]}/index.md`);
			}
		}
	} catch (e) {
		console.log(e);
		
		error(404, `Could not find ${params.support}`);
	}

	return {
		content: post.default,
		meta: post.metadata
	}
}
