import { isArray } from '@ctx-core/object';
import { flag_h_param_name_ } from './flag_h_param_name_';
import { flag_regex } from './flag_regex';
export function param_value_h_param_name_(arg_a, param_name_h_param_dfn) {
    const param_value_h_param_name = {};
    const param_name_h0_flag_h1 = flag_h_param_name_(param_name_h_param_dfn);
    let i = 0;
    while (i < arg_a.length) {
        const flag = arg_a[i];
        const match = flag_regex.test(flag);
        let j = i + 1;
        if (match) {
            const no_value_j = j;
            const param_name = param_name_h0_flag_h1[flag] || flag;
            const _param = ((param_name_h_param_dfn
                && isArray(param_name_h_param_dfn[param_name])
                && param_name_h_param_dfn[param_name][1]) || ((_, val) => val));
            while (j < arg_a.length && !flag_regex.test(arg_a[j])) {
                param_value_h_param_name[param_name] =
                    _param(param_value_h_param_name[param_name], arg_a[j]);
                j += 1;
            }
            if (j === no_value_j) {
                param_value_h_param_name[param_name] = true;
            }
        }
        i = j;
    }
    return param_value_h_param_name;
}
export { param_value_h_param_name_ as _param_value_h_param_name, };
//# sourceMappingURL=src/param_value_h_param_name_.js.map