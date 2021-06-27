import { each } from '@ctx-core/array'
import { keys, pick } from '@ctx-core/object'
import { dfn_flag_r_ } from './dfn_flag_r_'
import { flag_r_ } from './flag_r_'
import type { param_dfn_T } from './default_arg_a_'
export function pick_flag_h_(
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
	pick_flag_h_ as _pick_flag_h,
}
