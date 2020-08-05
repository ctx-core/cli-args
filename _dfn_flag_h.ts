import { each } from '@ctx-core/array'
import { _flag_a1 } from './_flag_a1'
export function _dfn_flag_h(param_dfn_a1) {
	const dfn_flag_h = {}
	each(param_dfn_a1, param_dfn=>{
		const flag_a1 = _flag_a1(param_dfn)
		each(flag_a1, flag=>{
			dfn_flag_h[flag] = flag_a1
		})
	})
	return dfn_flag_h
}
