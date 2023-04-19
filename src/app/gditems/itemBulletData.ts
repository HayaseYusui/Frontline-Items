/**
 * 弾のデータ
 */

/**
 * 拳銃弾
 */
// .45ACP
export const CAL_45ACP_MIN = "2d6-1";
export const CAL_45ACP_MAX = "3d6";
export const CAL_45ACP_PNT = "+0";
// 9x19mm
export const CAL_9X19_MIN = "1d6+1";
export const CAL_9X19_MAX = "2d6+3";
export const CAL_9X19_PNT = "+1";
// 9x18mm
export const CAL_9X18_MIN = "1d6-1";
export const CAL_9X18_MAX = "2d6";
export const CAL_9X18_PNT = "+2";
// 5.7x28mm
export const CAL_57X28_MIN = "1d6+2";
export const CAL_57X28_MAX = "2d6+4";
export const CAL_57X28_PNT = "+4";
// 5.8x21mm
export const CAL_58X21_MIN = "1d6+1";
export const CAL_58X21_MAX = "2d6+2";
export const CAL_58X21_PNT = "+3";
// .460 Rowland
export const CAL_460ROW_MIN = "2d6+2";
export const CAL_460ROW_MAX = "4d6+1";
export const CAL_460ROW_PNT = "+7";
// .40 S&W
export const CAL_40SW_MIN = "1d6+2";
export const CAL_40SW_MAX = "2d6+4";
export const CAL_40SW_PNT = "+1";
// 7.5FK
export const CAL_75FK_MIN = "2d6+1";
export const CAL_75FK_MAX = "3d6+2";
export const CAL_75FK_PNT = "+6";
// .357 Magnum
export const CAL_357MAG_MIN = "2d6-1";
export const CAL_357MAG_MAX = "3d6";
export const CAL_357MAG_PNT = "+2";
// .44 Magnum
export const CAL_44MAG_MIN = "3d6-2";
export const CAL_44MAG_MAX = "4d6-1";
export const CAL_44MAG_PNT = "+3";
// .380 ACP
export const CAL_380ACP_MIN = "1d6";
export const CAL_380ACP_MAX = "2d6-1";
export const CAL_380ACP_PNT = "+1";
// 10mm Auto
export const CAL_10MMA_MIN = "2d6";
export const CAL_10MMA_MAX = "3d6+2";
export const CAL_10MMA_PNT = "+4";
// .50 Action Express
export const CAL_50AE_MIN = "3d6-1";
export const CAL_50AE_MAX = "4d6+1";
export const CAL_50AE_PNT = "+3";
// .458 SOCOM
export const CAL_458SCM_MIN = "3d6-1";
export const CAL_458SCM_MAX = "4d6";
export const CAL_458SCM_PNT = "+4";

/**
 * ライフル弾
 */
// 5.56x45mm
export const CAL_556X45_MIN = "2d6+3";
export const CAL_556X45_MAX = "3d6+4";
export const CAL_556X45_PNT = "+5";
// 7.62x51mm
export const CAL_762X51_MIN = "2d6+2";
export const CAL_762X51_MAX = "3d6+7";
export const CAL_762X51_PNT = "+7";
// 5.45x39mm
export const CAL_545X39_MIN = "2d6+2";
export const CAL_545X39_MAX = "3d6+3";
export const CAL_545X39_PNT = "+5";
// 7.62x39mm
export const CAL_762X39_MIN = "2d6+2";
export const CAL_762X39_MAX = "3d6+7";
export const CAL_762X39_PNT = "+7";
// .300 Blackout
export const CAL_300BLK_MIN = "2d6+1";
export const CAL_300BLK_MAX = "3d6+2";
export const CAL_300BLK_PNT = "+4";
// 7.62x54mmR
export const CAL_762X54R_MIN = "2d6+8";
export const CAL_762X54R_MAX = "3d6+9";
export const CAL_762X54R_PNT = "+8";
// 6.5 Creedmoor
export const CAL_65CREED_MIN = "2d6+2";
export const CAL_65CREED_MAX = "3d6+5";
export const CAL_65CREED_PNT = "+6";
// 6.8mm Remington SPC
export const CAL_68RMSPC_MIN = "2d6+2";
export const CAL_68RMSPC_MAX = "3d6+4";
export const CAL_68RMSPC_PNT = "+4";
// 300 Winchester Magnum
export const CAL_300WM_MIN = "2d6+1";
export const CAL_300WM_MAX = "3d6+5";
export const CAL_300WM_PNT = "+6";
// .338 Lapua Magnum
export const CAL_338LM_MIN = "2d6+2";
export const CAL_338LM_MAX = "4d6+2";
export const CAL_338LM_PNT = "+8";
// 308 Winchester
export const CAL_308WIN_MIN = "2d6+1";
export const CAL_308WIN_MAX = "3d6+4";
export const CAL_308WIN_PNT = "+6";
// .338 Winchester Magnum
export const CAL_338WIN_MIN = "2d6+2";
export const CAL_338WIN_MAX = "4d6+3";
export const CAL_338WIN_PNT = "+8";
// .223 Remington
export const CAL_223REM_MIN = "1d6+1";
export const CAL_223REM_MAX = "2d6+3";
export const CAL_223REM_PNT = "+4";
// .30-06 Springfield
export const CAL_3006SP_MIN = "2d6+2";
export const CAL_3006SP_MAX = "3d6+7";
export const CAL_3006SP_PNT = "+7";

/**
 * 特殊弾
 */
// .50 BMG
export const CAL_50BGM_MIN = "3d6+15";
export const CAL_50BGM_MAX = "5D6+30";
export const CAL_50BGM_PNT = "+12";

/**
 * 散弾(近)
 */
// 12 Gauge
export const CAL_12G_MIN = "2d6+3";
export const CAL_12G_MAX = "3d6+4";
export const CAL_12G_PNT = "+1";
export const CAL_12G_RANGE = "[至近]:+2/3D6+2/4D6+4 [中]:+0/1D6+2/2D6+4";
// for KS-23M
export const CAL_23MM_MIN = "3d6+3";
export const CAL_23MM_MAX = "4d6+4";
export const CAL_23MM_PNT = "+1";
export const CAL_23MM_RANGE = "[至近]:+2/4D6+2/5D6+4 [中]:+0/2D6+2/3D6+4";

/**
 * 擲弾
 */
// 40mm Granade
export const CAL_40MM_MIN = "3d6";
export const CAL_40MM_MAX = "5d6+3";
export const CAL_40MM_PNT = "-";