import { flag_regex } from './flag_regex'
export function _flag_h(arg_a1: string[]) {
	const flag_h = {}
	let i = 0
	while (i < arg_a1.length) {
		const flag = arg_a1[i]
		const match = flag_regex.test(flag)
		let j = i + 1
		if (match) {
			while (j < arg_a1.length && !flag_regex.test(arg_a1[j])) {
				const value = arg_a1[j]
				if (flag_h[flag]) {
					flag_h[flag] += ` ${value}`
				} else {
					flag_h[flag] = value
				}
				j += 1
			}
		}
		if (!(flag in flag_h)) flag_h[flag] = null
		i = j
	}
	return flag_h as Record<string, string>
}
export const _h__flag = _flag_h
