import { isArray } from '@ctx-core/object'
import type { param_name_h_param_dfn_type } from './param_name_h_param_dfn_type'
import { _flag_h_param_name } from './_flag_h_param_name'
import { flag_regex } from './flag_regex'
import type { param_dfn_reducer_type } from './param_dfn_reducer_type'
import type { param_dfn_type } from './_default_arg_a1'
import type { param_record_type } from './param_record_type'
export function _param_value_h_param_name_h(
	arg_a1:string[],
	param_name_h_param_dfn?:param_name_h_param_dfn_type
) {
	const param_value_h0_param_name_h1 = {} as param_record_type
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
			) || ((_, val)=>val)) as param_dfn_reducer_type
			while (j < arg_a1.length && !flag_regex.test(arg_a1[j])) {
				param_value_h0_param_name_h1[param_name] =
					_param(
						param_value_h0_param_name_h1[param_name] as param_dfn_type,
						arg_a1[j]
					)
				j += 1
			}
			if (j === no_value_j) {
				param_value_h0_param_name_h1[param_name] = true
			}
		}
		i = j
	}
	return param_value_h0_param_name_h1
}
