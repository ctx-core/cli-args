import { each } from '@ctx-core/array'
import { keys, pick } from '@ctx-core/object'
import { dfn_flag_r_ } from './dfn_flag_r_.js'
import { flag_r_ } from './flag_r_.js'
import type { param_dfn_T } from './param_dfn_T.js'
export function pick_flag_r_(
	arg_a:string[],
	...param_dfn_a:param_dfn_T[]
):Record<string, string> {
	const dfn_flag_h = dfn_flag_r_(param_dfn_a)
	const flag_h = flag_r_(arg_a)
	const pick_flag_a = [] as string[]
	each(keys(flag_h), flag=>{
		if (flag in dfn_flag_h) {
			pick_flag_a.push(flag)
		}
	})
	return pick(flag_h, ...pick_flag_a) as Record<string, string>
}
export {
	pick_flag_r_ as pick_flag_h_,
	pick_flag_r_ as _pick_flag_h,
}
