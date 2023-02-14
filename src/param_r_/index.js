import { assign, keys, pick } from '@ctx-core/object'
import { param_name_r_param_val_a_ } from '../param_name_r_param_val_a_/index.js'
/** @type {typeof import('./index.d.ts').param_r_} */
export const param_r_ = (
	arg_a,
	param_dfn_r_param_name,
	default_value_r_param_name = {}
)=>{
	const param_r = param_name_r_param_val_a_(arg_a, param_dfn_r_param_name)
	/** @type {Record<keyof param_r_T, default_param_T>} */
	const default_param_r = {}
	for (let param_name in default_value_r_param_name) {
		if (param_r[param_name] == null) {
			default_param_r[param_name] = default_value_r_param_name[param_name]
		}
	}
	assign(param_r, default_param_r)
	if (param_dfn_r_param_name) {
		const param_name_a = keys(param_dfn_r_param_name)
		return pick(param_r, ...param_name_a)
	}
	/** @type {param_r_T} */
	return param_r
}
