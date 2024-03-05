import { Injectable } from '@angular/core';
import { Developer, HousingLocation } from './models';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<Developer[]> {
    const data = this.developers; //wait fetch(this.url);
    //return await data.json() ?? [];
    return data;
  }

  async getHousingLocationById(id: number): Promise<HousingLocation> {
    // const data = await fetch(`${this.url}/${id}`);
    // return await data.json() ?? {};
    const data = this.locations //wait fetch(this.url);
    return data.filter(x => x.id == id)[0]; //wait fetch(this.url);

  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }



















  // --------------------------------------------------
  developers = [
    {
      "id": "1",
      "name": "Developer A",
      "city": "City A",
      "image": "developer_a_image.jpg",
      "contact": {
        "phone": "+1234567890",
        "email": "developer_a@example.com"
      },
      "description": "Developer A specializes in luxury residential projects.",
      "website": "https://developer-a.com"
    },
    {
      "id": "2",
      "name": "Developer B",
      "city": "City B",
      "image": "developer_b_image.jpg",
      "contact": {
        "phone": "+0987654321",
        "email": "developer_b@example.com"
      },
      "description": "Developer B focuses on commercial real estate development.",
      "website": "https://developer-b.com"
    },
    {
      "id": "3",
      "name": "Developer C",
      "city": "Dubai",
      "image": "developer_c_image.jpg",
      "contact": {
        "phone": "+9876543210",
        "email": "developer_c@example.com"
      },
      "description": "Developer C specializes in high-rise residential towers.",
      "website": "https://developer-c.com"
    },
    {
      "id": "4",
      "name": "Developer D",
      "city": "Sharjah",
      "image": "developer_d_image.jpg",
      "contact": {
        "phone": "+5678901234",
        "email": "developer_d@example.com"
      },
      "description": "Developer D focuses on affordable housing projects.",
      "website": "https://developer-d.com"
    },
    {
      "id": "5",
      "name": "Developer E",
      "city": "Dubai",
      "image": "developer_e_image.jpg",
      "contact": {
        "phone": "+1122334455",
        "email": "developer_e@example.com"
      },
      "description": "Developer E specializes in mixed-use developments.",
      "website": "https://developer-e.com"
    }
  ]

  projects = [
    {
      "project_id": 1,
      "project_name": "Project A",
      "project_location": "Location A",
      "project_start_date": "2023-01-15",
      "project_delivery_date": "2025-06-30",
      "project_main_image": "project_a_main_image.jpg",
      "project_short_description": "Project A is a residential complex with modern amenities.",
      "developer_id": 1
    },
    {
      "project_id": 2,
      "project_name": "Project B",
      "project_location": "Location B",
      "project_start_date": "2022-08-20",
      "project_delivery_date": "2024-12-15",
      "project_main_image": "project_b_main_image.jpg",
      "project_short_description": "Project B offers luxurious apartments with scenic views.",
      "developer_id": 1
    },
    {
      "project_id": 3,
      "project_name": "Project C",
      "project_location": "Location C",
      "project_start_date": "2023-03-10",
      "project_delivery_date": "2026-01-20",
      "project_main_image": "project_c_main_image.jpg",
      "project_short_description": "Project C is a mixed-use development with commercial and residential spaces.",
      "developer_id": 1
    },
    {
      "project_id": 4,
      "project_name": "Project D",
      "project_location": "Location D",
      "project_start_date": "2022-11-25",
      "project_delivery_date": "2025-07-05",
      "project_main_image": "project_d_main_image.jpg",
      "project_short_description": "Project D offers affordable housing options for middle-income families.",
      "developer_id": 2
    },
    {
      "project_id": 5,
      "project_name": "Project E",
      "project_location": "Location E",
      "project_start_date": "2024-02-12",
      "project_delivery_date": "2027-09-15",
      "project_main_image": "project_e_main_image.jpg",
      "project_short_description": "Project E features state-of-the-art amenities and sustainable design principles.",
      "developer_id": 2
    },
    {
      "project_id": 6,
      "project_name": "Project F",
      "project_location": "Location F",
      "project_start_date": "2023-07-30",
      "project_delivery_date": "2026-04-18",
      "project_main_image": "project_f_main_image.jpg",
      "project_short_description": "Project F offers high-end waterfront properties with breathtaking views.",
      "developer_id": 3
    },
    {
      "project_id": 7,
      "project_name": "Project G",
      "project_location": "Location G",
      "project_start_date": "2022-10-05",
      "project_delivery_date": "2025-08-25",
      "project_main_image": "project_g_main_image.jpg",
      "project_short_description": "Project G is a commercial development featuring office spaces and retail outlets.",
      "developer_id": 4
    },
    {
      "project_id": 8,
      "project_name": "Project H",
      "project_location": "Location H",
      "project_start_date": "2024-04-15",
      "project_delivery_date": "2027-11-20",
      "project_main_image": "project_h_main_image.jpg",
      "project_short_description": "Project H is an eco-friendly community offering green spaces and energy-efficient homes.",
      "developer_id": 4
    },
    {
      "project_id": 9,
      "project_name": "Project I",
      "project_location": "Location I",
      "project_start_date": "2023-09-08",
      "project_delivery_date": "2026-06-10",
      "project_main_image": "project_i_main_image.jpg",
      "project_short_description": "Project I features modern apartments with smart home technology and recreational facilities.",
      "developer_id": 4
    },
    {
      "project_id": 10,
      "project_name": "Project J",
      "project_location": "Location J",
      "project_start_date": "2022-12-20",
      "project_delivery_date": "2025-10-01",
      "project_main_image": "project_j_main_image.jpg",
      "project_short_description": "Project J offers premium villas in a gated community with 24/7 security.",
      "developer_id": 1
    }
  ]

  ProjectDetails = [{
    "project_id": 1,
    "project_name": "Project A",
    "project_location": "Location A",
    "project_start_date": "2023-01-15",
    "project_delivery_date": "2025-06-30",
    "project_main_image": "project_a_main_image.jpg",
    "project_location_image": "project_a_location_image.jpg",
    "project_long_description": "Project A is a residential complex with modern amenities.",
    "project_sales_points": "Close proximity to schools, parks, and shopping centers.",
    "developer_id": 1,
    "attachments": [
      {
        "attachment_name": "Floor Plans",
        "attachment_url": "https://example.com/project_a_floor_plans.pdf"
      },
      {
        "attachment_name": "Brochure",
        "attachment_url": "https://example.com/project_a_brochure.pdf"
      }
    ],
    "units": [
      {
        "unit_id": 1,
        "unit_name": "Unit 101",
        "unit_building_name": "Building A",
        "unit_layout_url": "https://example.com/unit_101_layout.jpg",
        "unit_type_id": 1,
        "unit_total_price_aed": 500000.00,
        "unit_total_price_usd": 136130.00,
        "unit_total_price_uro": 115000.00,
        "unit_total_price_kwit": 151500.00,
        "unit_total_price_ksa": 182000.00,
        "unit_area_sqf": 1000.00,
        "unit_area_meter": 92.90,
        "unit_floor_no": 1,
        "unit_floor_name": "Ground Floor"
      },
      {
        "unit_id": 2,
        "unit_name": "Unit 201",
        "unit_building_name": "Building A",
        "unit_layout_url": "https://example.com/unit_201_layout.jpg",
        "unit_type_id": 2,
        "unit_total_price_aed": 700000.00,
        "unit_total_price_usd": 190592.00,
        "unit_total_price_uro": 161000.00,
        "unit_total_price_kwit": 211500.00,
        "unit_total_price_ksa": 253000.00,
        "unit_area_sqf": 1500.00,
        "unit_area_meter": 139.35,
        "unit_floor_no": 2,
        "unit_floor_name": "First Floor"
      },
      {
        "unit_id": 3,
        "unit_name": "Unit 301",
        "unit_building_name": "Building B",
        "unit_layout_url": "https://example.com/unit_301_layout.jpg",
        "unit_type_id": 1,
        "unit_total_price_aed": 600000.00,
        "unit_total_price_usd": 163356.00,
        "unit_total_price_uro": 138000.00,
        "unit_total_price_kwit": 181800.00,
        "unit_total_price_ksa": 218400.00,
        "unit_area_sqf": 1200.00,
        "unit_area_meter": 111.48,
        "unit_floor_no": 3,
        "unit_floor_name": "Second Floor"
      },
      {
        "unit_id": 4,
        "unit_name": "Unit 401",
        "unit_building_name": "Building B",
        "unit_layout_url": "https://example.com/unit_401_layout.jpg",
        "unit_type_id": 2,
        "unit_total_price_aed": 800000.00,
        "unit_total_price_usd": 217874.00,
        "unit_total_price_uro": 184000.00,
        "unit_total_price_kwit": 242000.00,
        "unit_total_price_ksa": 290000.00,
        "unit_area_sqf": 1800.00,
        "unit_area_meter": 167.23,
        "unit_floor_no": 4,
        "unit_floor_name": "Third Floor"
      },
      {
        "unit_id": 5,
        "unit_name": "Unit 501",
        "unit_building_name": "Building C",
        "unit_layout_url": "https://example.com/unit_501_layout.jpg",
        "unit_type_id": 1,
        "unit_total_price_aed": 550000.00,
        "unit_total_price_usd": 149692.00,
        "unit_total_price_uro": 126500.00,
        "unit_total_price_kwit": 166350.00,
        "unit_total_price_ksa": 199500.00,
        "unit_area_sqf": 1100.00,
        "unit_area_meter": 102.19,
        "unit_floor_no": 5,
        "unit_floor_name": "Fourth Floor"
      },
      {
        "unit_id": 6,
        "unit_name": "Unit 601",
        "unit_building_name": "Building C",
        "unit_layout_url": "https://example.com/unit_601_layout.jpg",
        "unit_type_id": 2,
        "unit_total_price_aed": 750000.00,
        "unit_total_price_usd": 204219.00,
        "unit_total_price_uro": 172500.00,
        "unit_total_price_kwit": 226875.00,
        "unit_total_price_ksa": 271500.00,
        "unit_area_sqf": 1600.00,
        "unit_area_meter": 148.64,
        "unit_floor_no": 6,
        "unit_floor_name": "Fifth Floor"
      },
      {
        "unit_id": 7,
        "unit_name": "Unit 701",
        "unit_building_name": "Building D",
        "unit_layout_url": "https://example.com/unit_701_layout.jpg",
        "unit_type_id": 1,
        "unit_total_price_aed": 650000.00,
        "unit_total_price_usd": 176518.00,
        "unit_total_price_uro": 149000.00,
        "unit_total_price_kwit": 195750.00,
        "unit_total_price_ksa": 234000.00,
        "unit_area_sqf": 1300.00,
        "unit_area_meter": 120.77,
        "unit_floor_no": 7,
        "unit_floor_name": "Sixth Floor"
      },
      {
        "unit_id": 8,
        "unit_name": "Unit 801",
        "unit_building_name": "Building D",
        "unit_layout_url": "https://example.com/unit_801_layout.jpg",
        "unit_type_id": 2,
        "unit_total_price_aed": 850000.00,
        "unit_total_price_usd": 231255.00,
        "unit_total_price_uro": 195000.00,
        "unit_total_price_kwit": 255750.00,
        "unit_total_price_ksa": 306000.00,
        "unit_area_sqf": 2000.00,
        "unit_area_meter": 185.80,
        "unit_floor_no": 8,
        "unit_floor_name": "Seventh Floor"
      },
      {
        "unit_id": 9,
        "unit_name": "Unit 901",
        "unit_building_name": "Building E",
        "unit_layout_url": "https://example.com/unit_901_layout.jpg",
        "unit_type_id": 1,
        "unit_total_price_aed": 600000.00,
        "unit_total_price_usd": 163356.00,
        "unit_total_price_uro": 138000.00,
        "unit_total_price_kwit": 181800.00,
        "unit_total_price_ksa": 218400.00,
        "unit_area_sqf": 1200.00,
        "unit_area_meter": 111.48,
        "unit_floor_no": 9,
        "unit_floor_name": "Eighth Floor"
      },
      {
        "unit_id": 10,
        "unit_name": "Unit 1001",
        "unit_building_name": "Building E",
        "unit_layout_url": "https://example.com/unit_1001_layout.jpg",
        "unit_type_id": 2,
        "unit_total_price_aed": 800000.00,
        "unit_total_price_usd": 217874.00,
        "unit_total_price_uro": 184000.00,
        "unit_total_price_kwit": 242000.00,
        "unit_total_price_ksa": 290000.00,
        "unit_area_sqf": 1800.00,
        "unit_area_meter": 167.23,
        "unit_floor_no": 10,
        "unit_floor_name": "Ninth Floor"
      },
      {
        "unit_id": 11,
        "unit_name": "Unit 1101",
        "unit_building_name": "Building F",
        "unit_layout_url": "https://example.com/unit_1101_layout.jpg",
        "unit_type_id": 1,
        "unit_total_price_aed": 550000.00,
        "unit_total_price_usd": 149692.00,
        "unit_total_price_uro": 126500.00,
        "unit_total_price_kwit": 166350.00,
        "unit_total_price_ksa": 199500.00,
        "unit_area_sqf": 1100.00,
        "unit_area_meter": 102.19,
        "unit_floor_no": 11,
        "unit_floor_name": "Tenth Floor"
      },
      {
        "unit_id": 12,
        "unit_name": "Unit 1201",
        "unit_building_name": "Building F",
        "unit_layout_url": "https://example.com/unit_1201_layout.jpg",
        "unit_type_id": 2,
        "unit_total_price_aed": 750000.00,
        "unit_total_price_usd": 204219.00,
        "unit_total_price_uro": 172500.00,
        "unit_total_price_kwit": 226875.00,
        "unit_total_price_ksa": 271500.00,
        "unit_area_sqf": 1600.00,
        "unit_area_meter": 148.64,
        "unit_floor_no": 12,
        "unit_floor_name": "Eleventh Floor"
      },
      {
        "unit_id": 13,
        "unit_name": "Unit 1301",
        "unit_building_name": "Building G",
        "unit_layout_url": "https://example.com/unit_1301_layout.jpg",
        "unit_type_id": 1,
        "unit_total_price_aed": 650000.00,
        "unit_total_price_usd": 176518.00,
        "unit_total_price_uro": 149000.00,
        "unit_total_price_kwit": 195750.00,
        "unit_total_price_ksa": 234000.00,
        "unit_area_sqf": 1300.00,
        "unit_area_meter": 120.77,
        "unit_floor_no": 13,
        "unit_floor_name": "Twelfth Floor"
      },
      {
        "unit_id": 14,
        "unit_name": "Unit 1401",
        "unit_building_name": "Building G",
        "unit_layout_url": "https://example.com/unit_1401_layout.jpg",
        "unit_type_id": 2,
        "unit_total_price_aed": 850000.00,
        "unit_total_price_usd": 231255.00,
        "unit_total_price_uro": 195000.00,
        "unit_total_price_kwit": 255750.00,
        "unit_total_price_ksa": 306000.00,
        "unit_area_sqf": 2000.00,
        "unit_area_meter": 185.80,
        "unit_floor_no": 14,
        "unit_floor_name": "Thirteenth Floor"
      },
      {
        "unit_id": 15,
        "unit_name": "Unit 1501",
        "unit_building_name": "Building H",
        "unit_layout_url": "https://example.com/unit_1501_layout.jpg",
        "unit_type_id": 1,
        "unit_total_price_aed": 600000.00,
        "unit_total_price_usd": 163356.00,
        "unit_total_price_uro": 138000.00,
        "unit_total_price_kwit": 181800.00,
        "unit_total_price_ksa": 218400.00,
        "unit_area_sqf": 1200.00,
        "unit_area_meter": 111.48,
        "unit_floor_no": 15,
        "unit_floor_name": "Fourteenth Floor"
      },
      {
        "unit_id": 16,
        "unit_name": "Unit 1601",
        "unit_building_name": "Building H",
        "unit_layout_url": "https://example.com/unit_1601_layout.jpg",
        "unit_type_id": 2,
        "unit_total_price_aed": 800000.00,
        "unit_total_price_usd": 217874.00,
        "unit_total_price_uro": 184000.00,
        "unit_total_price_kwit": 242000.00,
        "unit_total_price_ksa": 290000.00,
        "unit_area_sqf": 1800.00,
        "unit_area_meter": 167.23,
        "unit_floor_no": 16,
        "unit_floor_name": "Fifteenth Floor"
      },
      {
        "unit_id": 17,
        "unit_name": "Unit 1701",
        "unit_building_name": "Building I",
        "unit_layout_url": "https://example.com/unit_1701_layout.jpg",
        "unit_type_id": 1,
        "unit_total_price_aed": 550000.00,
        "unit_total_price_usd": 149692.00,
        "unit_total_price_uro": 126500.00,
        "unit_total_price_kwit": 166350.00,
        "unit_total_price_ksa": 199500.00,
        "unit_area_sqf": 1100.00,
        "unit_area_meter": 102.19,
        "unit_floor_no": 17,
        "unit_floor_name": "Sixteenth Floor"
      },
      {
        "unit_id": 18,
        "unit_name": "Unit 1801",
        "unit_building_name": "Building I",
        "unit_layout_url": "https://example.com/unit_1801_layout.jpg",
        "unit_type_id": 2,
        "unit_total_price_aed": 750000.00,
        "unit_total_price_usd": 204219.00,
        "unit_total_price_uro": 172500.00,
        "unit_total_price_kwit": 226875.00,
        "unit_total_price_ksa": 271500.00,
        "unit_area_sqf": 1600.00,
        "unit_area_meter": 148.64,
        "unit_floor_no": 18,
        "unit_floor_name": "Seventeenth Floor"
      },
      {
        "unit_id": 19,
        "unit_name": "Unit 1901",
        "unit_building_name": "Building J",
        "unit_layout_url": "https://example.com/unit_1901_layout.jpg",
        "unit_type_id": 1,
        "unit_total_price_aed": 650000.00,
        "unit_total_price_usd": 176518.00,
        "unit_total_price_uro": 149000.00,
        "unit_total_price_kwit": 195750.00,
        "unit_total_price_ksa": 234000.00,
        "unit_area_sqf": 1300.00,
        "unit_area_meter": 120.77,
        "unit_floor_no": 19,
        "unit_floor_name": "Eighteenth Floor"
      },
      {
        "unit_id": 20,
        "unit_name": "Unit 2001",
        "unit_building_name": "Building J",
        "unit_layout_url": "https://example.com/unit_2001_layout.jpg",
        "unit_type_id": 2,
        "unit_total_price_aed": 850000.00,
        "unit_total_price_usd": 231255.00,
        "unit_total_price_uro": 195000.00,
        "unit_total_price_kwit": 255750.00,
        "unit_total_price_ksa": 306000.00,
        "unit_area_sqf": 2000.00,
        "unit_area_meter": 185.80,
        "unit_floor_no": 20,
        "unit_floor_name": "Nineteenth Floor"
      }
    ]
  }]

  locations = [
    {
      "id": 0,
      "name": "Acme Fresh Start Housing",
      "city": "Dubai",
      "state": "Dubai",
      "EndYear": "03/05/2024",
      "photo": "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
      "availableUnits": 4,
      "wifi": true,
      "laundry": true
    },
    {
      "id": 1,
      "name": "A113 Transitional Housing",
      "city": "Santa Monica",
      "state": "Dubai",
      "EndYear": "03/05/2024",
      "photo": "https://angular.io/assets/images/tutorials/faa/brandon-griggs-wR11KBaB86U-unsplash.jpg",
      "availableUnits": 0,
      "wifi": false,
      "laundry": true
    },
    {
      "id": 2,
      "name": "Warm Beds Housing Support",
      "city": "Dubai",
      "state": "AK",
      "EndYear": "03/05/2024",
      "photo": "https://angular.io/assets/images/tutorials/faa/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
      "availableUnits": 1,
      "wifi": false,
      "laundry": false
    },
    {
      "id": 3,
      "name": "Homesteady Housing",
      "city": "Chicago",
      "state": "IL",
      "EndYear": "03/05/2024",
      "photo": "https://angular.io/assets/images/tutorials/faa/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
      "availableUnits": 1,
      "wifi": true,
      "laundry": false
    },
    {
      "id": 4,
      "name": "Happy Homes Group",
      "city": "Gary",
      "state": "IN",
      "EndYear": "03/05/2024",
      "photo": "https://angular.io/assets/images/tutorials/faa/krzysztof-hepner-978RAXoXnH4-unsplash.jpg",
      "availableUnits": 1,
      "wifi": true,
      "laundry": false
    },
    {
      "id": 5,
      "name": "Hopeful Apartment Group",
      "city": "Oakland",
      "state": "CA",
      "EndYear": "03/05/2024",
      "photo": "https://angular.io/assets/images/tutorials/faa/r-architecture-JvQ0Q5IkeMM-unsplash.jpg",
      "availableUnits": 2,
      "wifi": true,
      "laundry": true
    },
    {
      "id": 6,
      "name": "Seriously Safe Towns",
      "city": "Oakland",
      "state": "CA",
      "EndYear": "03/05/2024",
      "photo": "https://angular.io/assets/images/tutorials/faa/phil-hearing-IYfp2Ixe9nM-unsplash.jpg",
      "availableUnits": 5,
      "wifi": true,
      "laundry": true
    },
    {
      "id": 7,
      "name": "Hopeful Housing Solutions",
      "city": "Oakland",
      "state": "CA",
      "EndYear": "03/10/2024",
      "photo": "https://angular.io/assets/images/tutorials/faa/r-architecture-GGupkreKwxA-unsplash.jpg",
      "availableUnits": 2,
      "wifi": true,
      "laundry": true
    },
    {
      "id": 8,
      "name": "Seriously Safe Towns",
      "city": "Oakland",
      "state": "CA",
      "EndYear": "03/05/2024",
      "photo": "https://angular.io/assets/images/tutorials/faa/saru-robert-9rP3mxf8qWI-unsplash.jpg",
      "availableUnits": 10,
      "wifi": false,
      "laundry": false
    },
    {
      "id": 9,
      "name": "Capital Safe Towns",
      "city": "Portland",
      "state": "OR",
      "EndYear": "03/10/2024",
      "photo": "https://angular.io/assets/images/tutorials/faa/webaliser-_TPTXZd9mOo-unsplash.jpg",
      "availableUnits": 6,
      "wifi": true,
      "laundry": true
    }
  ]

  locationUnits = [
    {
      "id": 0,
      "locationId": 4,
      "name": "Acme Fresh Start Housing",
      "city": "Chicago",
      "state": "IL",
      "EndYear": "03/05/2024",
      "photo": "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
      "availableUnits": 4,
      "wifi": true,
    },
    {
      "id": 1,
      "locationId": 4,
      "name": "A113 Transitional Housing",
      "city": "Santa Monica",
      "state": "CA",
      "EndYear": "03/05/2024",
      "photo": "https://angular.io/assets/images/tutorials/faa/brandon-griggs-wR11KBaB86U-unsplash.jpg",
      "availableUnits": 0,
      "wifi": false,
    },
  ]







}
