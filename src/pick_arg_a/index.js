import { flag_r_arg_a_ } from '../flag_r_arg_a_/index.js'
import { pick_flag_r_ } from '../pick_flag_r_/index.js'
/**
 * @param arg_a{string[]}
 * @param param_dfn_a{import('../_types').param_dfn_T}
 * @returns {string[]}
 */
export function pick_arg_a(arg_a, ...param_dfn_a) {
	const pick_flag_r = pick_flag_r_(arg_a, ...param_dfn_a)
	return flag_r_arg_a_(pick_flag_r, arg_a)
}
export { pick_arg_a as pick_arg_a1, }
