export interface Hospital {
  region: string,
  region_code: string,
  period: number,
  atleast_one_measure: number,
  immunization_measure: number, reportable_lab_results_measure: number, syndromic_surveillance_measure: number, registry_measure: number, stage_2_hospitals_all_measures: number, stage_1_hospitals_all_measures: number
}