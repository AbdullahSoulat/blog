const world_disappers = new Proxy({"src":"/_astro/world_disappers.CrQRh1Zs.jpg","width":1800,"height":990,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sloth/Documents/blog/src/images/world_disappers.jpg";
							}
							
							return target[name];
						}
					});

export { world_disappers as default };
