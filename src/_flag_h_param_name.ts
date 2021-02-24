import { isArray } from '@ctx-core/object'
import { each } from '@ctx-core/array'
import type { param_name_h_param_dfn_T, param_dfn_a1_type } from './param_name_h_param_dfn_T'
import { _flag_a1 } from './_flag_a1'
export function _flag_h_param_name(
	param_dfn_h_param_name?:param_name_h_param_dfn_T
):Record<string, string> {
	const flag_h_param_name = {} as Record<string, string>
	for (let param_name in param_dfn_h_param_name) {
		const param_dfn = param_dfn_h_param_name[param_name]
		const flag_a1 =
			_flag_a1(
				isArray(param_dfn)
				? (param_dfn as param_dfn_a1_type)[0]
				: param_dfn as string
			)
		each<string>(flag_a1,
			flag=>
				flag_h_param_name[flag] = param_name)
	}
	return flag_h_param_name
}
