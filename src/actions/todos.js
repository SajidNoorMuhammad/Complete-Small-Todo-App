"use server"

import { revalidatePath } from "next/cache";

export async function addTodos(formData) {
    const todo = formData.get('todo');
    fetch(`${process.env.API_URL}/api/todos`,
        {
            method: "Post",
            body: JSON.stringify({ todo })
        }
    )
    revalidatePath("/todos")
}