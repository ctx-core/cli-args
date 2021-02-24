import { tap } from '@ctx-core/function'
export function param_dfn_a1_reducer<Out extends unknown[] = unknown[]>(memo, value):Out {
	return tap<Out>(memo || [], a1=>a1.push(value))
}
