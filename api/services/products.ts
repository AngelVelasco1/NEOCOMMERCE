import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getProductsService = async (id?: number) => {
    if (!id) {
        // Obtener todos los productos con una imagen y categoría
        const products = await prisma.products.findMany({
            include: {
                images: {
                    take: 1 // Solo la primera imagen
                },
                category: true
            }
        });
        // Opcional: adaptar el formato para que coincida con tu frontend
        return products.map(p => ({
            id: p.id,
            name: p.name,
            description: p.description,
            price: p.price,
            stock: p.stock,
            imageURL: p.images[0]?.imageURL ?? null,
            colorCode: p.images[0]?.colorCode ?? null,
            color: p.images[0]?.color ?? null,
            category: p.category?.name ?? null
        }));
    }
    // Obtener un producto por id con todas sus imágenes
    const product = await prisma.products.findUnique({
        where: { id },
        include: {
            images: true
        }
    });
    return product;
};

export const getLatestProductsService = async () => {
    // Obtener los últimos 6 productos con una imagen
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
        imageURL: p.images[0]?.imageURL ?? null,
        colorCode: p.images[0]?.colorCode ?? null,
        color: p.images[0]?.color ?? null
    }));
};