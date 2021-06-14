import { each } from '@ctx-core/array';
import { keys, pick } from '@ctx-core/object';
import { dfn_flag_h_ } from './dfn_flag_h_';
import { flag_h_ } from './flag_h_';
export function pick_flag_h_(arg_a, ...param_dfn_a) {
    const dfn_flag_h = dfn_flag_h_(param_dfn_a);
    const flag_h = flag_h_(arg_a);
    const pick_flag_a = [];
    each(keys(flag_h), flag => {
        if (flag in dfn_flag_h) {
            pick_flag_a.push(flag);
        }
    });
    return pick(flag_h, ...pick_flag_a);
}
export { pick_flag_h_ as _pick_flag_h, };
//# sourceMappingURL=src/pick_flag_h_.js.map