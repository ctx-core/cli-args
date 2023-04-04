import { each } from '@ctx-core/array'
import { keys, pick } from '@ctx-core/object'
import { dfn_flag_r_ } from '../dfn_flag_r_/index.js'
import { flag_r_ } from '../flag_r_/index.js'
/**
 * @param {string[]}arg_a
 * @param {import('../_types').param_dfn_T}param_dfn_a
 * @returns {Record<string, string>}
 * @private
 */
export function flag_r__pick(
	arg_a,
	...param_dfn_a
) {
	const dfn_flag_h = dfn_flag_r_(param_dfn_a)
	const flag_h = flag_r_(arg_a)
	const pick_flag_a = []
	each(keys(flag_h), (flag)=>{
		if (flag in dfn_flag_h) {
			pick_flag_a.push(flag)
		}
	})
	return pick(flag_h, ...pick_flag_a)
}
export {
	flag_r__pick as pick_flag_r_,
	flag_r__pick as pick_flag_h_,
	flag_r__pick as _pick_flag_h,
}
