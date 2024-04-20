import {
	component$,
	createContextId,
	Slot,
	useContext,
	useContextProvider,
} from "@builder.io/qwik";

import type { MenuProps, MenuState } from "./menu-type";

const MenuContext = createContextId<MenuState>("qwik-headlessui.menu");

const _MenuContextProvider = component$<MenuProps>(({ __isDemo = false }) => {
	useContextProvider(MenuContext, {
		__isDemo,

		isOpen: __isDemo,
		buttonRef: null,
		itemsData: {
			contents: [],
			activeIndex: null,
			ref: null,
		},
		searchQuery: "",
		activationTrigger: "other",
	});

	return <Slot />;
});

// TODO: Need to know the usage
const _useMenuContext = (component: string) => {
	const context = useContext(MenuContext); // eslint-disable-line qwik/use-method-usage
	if (context === null) {
		const err = new Error(
			`<${component} /> is missing a parent <Menu /> component.`,
		);
		if (Error.captureStackTrace) Error.captureStackTrace(err, _useMenuContext);
		throw err;
	}
	return context;
};
