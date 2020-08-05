import { isArray } from '@ctx-core/object'
import { each } from '@ctx-core/array'
import { param_dfn_h_param_name_h_type } from './param_dfn_h_param_name_h_type'
import { _flag_a1 } from './_flag_a1'
export function _param_name_h_flag_h(
	h1__param_name__h0__param_dfn?:param_dfn_h_param_name_h_type
) {
	const h1__flag__h0__param_name = {}
	for (let param_name in h1__param_name__h0__param_dfn) {
		const param_dfn = h1__param_name__h0__param_dfn[param_name]
		const a1__flag =
			_flag_a1(
				isArray(param_dfn) ? param_dfn[0] : param_dfn)
		each(a1__flag,
			flag=>
				h1__flag__h0__param_name[flag] = param_name)
	}
	return h1__flag__h0__param_name
}
