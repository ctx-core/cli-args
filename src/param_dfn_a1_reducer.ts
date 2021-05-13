import { tap } from '@ctx-core/function'
export function param_dfn_a1_reducer<Val extends unknown = unknown>(memo:Val[], value:Val):Val[] {
	return tap<Val[]>(memo || [], a1=>a1.push(value))
}
