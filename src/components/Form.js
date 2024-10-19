"use client";

import { addTodos } from "@/actions/todos";
import { useRef } from "react";

const Form = () => {
    const formRef = useRef(null)
    return (
        <form
            ref={formRef}
            action={async (formData) => {
                await addTodos(formData);
                formRef.current?.reset();
            }} className=' relative flex mt-10'>
            <input
                placeholder=' Add Task'
                type='text'
                name='todo'
                className=' border-2 border-purple-800 p-3 w-[100%] rounded-md outline-none'
            />
            <input
                className=' cursor-pointer py-3 mt-[2px] px-6 bg-purple-600 rounded absolute right-[2.5px]'
                value={'Add Task'}
                type='submit'
            />
        </form>
    )
}

export default Form
