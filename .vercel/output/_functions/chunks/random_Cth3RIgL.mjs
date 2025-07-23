const random = new Proxy({"src":"/_astro/random.BNUgqogU.jpg","width":4076,"height":2712,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sloth/Documents/blog/src/images/random.jpg";
							}
							
							return target[name];
						}
					});

export { random as default };
