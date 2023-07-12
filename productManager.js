class ProductManager{
    constructor() {
        this.products = [];
    }

    static id = 0;

    addProduct(title, description, price, thumbnail, code, stock){
        for(let i = 0; i < this.products.length; i++){
            if(this.products[i].code === code){
                console.log(`El codigo ${code} esta repetido`)
                break;
            }
        }
    
        const newProduct ={
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        if(!Object.values(newProduct).includes(undefined)){
            ProductManager.id++;
            this.products.push({
                ...newProduct,
                id: ProductManager.id,
            });
        } else {
            console.log("Todos los campos son requeridos")
        }
        
    }
        
    getProduct() {
        return this.products;
    }
        
    existe(id){
        return this.products.find((producto) => producto.id === id);
    }
    
    getProductById(id) {
        !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id));
    }
}

const productos = new ProductManager();

//Primer llamada = arreglo vacio
console.log(productos.getProduct());

//Agregamos Producto
productos.addProduct('Autito', 'Madera', 3000, 'Sin imagen', 'ab100', 30);
productos.addProduct('Avion', 'Madera', 3500, 'Sin imagen', 'ab101', 25);
productos.addProduct('Tren', 'Madera', 4000, 'Sin imagen', 'ab102', 20);

//Segunda llamada = arreglo con producto
console.log(productos.getProduct());

//Busqueda de productos por Id
productos.getProductById(3);

//Busqueda por Id no encontrado
productos.getProductById(4);