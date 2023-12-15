//Realizar una clase "ProductManager"
class ProductManage {
    constructor() {
        //Constructor con elemento products, el cual sera un arreglo vacio
        this.products = [];
        this.productIdCounter = 1;
    }
  
    addProduct(productData) {
      // Validar que todos los campos sean obligatorios
      if (
        !productData.title ||
        !productData.description ||
        !productData.price ||
        !productData.thumbnail ||
        !productData.code ||
        !productData.stock
      ) {
        console.error('Todos los campos son obligatorios');
        return;
      }
  
      // Validar que no se repita el campo "code"
      const codeExists = this.products.some((product) => product.code === productData.code);
      if (codeExists) {
        console.error('El código ya existe. Por favor, elija otro.');
        return;
      }
  
      const newProduct = {
        //autoincrementable
        id: this.productIdCounter++,
        title: productData.title,
        description: productData.description,
        price: productData.price,
        thumbnail: productData.thumbnail,
        code: productData.code,
        stock: productData.stock,
      };
  
      this.products.push(newProduct);
      console.log('Producto agregado:', newProduct);
    }
    //devuelve todos los productos creados hasta el momento
    getProducts() {
      return this.products;
    }
    //busca en el arreglo products el producto que coincida con el id
    getProductById(productId) {
      const product = this.products.find((p) => p.id === productId);
      if (product) {
        return product;
      } else {
        console.error('Not found ID:', productId);
      }
    }
  }
  
  // Se crea la instancia
  const productManager = new ProductManage();

  //Se crea la instancia, regresa un arreglo vacio []
  console.log("Lista de productso: ", productManager.getProducts());
  
  productManager.addProduct({
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25,
  });
  
  // Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
  console.log('Lista de productos:', productManager.getProducts());
  
  //Arrojara un error al agregar este producto porque no puede ser repetido
  productManager.addProduct({
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25,
  });

   // se evalua un producto y se mostrará en consola: "Not found." si el producto no es encontrado
  const nonExistentProduct = productManager.getProductById(3);
 