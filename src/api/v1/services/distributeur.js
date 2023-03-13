import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

/*const allUsers = await prisma.recette.findMany({
   
})*/

/*const allUsers = await prisma.recette.findMany({
    include: {
        categoryrecette : true
    }
})*/


export async function getDrinkCategory(idCategory) {
    const drinks = await prisma.recette.findMany({
        where : {
            idCategRecette:idCategory["id"]
        }
    })
    return drinks
}
export async function getCategories() {
    const allCategories = await prisma.categoryrecette.findMany();
    return allCategories;
}
export async function getDrinkInfo(idDrink){
    const drink = await prisma.recette.findUnique({
        where : {
            id:idDrink["id"]
        }
    })
    return drink
}

export async function getToppings(){
    const topping = await prisma.toppings.findMany()
    return topping
}

export async function getInfoTopping(idTopping){
    const topping = await prisma.toppings.findUnique({
        where : { 
            id:idTopping["id"]
        }
    })
    return topping
}
export function add(x,y)
{
    return x+y
}


