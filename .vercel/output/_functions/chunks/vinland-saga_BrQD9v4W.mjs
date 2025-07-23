const vinlandSaga = new Proxy({"src":"/_astro/vinland-saga.CDhdPqAY.png","width":640,"height":360,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sloth/Documents/blog/src/images/vinland-saga.png";
							}
							
							return target[name];
						}
					});

export { vinlandSaga as default };
