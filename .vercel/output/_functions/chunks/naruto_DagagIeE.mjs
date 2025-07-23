const naruto = new Proxy({"src":"/_astro/naruto.C_ZXXyWF.png","width":1800,"height":1000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sloth/Documents/blog/src/images/naruto.png";
							}
							
							return target[name];
						}
					});

export { naruto as default };
