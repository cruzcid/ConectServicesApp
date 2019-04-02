import { User } from '../beans/user'
import { Servicio } from '../beans/servicio';
export const USERS: User[] = [
    { username: 'mafer@gmail.com', password: "admin" },
    { username: 'raziel@gmail.com',  password: "admin"  }, 
    { username: 'cruz@gmail.com', password: "admin" },  
    { username: 'pyme@gmail.com',    password: "admin"  },
    { username: 'ecommerce@gmail.com',  password: "admin"  }
];

export const SERVICIOS: Servicio[] = [
    {
        address: "P. Sherman St. Sydney",
        icon: 'construct',
        availability: 0,
        created_at: 1554075399302,
        enterpriseId: 123,
        has_physical_offices: true,
        home_delivery: true,
        name: "Fisioterapia general",
        price: 450,
        product_description: "Tratamiento de lesiones causadas durante actividad deportiva. ",
        type: "Deportes"
    },
    {
        address: "Ignacio Comonfort 654, Toluca, metepec",
        icon:'construct',
        availability: 0,
        created_at: 1554075399402,
        enterpriseId: 123,
        has_physical_offices: true,
        home_delivery: true,
        name: "Albañileria y plomeria",
        price: 700,
        product_description: "Trabajos de albañileria y plomeria",
        type: "Construccion"
    }
];