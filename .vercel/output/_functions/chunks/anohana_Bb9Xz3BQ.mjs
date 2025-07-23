const anohana = new Proxy({"src":"/_astro/anohana.CHuJQP5D.jpg","width":640,"height":360,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sloth/Documents/blog/src/images/anohana.jpg";
							}
							
							return target[name];
						}
					});

export { anohana as default };
