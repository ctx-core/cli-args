export declare type param_dfn_T = string|(()=>string)
export declare type param_dfn_type = param_dfn_T
export declare type param_dfn_reducer_T = (param_dfn:param_dfn_T, string:string)=>string[]
export declare type param_dfn_reducer_type = param_dfn_reducer_T
export declare type param_dfn_a_T = [string, param_dfn_reducer_T]
export declare type param_name_r_param_dfn_T = Record<string, string>
export declare type param_name_h_param_dfn_type = param_name_r_param_dfn_T
export declare type param_r_T = Record<string, string[]>
export declare type paramRT = param_r_T
export declare type paramRecordT = param_r_T
