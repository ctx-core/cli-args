import { param_dfn_split_regex } from './param_dfn_split_regex'
export function _flag_a1(param_dfn: string):string[] {
	return param_dfn.split(param_dfn_split_regex) as string[]
}
export {
	_flag_a1 as _a1__flag
}