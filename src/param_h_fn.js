import { assign, keys, pick } from '@ctx-core/object';
import { param_value_h_param_name_ } from './param_value_h_param_name_';
export function param_h_fn(arg_a, param_dfn_h_param_name_h, default_value_h_param_name = {}) {
    const param_h = param_value_h_param_name_(arg_a, param_dfn_h_param_name_h);
    const default_param_h = {};
    for (let param_name in default_value_h_param_name) {
        if (param_h[param_name] == null) {
            const in_default_value = default_value_h_param_name[param_name];
            const out_default_value = typeof in_default_value === 'function'
                ? in_default_value(param_h, param_name)
                : in_default_value;
            default_param_h[param_name] = out_default_value;
        }
    }
    assign(param_h, default_param_h);
    if (param_dfn_h_param_name_h) {
        const param_name_a = keys(param_dfn_h_param_name_h);
        return pick(param_h, ...param_name_a);
    }
    return param_h;
}
export { param_h_fn as _param_h, param_h_fn as _h__param, param_h_fn as _param_h__pick__default, };
//# sourceMappingURL=src/param_h_fn.js.map