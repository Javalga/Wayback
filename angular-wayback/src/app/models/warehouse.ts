export class Warehouse {
    public warehouse_id: number;
    public name: string;
    public location: string; 
    public location_id: number;


    constructor(name?: string,  location?: string){
        this.name = name;
        this.location = location; 
    }
    
}
