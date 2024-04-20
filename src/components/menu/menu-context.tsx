import { createContextId } from "@builder.io/qwik";

import type { StateDefinition } from "./menu-type";

const _MenuContext = createContextId<StateDefinition>("qwik-headlessui.menu");
