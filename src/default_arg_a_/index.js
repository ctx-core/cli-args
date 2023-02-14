import { every, find, some } from '@ctx-core/array'
import { keys } from '@ctx-core/object'
import { flag_a_ } from '../flag_a_/index.js'
import { flag_r_ } from '../flag_r_/index.js'
/**
 * @param arg_a{string[]}
 * @param value_r_param_dfn{Record<string, param_dfn_T>}
 * @param cancel_a{string[]}
 * @returns {string[]}
 */
export function default_arg_a_(
	arg_a, value_r_param_dfn = {}, cancel_a = []
) {
	const default_arg_a = arg_a.slice(0)
	const flag_h = flag_r_(default_arg_a)
	if (some(keys(flag_h), (flag)=>cancel_a.indexOf(flag) > -1
	)) {
		return default_arg_a
	}
	for (let param_dfn in value_r_param_dfn) {
		const flag_a = flag_a_(param_dfn)
		if (every(flag_a, (flag)=>!(flag in flag_h)
		)) {
			const value = value_r_param_dfn[param_dfn]
			const $value = typeof value === 'function' ? value() : value
			const flag1 = find(flag_a, (flag)=>/^--/.test(flag)
			) || flag_a[0]
			default_arg_a.push(flag1, $value)
		}
	}
	return default_arg_a
}
export {
	default_arg_a_ as default_arg_a1_fn,
	default_arg_a_ as _default_arg_a1,
	default_arg_a_ as _a1__arg__default,
}
