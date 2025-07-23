const heroImage = new Proxy({"src":"/_astro/hero.D-0KEARM.png","width":1439,"height":1752,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sloth/Documents/blog/src/images/hero.png";
							}
							
							return target[name];
						}
					});

export { heroImage as default };
