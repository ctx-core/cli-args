import type { param_name_h_param_dfn_T } from './param_name_h_param_dfn_T';
import type { param_record_T } from './param_record_T';
import type { param_dfn_T } from './default_arg_a_';
export declare function param_h_fn(arg_a: string[], param_dfn_h_param_name_h?: param_name_h_param_dfn_T, default_value_h_param_name?: _param_h_default_value_h_param_name_T): param_record_T;
export declare type default_param_T = string | number | boolean | param_dfn_T;
export declare type _param_h_default_value_h_param_name_value_T = default_param_T | ((param_h: param_record_T, param_name: string) => default_param_T);
export declare type _param_h_default_value_h_param_name_T = Record<string, _param_h_default_value_h_param_name_value_T>;
export { param_h_fn as _param_h, param_h_fn as _h__param, param_h_fn as _param_h__pick__default, };