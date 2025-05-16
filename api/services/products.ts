import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const getProductsService = async (id?: number) => {
    if (!id) {
        // Obtener todos los productos con una imagen y categoría
        const products = await prisma.products.findMany({
            include: {
                images: {
                    take: 1 // Solo la primera imagen
                },
                categories: true // Incluir la categoría
            }
        });
        // Opcional: adaptar el formato para que coincida con tu frontend
        return products.map(p => ({
            id: p.id,
            name: p.name,
            description: p.description,
            price: p.price,
            stock: p.stock,
            imageURL: p.images[0]?.imageurl ?? null,
            colorCode: p.images[0]?.colorcode ?? null,
            color: p.images[0]?.color ?? null,
            category: p.categories?.name ?? null // Devuelve el nombre de la categoría
        }));
    }
    
    const product = await prisma.products.findUnique({
        where: { id },
        include: {
            images: true,
            categories: true 
        }
    });
      return {...product}
};

export const getLatestProductsService = async () => {
    const products = await prisma.products.findMany({
        orderBy: { id: 'desc' },
        take: 6,
        include: {
            images: {
                take: 1
            }
        }
    });
    return products.map(p => ({
            id: p.id,
            name: p.name,
            description: p.description,
            price: p.price,
            stock: p.stock,
            imageURL: p.images[0]?.imageurl ?? null,
            colorCode: p.images[0]?.colorcode ?? null,
            color: p.images[0]?.color ?? null
    }));
};