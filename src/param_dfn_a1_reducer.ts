import { tap } from '@ctx-core/function'
export function param_dfn_a1_reducer(memo, value):unknown[] {
	return tap(memo || [], a1=>a1.push(value))
}
