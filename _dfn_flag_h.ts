import { each } from '@ctx-core/array'
import { _flag_a1 } from './_flag_a1'
import type { param_dfn_type } from './_default_arg_a1'
export function _dfn_flag_h(param_dfn_a1: param_dfn_type[]) {
	const dfn_flag_h = {} as Record<string, string[]>
	each(param_dfn_a1, param_dfn=>{
		const flag_a1 = _flag_a1(param_dfn)
		each(flag_a1, flag=>{
			dfn_flag_h[flag] = flag_a1
		})
	})
	return dfn_flag_h
}
