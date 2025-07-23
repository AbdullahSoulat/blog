const blackMythWukong = new Proxy({"src":"/_astro/black-myth-wukong.y8ct6tSY.jpg","width":1280,"height":720,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sloth/Documents/blog/src/images/black-myth-wukong.jpg";
							}
							
							return target[name];
						}
					});

export { blackMythWukong as default };
