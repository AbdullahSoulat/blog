const hongKongImage = new Proxy({"src":"/_astro/hong-kong-image.B5BkCsmI.jpg","width":696,"height":928,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sloth/Documents/blog/src/images/hong-kong-image.jpg";
							}
							
							return target[name];
						}
					});

export { hongKongImage as default };
