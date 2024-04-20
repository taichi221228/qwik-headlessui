import {
	component$,
	createContextId,
	Slot,
	useContext,
	useContextProvider,
} from "@builder.io/qwik";

import {
	ActivationTrigger,
	type MenuProps,
	MenuStates,
	type StateDefinition,
} from "./menu-type";

const MenuContext = createContextId<StateDefinition>("qwik-headlessui.menu");

const _MenuContextProvider = component$<MenuProps>(({ __demoMode = false }) => {
	const reducerBag = {
		__demoMode,
		menuState: __demoMode ? MenuStates.Open : MenuStates.Closed,
		buttonRef: null,
		itemsRef: null,
		items: [],
		searchQuery: "",
		activeItemIndex: null,
		activationTrigger: ActivationTrigger.Other,
	} satisfies StateDefinition;

	useContextProvider(MenuContext, reducerBag);

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
