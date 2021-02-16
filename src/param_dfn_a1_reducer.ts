import { tap } from '@ctx-core/function'
export function param_dfn_a1_reducer<O extends unknown[] = unknown[]>(memo, value):O {
	return tap<O>(memo || [], a1=>a1.push(value))
}
