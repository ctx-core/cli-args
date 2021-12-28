import { reduce } from '@ctx-core/array'
import { keys } from '@ctx-core/object'
export function flag_r_arg_a_(flag_r, arg_a) {
	return reduce(keys(flag_r), (memo, flag)=>{
		memo.push(flag)
		const _value = flag_r[flag]
		const value = typeof _value === 'function' ? _value(arg_a) : _value
		if (value != null) {
			memo.push(...[].concat(value))
		}
		return memo
	}, [])
}
export { flag_r_arg_a_ as flag_h_arg_a_, flag_r_arg_a_ as _flag_h_arg_a1, }
//# sourceMappingURL=flag_r_arg_a_.js.map