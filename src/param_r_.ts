import { assign, keys, pick } from '@ctx-core/object'
import type { param_name_r_param_dfn_T } from './param_name_r_param_dfn_T'
import { param_value_r_param_name_ } from './param_value_r_param_name_'
import type { param_record_T } from './param_record_T'
import type { param_dfn_T } from './default_arg_a_'
export function param_r_(
	arg_a:string[],
	param_dfn_r_param_name?:param_name_r_param_dfn_T,
	default_value_r_param_name:param_r_default_value_r_param_name_T = {} as param_r_default_value_r_param_name_T
):param_record_T {
	const param_r = param_value_r_param_name_(arg_a, param_dfn_r_param_name)
	const default_param_r:Record<keyof param_record_T, default_param_T> = {}
	for (let param_name in default_value_r_param_name) {
		if (param_r[param_name] == null) {
			const in_default_value:param_r_default_value_r_param_name__T =
				default_value_r_param_name[param_name]
			const out_default_value:default_param_T =
				typeof in_default_value === 'function'
				? in_default_value(param_r, param_name)
				: in_default_value
			default_param_r[param_name] = out_default_value
		}
	}
	assign(param_r, default_param_r)
	if (param_dfn_r_param_name) {
		const param_name_a = keys(param_dfn_r_param_name)
		return pick(param_r, ...param_name_a) as param_record_T
	}
	return param_r as param_record_T
}
export type default_param_T = string|number|boolean|param_dfn_T
export type param_r_default_value_r_param_name__T =
	default_param_T|((param_r:param_record_T, param_name:string)=>default_param_T)
export type param_r_default_value_r_param_name_T =
	Record<string, param_r_default_value_r_param_name__T>
export {
	param_r_ as param_h_fn,
	param_r_ as _param_h,
	param_r_ as _h__param,
	param_r_ as _param_h__pick__default,
}
