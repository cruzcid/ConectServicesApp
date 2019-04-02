export interface Servicio {
    type: string,
    name: string,
    icon: string,
    address: string,
    home_delivery: boolean,
    has_physical_offices:boolean,
    price: number,
    product_description: string,
    created_at: number,
    enterpriseId: number,
    availability: number
}
