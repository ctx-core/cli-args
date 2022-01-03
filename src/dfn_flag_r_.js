import { each } from '@ctx-core/array'
import { flag_a_ } from './flag_a_.js'
export function dfn_flag_r_(param_dfn_a) {
	const dfn_flag_r = {}
	each(param_dfn_a, (param_dfn)=>{
		const flag_a = flag_a_(typeof param_dfn === 'function' ? param_dfn() : param_dfn)
		each(flag_a, (flag)=>{
			dfn_flag_r[flag] = flag_a
		})
	})
	return dfn_flag_r
}
export { dfn_flag_r_ as dfn_flag_h_, dfn_flag_r_ as _dfn_flag_h, }
