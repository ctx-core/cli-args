import type { param_name_r_param_dfn_T, param_r_T } from '../_types'
export declare function param_r_(
	arg_a:string[],
	param_dfn_r_param_name?:param_name_r_param_dfn_T,
	default_value_r_param_name?:param_r_default_value_r_param_name_T
):param_r_T
export declare type default_param_T = string[]
export declare type param_r_default_value_r_param_name_T = Record<string, default_param_T>
export {
	param_r_ as param_h_fn,
	param_r_ as param_h_,
	param_r_ as _param_h,
	param_r_ as _h__param,
	param_r_ as _param_h__pick__default,
}
