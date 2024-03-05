export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  EndYear: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}

export interface locationUnits {
  id: number;
  locationId:number;
  name: string;
  city: string;
  EndYear: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
 
}
//--//////////////////////////////////////////////////

export interface Contact {
  phone: string;
  email: string;
}

export interface Developer {
  id: string | null;
  name:string | null;
  city: string| null;
  image: string| null;
  contact: Contact| null;
  description: string| null;
  website: string| null; 
}

export interface Project {
  project_id: number;
  project_name:string;
  project_location: string;
  project_start_date: string;
  project_delivery_date: string;
  project_main_image: string;
  project_short_description: string; 
  developer_id: number; 
}

export interface Unit {
  unit_id:number;
  unit_name:string;
  unit_building_name:string;
  unit_layout_url:string;
  unit_type_id:number;
  unit_total_price_aed:number;
  unit_total_price_usd:number;
  unit_total_price_uro:number;
  unit_total_price_kwit:number;
  unit_total_price_ksa:number;
  unit_area_sqf:number;
  unit_area_meter:number;
  unit_floor_no:number;
  unit_floor_name:string;

}

export interface ProjectDetails {
  project_id: number;
  project_name:string;
  project_location: string;
  project_start_date: string;
  project_delivery_date: Contact;
  project_main_image: string;
  project_short_description: string; 
  project_long_description: string; 
  project_location_image: string;
  project_sales_points: string;
  developer_id: number; 
  units:Unit[];
}