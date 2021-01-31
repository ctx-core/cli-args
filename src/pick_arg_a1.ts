import { _pick_flag_h } from './_pick_flag_h'
import { _flag_h_arg_a1 } from './_flag_h_arg_a1'
export function pick_arg_a1(arg_a1, ...param_dfn_a1) {
	const pick_flag_h = _pick_flag_h(arg_a1, ...param_dfn_a1)
	return _flag_h_arg_a1(pick_flag_h, arg_a1)
}
