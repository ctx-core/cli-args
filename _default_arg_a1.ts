import { every, find, some } from '@ctx-core/array'
import { keys } from '@ctx-core/object'
import { _flag_h } from './_flag_h'
import { _flag_a1 } from './_flag_a1'
export function _default_arg_a1(
	arg_a1,
	value_h_param_dfn_h = {},
	cancel_a1 = []
) {
	const default_arg_a1 = arg_a1.slice(0)
	const flag_h = _flag_h(default_arg_a1)
	if (some(keys(flag_h), flag=>cancel_a1.indexOf(flag) > -1)) {
		return default_arg_a1
	}
	for (let param_dfn in value_h_param_dfn_h) {
		const flag_a1 = _flag_a1(param_dfn)
		if (every(flag_a1, flag=>!(flag in flag_h))) {
			const value = value_h_param_dfn_h[param_dfn]
			const $value = typeof value === 'function' ? value() : value
			const flag =
				find(flag_a1, flag=>/^--/.test(flag))
				|| flag_a1[0]
			default_arg_a1.push(flag, $value)
		}
	}
	return default_arg_a1
}
export const _a1__arg__default = _default_arg_a1
