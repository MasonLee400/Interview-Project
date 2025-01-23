"use server";

//As a small comment, I did use Server Side because I find it more simple to manage CRUD however, I wished I used more client component to make routing a lot easier to do

import prisma from "@/app/lib/db";
import { revalidatePath } from "next/cache";

export async function createDog(formData: FormData) {
    await prisma.dog.create({
        data: {
            name: formData.get("name") as string,
            age: parseInt(formData.get("age") as string, 10),
            breed: formData.get("breed") as string,
            owner: formData.get("owner") as string
        }
    });

    revalidatePath("/app");
}

export async function searchDog(formData: FormData) {
    const name = formData.get("name") as string;
    await prisma.dog.updateMany({
        where: {
            name: {
                not: name
            }},
        data: {
            hidden: true
        }
    })
    revalidatePath("/app");
}

export async function resetDog(formData: FormData) {
    await prisma.dog.updateMany({
        data: {
            hidden: false
        } 
    })
    revalidatePath("/app");
}

export async function editDog(formData: FormData) {
    const id = formData.get("id") as string;
    await prisma.dog.update({
        where: { id },
        data: {
            name: formData.get("name") as string,
            breed: formData.get("breed") as string,
            age: parseInt(formData.get("age") as string, 10),
            owner: formData.get("owner") as string
        }
    });
}


export async function deleteDog(formData: FormData) {
    const id = formData.get("id") as string
    
    await prisma.dog.delete({ 
        where: {  id } });
    revalidatePath("/app");
}


