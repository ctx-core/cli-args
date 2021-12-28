import { tap } from '@ctx-core/function'
export function param_dfn_a_reducer(memo, value) {
	return tap(memo || [], (a)=>a.push(value)
	)
}
export { param_dfn_a_reducer as param_dfn_a1_reducer, }
//# sourceMappingURL=param_dfn_a_reducer.js.map