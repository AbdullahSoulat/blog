const i_m_tired = new Proxy({"src":"/_astro/i'm_tired.BKs_G91X.png","width":1659,"height":1028,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sloth/Documents/blog/src/images/i'm_tired.png";
							}
							
							return target[name];
						}
					});

export { i_m_tired as default };
