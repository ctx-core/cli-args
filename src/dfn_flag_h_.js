import { each } from '@ctx-core/array';
import { flag_a_ } from './flag_a_';
export function dfn_flag_h_(param_dfn_a) {
    const dfn_flag_h = {};
    each(param_dfn_a, (param_dfn) => {
        const flag_a = flag_a_(typeof param_dfn === 'function'
            ? param_dfn()
            : param_dfn);
        each(flag_a, flag => {
            dfn_flag_h[flag] = flag_a;
        });
    });
    return dfn_flag_h;
}
export { dfn_flag_h_ as _dfn_flag_h, };
//# sourceMappingURL=src/dfn_flag_h_.js.map