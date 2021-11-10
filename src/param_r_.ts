import { assign, keys, pick } from '@ctx-core/object'
import type { param_name_r_param_dfn_T } from './param_name_r_param_dfn_T.js'
import { param_name_r_param_val_a_ } from './param_name_r_param_val_a_.js'
import type { param_r_T } from './param_r_T.js'
export function param_r_(
	arg_a:string[],
	param_dfn_r_param_name?:param_name_r_param_dfn_T,
	default_value_r_param_name:param_r_default_value_r_param_name_T = {} as param_r_default_value_r_param_name_T
):param_r_T {
	const param_r = param_name_r_param_val_a_(arg_a, param_dfn_r_param_name)
	const default_param_r:Record<keyof param_r_T, default_param_T> = {}
	for (let param_name in default_value_r_param_name) {
		if (param_r[param_name] == null) {
			default_param_r[param_name] = default_value_r_param_name[param_name]
		}
	}
	assign(param_r, default_param_r)
	if (param_dfn_r_param_name) {
		const param_name_a = keys(param_dfn_r_param_name)
		return pick(param_r, ...param_name_a) as param_r_T
	}
	return param_r as param_r_T
}
export type default_param_T = string[]
export type param_r_default_value_r_param_name_T = Record<string, default_param_T>
export {
	param_r_ as param_h_fn,
	param_r_ as param_h_,
	param_r_ as _param_h,
	param_r_ as _h__param,
	param_r_ as _param_h__pick__default,
}
