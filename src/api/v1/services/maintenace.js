import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

/*const allUsers = await prisma.recette.findMany({
   
})*/

/*const allUsers = await prisma.recette.findMany({
    include: {
        categoryrecette : true
    }
})*/


export async function getTasks(idEntreprise) {
    const tasks = await prisma.tasks.findMany({
        where : {
            idEntre:idEntreprise["id"]
        }
    })
    return tasks
}

export async function getTasksFree(idEntreprise) {
    const tasks = await prisma.tasks.findMany({
        where : {
            idEntre:idEntreprise["id"],
            idUser:1 //BY DEFAULT IF A TASK ISNT ASSIGNED IT'LL HAVE 1
        }
    })
    return tasks
}

export async function getTasksAM(idAM) {
    const tasks = await prisma.tasks.findMany({
        where : {
            idUser:idAM["id"]
        }
    })
    return tasks
}

export async function getTaskInfo(idTask) {
    const tasks = await prisma.tasks.findMany({
        where : {
            id:idTask["id"]
        }
    })
    return tasks
}

export async function assignTaskAM(Obj) {
    const user = await prisma.tasks.create({
        data: {
            id : Obj["id"],
            idDistr: Obj["idDistr"],
            idUser:Obj["idUser"],
            idEntre:Obj["idEntre"],
            type:Obj["type"],
            isDone:Obj["isDone"],
            message:Obj["message"]
        },
      })
    return tasks
}


