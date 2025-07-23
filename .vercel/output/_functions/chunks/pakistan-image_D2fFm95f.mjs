const pakistanImage = new Proxy({"src":"/_astro/pakistan-image.C11DpBxV.jpg","width":960,"height":1280,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sloth/Documents/blog/src/images/pakistan-image.jpg";
							}
							
							return target[name];
						}
					});

export { pakistanImage as default };
