import { tap } from 'ctx-core/function'
/**
 * @param memo{unknown[]}
 * @param value{unknown}
 * @returns {unknown[]}
 */
export function param_dfn_a_reducer(memo, value) {
	return tap(
		memo || [],
		(a)=>a.push(value))
}
export { param_dfn_a_reducer as param_dfn_a1_reducer, }
