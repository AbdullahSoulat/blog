const steinsgate = new Proxy({"src":"/_astro/steinsgate.COaKMEts.png","width":1280,"height":720,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sloth/Documents/blog/src/images/steinsgate.png";
							}
							
							return target[name];
						}
					});

export { steinsgate as default };
