import { flag_regex } from './flag_regex'
export function flag_h_(arg_a:string[]):Record<string, string> {
	const flag_h:Record<string, string> = {}
	let i = 0
	while (i < arg_a.length) {
		const flag = arg_a[i]
		const match = flag_regex.test(flag)
		let j = i + 1
		if (match) {
			while (j < arg_a.length && !flag_regex.test(arg_a[j])) {
				const value = arg_a[j]
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
	flag_h_ as _flag_h,
	flag_h_ as _h__flag,
}
