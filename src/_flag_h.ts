import { flag_regex } from './flag_regex'
export function _flag_h(arg_a1:string[]):Record<string, string> {
	const flag_h:Record<string, string> = {}
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
		if (!(flag in flag_h)) delete flag_h[flag]
		i = j
	}
	return flag_h
}
export {
	_flag_h as _h__flag
}
