export interface ViewData {
    id: string;
    name: string;
    tag: string;
    weapons: ItemData[];
}

export interface ItemData {
    item_name: string;
    items_avatar: String;
    classify: number;
    fire_mode: string;
    reliability: string;
    r_point_blank: string;
    r_short: string;
    r_middle: string;
    r_long: string;
    penetration: string;
    non_penetration_damage: string;
    penetration_damage: string;
    range: string;
    mag_round: string;
    kinryoku: string;
    size: string;
    silence: string
    item_value: string
    mag_value: string;
    cartridge: string;
    item_width: string;
    item_weight: string;
    efficiency: string[];
    note: string;
}