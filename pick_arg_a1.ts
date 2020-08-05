import { _pick_flag_h } from './_pick_flag_h'
import { _flag_h_arg_a1 } from './_flag_h_arg_a1'
export function pick_arg_a1(arg_a1, ...a1__param_dfn) {
	const pick_flag_h = _pick_flag_h(arg_a1, ...a1__param_dfn)
	return _flag_h_arg_a1(pick_flag_h, arg_a1)
}
