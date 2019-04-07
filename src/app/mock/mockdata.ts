import { User } from '../beans/user'
import { Servicio } from '../beans/servicio';
import { Empresa } from '../beans/empresa'

export const EMPRESAS: Empresa[] = [
    {
        email: 'maferEnterprise@gmail.com',
        razon_social:'ADMINISTRADORA CHELIN SA DE CV',
        estado:'CDMX',
        municipio:'AZCAPOTZALCO',
        calle:'ANTONIO VALERIANO',
        numero:'211',
        telefono:'5355316611',
        giro: 'SERVICIOS DE BIENES RAICES',
        colonia:'AZCAPOTZALCO',
        codigo_postal:'6430',
        rango_de_empleados:''
    }
];
export const USERS: User[] = [
    { email: 'mafer@gmail.com', password: "admin", username: "mafer", empresa: EMPRESAS[0]},
    { email: 'raziel@gmail.com',  password: "admin",  username: "raziel",empresa: EMPRESAS[0] }, 
    { email: 'cruz@gmail.com', password: "admin", username:"cruz",empresa: EMPRESAS[0]},  
    { email: 'pyme@gmail.com',    password: "admin", username:"pyme",empresa: EMPRESAS[0] },
    { email: 'ecommerce@gmail.com',  password: "admin" , username:"ecommerce", empresa: EMPRESAS[0] }
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