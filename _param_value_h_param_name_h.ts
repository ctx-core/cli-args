import { isArray } from '@ctx-core/object'
import { param_dfn_h_param_name_h_type } from './param_dfn_h_param_name_h_type'
import { _param_name_h_flag_h } from './_param_name_h_flag_h'
import { flag_regex } from './flag_regex'
import { param_dfn_reducer_type } from './param_dfn_reducer_type'
export function _param_value_h_param_name_h(
	arg_a1:string[],
	h1__param_name__h0__param_dfn?:param_dfn_h_param_name_h_type
) {
	const h1__param_name__h0__param_value = {}
	const h1__flag__h0__param_name =
		_param_name_h_flag_h(h1__param_name__h0__param_dfn)
	let i = 0
	while (i < arg_a1.length) {
		const flag = arg_a1[i]
		const match = flag_regex.test(flag)
		let j = i + 1
		if (match) {
			const j__no_value = j
			const param_name = h1__flag__h0__param_name[flag] || flag
			const _param = ((
				isArray(h1__param_name__h0__param_dfn[param_name])
				&& h1__param_name__h0__param_dfn[param_name][1]
			) || ((_, val)=>val)) as param_dfn_reducer_type
			while (j < arg_a1.length && !flag_regex.test(arg_a1[j])) {
				h1__param_name__h0__param_value[param_name] =
					_param(
						h1__param_name__h0__param_value[param_name],
						arg_a1[j]
					)
				j += 1
			}
			if (j === j__no_value) {
				h1__param_name__h0__param_value[param_name] = true
			}
		}
		i = j
	}
	return h1__param_name__h0__param_value
}
