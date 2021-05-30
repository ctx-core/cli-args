import { param_dfn_split_regex } from './param_dfn_split_regex'
export function flag_a_(param_dfn: string):string[] {
	return param_dfn.split(param_dfn_split_regex) as string[]
}
export {
	flag_a_ as flag_a1_fn,
	flag_a_ as _flag_a1,
	flag_a_ as _a1__flag,
}
