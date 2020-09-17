import { each } from '@ctx-core/array'
import { keys, pick } from '@ctx-core/object'
import { _dfn_flag_h } from './_dfn_flag_h'
import { _flag_h } from './_flag_h'
import type { param_dfn_type } from './_default_arg_a1'
export function _pick_flag_h(arg_a1:string[], ...param_dfn_a1: param_dfn_type[]) {
	const dfn_flag_h = _dfn_flag_h(param_dfn_a1)
	const flag_h = _flag_h(arg_a1)
	const pick_flag_a1 = []
	each(keys(flag_h), flag=>{
		if (flag in dfn_flag_h) {
			pick_flag_a1.push(flag)
		}
	})
	return pick(flag_h, ...pick_flag_a1)
}
