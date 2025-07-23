const rat_race = new Proxy({"src":"/_astro/rat_race.DlTCMbPy.jpg","width":1800,"height":1057,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sloth/Documents/blog/src/images/rat_race.jpg";
							}
							
							return target[name];
						}
					});

export { rat_race as default };
