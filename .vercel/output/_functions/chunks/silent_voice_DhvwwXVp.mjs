const silent_voice = new Proxy({"src":"/_astro/silent_voice.BonHHagC.jpg","width":1800,"height":1034,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sloth/Documents/blog/src/images/silent_voice.jpg";
							}
							
							return target[name];
						}
					});

export { silent_voice as default };
