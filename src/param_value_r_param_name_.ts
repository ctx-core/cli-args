import { isArray } from '@ctx-core/object'
import type { param_name_r_param_dfn_T } from './param_name_r_param_dfn_T'
import { flag_r_param_name_ } from './flag_r_param_name_'
import { flag_regex } from './flag_regex'
import type { param_dfn_reducer_T } from './param_dfn_reducer_T'
import type { param_dfn_T } from './default_arg_a_'
import type { param_record_T } from './param_record_T'
export function param_value_r_param_name_(
	arg_a:string[],
	param_name_h_param_dfn?:param_name_r_param_dfn_T
):param_record_T {
	const param_value_r_param_name = {} as param_record_T
	const param_name_r_flag = flag_r_param_name_(param_name_h_param_dfn)
	let i = 0
	while (i < arg_a.length) {
		const flag = arg_a[i]
		const match = flag_regex.test(flag)
		let j = i + 1
		if (match) {
			const no_value_j = j
			const param_name = param_name_r_flag[flag] || flag
			const param_ = ((
				param_name_h_param_dfn
				&& isArray(param_name_h_param_dfn[param_name])
				&& param_name_h_param_dfn[param_name][1]
			) || ((_, val)=>val)) as param_dfn_reducer_T
			while (j < arg_a.length && !flag_regex.test(arg_a[j])) {
				param_value_r_param_name[param_name] =
					param_(
						param_value_r_param_name[param_name] as param_dfn_T,
						arg_a[j]
					)
				j += 1
			}
			if (j === no_value_j) {
				param_value_r_param_name[param_name] = true
			}
		}
		i = j
	}
	return param_value_r_param_name
}
export {
	param_value_r_param_name_ as param_value_h_param_name_,
	param_value_r_param_name_ as _param_value_h_param_name,
}
