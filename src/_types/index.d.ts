export type param_dfn_T = string|(()=>string)
export type param_dfn_type = param_dfn_T
export type param_dfn_reducer_T =
	(param_dfn:param_dfn_T, string:string)=>
		string[]
export type param_dfn_reducer_type = param_dfn_reducer_T
export type param_dfn_a_T = [string, param_dfn_reducer_T]
export type param_name_R_param_dfn_T = Record<string, string>
export type param_name_r_param_dfn_T = param_name_R_param_dfn_T
export type param_name_h_param_dfn_type = param_name_R_param_dfn_T
export type param_R_T = Record<string, string[]>
export type param_r_T = param_R_T
export type paramRT = param_R_T
export type paramRecordT = param_R_T
