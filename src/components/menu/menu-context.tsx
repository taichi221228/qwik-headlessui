import {
	component$,
	createContextId,
	Slot,
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
