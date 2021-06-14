import { pick_flag_h_ } from './pick_flag_h_';
import { flag_h_arg_a_ } from './flag_h_arg_a_';
export function pick_arg_a(arg_a, ...param_dfn_a) {
    const pick_flag_h = pick_flag_h_(arg_a, ...param_dfn_a);
    return flag_h_arg_a_(pick_flag_h, arg_a);
}
export { pick_arg_a as pick_arg_a1, };
//# sourceMappingURL=src/pick_arg_a.js.map