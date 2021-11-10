import { each } from '@ctx-core/array'
import { flag_a_ } from './flag_a_.js'
import type { param_name_r_param_dfn_T } from './param_name_r_param_dfn_T.js'
export function flag_r_param_name_(
	param_dfn_r_param_name?:param_name_r_param_dfn_T
):Record<string, string> {
	const flag_r_param_name = {} as Record<string, string>
	for (let param_name in param_dfn_r_param_name) {
		const param_dfn = param_dfn_r_param_name[param_name]
		const flag_a = flag_a_(param_dfn)
		each<string>(flag_a,
			flag=>
				flag_r_param_name[flag] = param_name)
	}
	return flag_r_param_name
}
export {
	flag_r_param_name_ as flag_h_param_name_,
	flag_r_param_name_ as _flag_h_param_name,
}
