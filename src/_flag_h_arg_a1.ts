import { reduce } from '@ctx-core/array'
import { keys } from '@ctx-core/object'
export function _flag_h_arg_a1<O extends unknown = unknown>(
	flag_h:Record<string, O>, arg_a1:string[]
):(string|O)[] {
	return reduce<string, (string|O)[]>(
		keys(flag_h),
		(memo, flag)=>{
			memo.push(flag)
			const _value = flag_h[flag]
			const value =
				typeof _value === 'function'
				? _value(arg_a1)
				: _value
			if (value != null) {
				memo.push(...[].concat(value))
			}
			return memo
		},
		[]
	)
}
