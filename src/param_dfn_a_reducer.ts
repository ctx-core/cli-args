import { tap } from '@ctx-core/function'
export function param_dfn_a_reducer<Val extends unknown = unknown>(
	memo:Val[], value:Val
):Val[] {
	return tap<Val[]>(memo || [], a=>a.push(value))
}
export {
	param_dfn_a_reducer as param_dfn_a1_reducer,
}
