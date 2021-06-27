import { each } from '@ctx-core/array'
import { flag_a_ } from './flag_a_'
import type { param_dfn_T } from './default_arg_a_'
export function dfn_flag_r_(param_dfn_a:param_dfn_T[]):Record<string, string[]> {
	const dfn_flag_r = {} as Record<string, string[]>
	each(param_dfn_a, (param_dfn:param_dfn_T)=>{
		const flag_a = flag_a_(
			typeof param_dfn === 'function'
			? (param_dfn as ()=>string)() as string
			: param_dfn as string
		)
		each(flag_a, flag=>{
			dfn_flag_r[flag] = flag_a
		})
	})
	return dfn_flag_r
}
export {
	dfn_flag_r_ as dfn_flag_h_,
	dfn_flag_r_ as _dfn_flag_h,
}
