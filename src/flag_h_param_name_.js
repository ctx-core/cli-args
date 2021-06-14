import { isArray } from '@ctx-core/object';
import { each } from '@ctx-core/array';
import { flag_a_ } from './flag_a_';
export function flag_h_param_name_(param_dfn_h_param_name) {
    const flag_h_param_name = {};
    for (let param_name in param_dfn_h_param_name) {
        const param_dfn = param_dfn_h_param_name[param_name];
        const flag_a = flag_a_(isArray(param_dfn)
            ? param_dfn[0]
            : param_dfn);
        each(flag_a, flag => flag_h_param_name[flag] = param_name);
    }
    return flag_h_param_name;
}
export { flag_h_param_name_ as _flag_h_param_name, };
//# sourceMappingURL=src/flag_h_param_name_.js.map