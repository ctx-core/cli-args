import { pick_flag_h_ } from './pick_flag_h_'
import { flag_r_arg_a_ } from './flag_r_arg_a_'
import type { param_dfn_T } from './default_arg_a_'
export function pick_arg_a(arg_a:string[], ...param_dfn_a:param_dfn_T[]):string[] {
	const pick_flag_h = pick_flag_h_(arg_a, ...param_dfn_a)
	return flag_r_arg_a_(pick_flag_h, arg_a)
}
export {
	pick_arg_a as pick_arg_a1,
}
