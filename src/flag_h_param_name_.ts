import { isArray } from '@ctx-core/object'
import { each } from '@ctx-core/array'
import type { param_name_h_param_dfn_T, param_dfn_a_T } from './param_name_h_param_dfn_T'
import { flag_a_ } from './flag_a_'
export function flag_h_param_name_(
	param_dfn_h_param_name?:param_name_h_param_dfn_T
):Record<string, string> {
	const flag_h_param_name = {} as Record<string, string>
	for (let param_name in param_dfn_h_param_name) {
		const param_dfn = param_dfn_h_param_name[param_name]
		const flag_a =
			flag_a_(
				isArray(param_dfn)
				? (param_dfn as param_dfn_a_T)[0]
				: param_dfn as string
			)
		each<string>(flag_a,
			flag=>
				flag_h_param_name[flag] = param_name)
	}
	return flag_h_param_name
}
export {
	flag_h_param_name_ as _flag_h_param_name,
}
