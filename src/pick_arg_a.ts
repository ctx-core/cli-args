import { flag_r_arg_a_ } from './flag_r_arg_a_.js'
import type { param_dfn_T } from './param_dfn_T.js'
import { pick_flag_r_ } from './pick_flag_r_.js'
export function pick_arg_a(arg_a:string[], ...param_dfn_a:param_dfn_T[]):string[] {
	const pick_flag_r = pick_flag_r_(arg_a, ...param_dfn_a)
	return flag_r_arg_a_(pick_flag_r, arg_a)
}
export {
	pick_arg_a as pick_arg_a1,
}
