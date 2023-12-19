import { reduce } from 'ctx-core/array'
import { keys } from 'ctx-core/object'
/**
 * @param {Record<string, unknown>}flag_R
 * @param {string[]}arg_a
 * @returns {string|unknown}
 * @private
 */
export function flag_R_arg_a_(
	flag_R,
	arg_a
) {
	return reduce(keys(flag_R), (memo, flag)=>{
		memo.push(flag)
		const _value = flag_R[flag]
		const value = typeof _value === 'function' ? _value(arg_a) : _value
		if (value != null) {
			memo.push(...[].concat(value))
		}
		return memo
	}, [])
}
export {
	flag_R_arg_a_ as flag_r_arg_a_,
	flag_R_arg_a_ as flag_h_arg_a_,
	flag_R_arg_a_ as _flag_h_arg_a1,
}
