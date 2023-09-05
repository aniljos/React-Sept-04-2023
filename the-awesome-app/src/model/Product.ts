export class Product{

    id: number|undefined;
    name: string|undefined;
    price: number|undefined;
    description: string|undefined;
    imageUrl: string|undefined;

    constructor(id?: number, name?: string, price?: number, description?: string, imageUrl?: string){
        this.id= id;
        this.name= name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}