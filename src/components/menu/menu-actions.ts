import type { MenuActions, MenuStore } from "./menu-type";

const _useMenuActions = (store: MenuStore): MenuActions => ({
	openMenu: () => {
		store.isOpen = true;
	},
	closeMenu: () => {
		store.isOpen = false;
	},
});
