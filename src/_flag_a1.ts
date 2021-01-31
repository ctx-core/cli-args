import { param_dfn_split_regex } from './param_dfn_split_regex'
export function _flag_a1(param_dfn: string) {
	return param_dfn.split(param_dfn_split_regex) as string[]
}
export const _a1__flag = _flag_a1
