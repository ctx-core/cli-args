import { assign, keys, pick } from '@ctx-core/object'
import type { param_dfn_h_param_name_h_type } from './param_dfn_h_param_name_h_type'
import { _param_value_h_param_name_h } from './_param_value_h_param_name_h'
export function _param_h<T = {[key: string]: string}>(
	arg_a1:string[],
	param_dfn_h_param_name_h?:param_dfn_h_param_name_h_type,
	default_value_h_param_name_h = {}
) {
	const param_h =
		_param_value_h_param_name_h(arg_a1, param_dfn_h_param_name_h)
	const default_param_h = {}
	for (let param_name in default_value_h_param_name_h) {
		if (param_h[param_name] == null) {
			const in_default_value = default_value_h_param_name_h[param_name]
			const out_default_value =
				typeof in_default_value === 'function'
				? in_default_value(param_h, param_name)
				: in_default_value
			default_param_h[param_name] = out_default_value
		}
	}
	assign(param_h, default_param_h)
	if (param_dfn_h_param_name_h) {
		const param_name_a1 = keys(param_dfn_h_param_name_h)
		return pick(param_h, ...param_name_a1) as T
	}
	return param_h as T
}
export const _h__param = _param_h
export const _param_h__pick__default = _param_h
