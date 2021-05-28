import { isArray } from '@ctx-core/object'
import type { param_name_h_param_dfn_T } from './param_name_h_param_dfn_T'
import { _flag_h_param_name } from './_flag_h_param_name'
import { flag_regex } from './flag_regex'
import type { param_dfn_reducer_T } from './param_dfn_reducer_T'
import type { param_dfn_T } from './_default_arg_a1'
import type { param_record_T } from './param_record_T'
export function _param_value_h_param_name(
	arg_a1:string[],
	param_name_h_param_dfn?:param_name_h_param_dfn_T
):param_record_T {
	const param_value_h_param_name = {} as param_record_T
	const param_name_h0_flag_h1 = _flag_h_param_name(param_name_h_param_dfn)
	let i = 0
	while (i < arg_a1.length) {
		const flag = arg_a1[i]
		const match = flag_regex.test(flag)
		let j = i + 1
		if (match) {
			const no_value_j = j
			const param_name = param_name_h0_flag_h1[flag] || flag
			const _param = ((
				param_name_h_param_dfn
				&& isArray(param_name_h_param_dfn[param_name])
				&& param_name_h_param_dfn[param_name][1]
			) || ((_, val)=>val)) as param_dfn_reducer_T
			while (j < arg_a1.length && !flag_regex.test(arg_a1[j])) {
				param_value_h_param_name[param_name] =
					_param(
						param_value_h_param_name[param_name] as param_dfn_T,
						arg_a1[j]
					)
				j += 1
			}
			if (j === no_value_j) {
				param_value_h_param_name[param_name] = true
			}
		}
		i = j
	}
	return param_value_h_param_name
}
