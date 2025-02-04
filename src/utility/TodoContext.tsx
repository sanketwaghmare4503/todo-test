import React, { createContext, useState, ReactNode, useContext } from 'react';

export type Todo = {
    id: number;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
}

export type TodoContextType = {
    todos: Todo[];
    addTodo: (name: string, description: string, startDate: string, endDate: string) => void;
    deleteTodo: (id: number) => void;
};


const TodoContext = createContext<TodoContextType | undefined>(undefined);


export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (name: string, description: string, startDate: string, endDate: string) => {
        setTodos((prevTodos) => [
            ...prevTodos,
            {
                id: Date.now(),
                name,
                description,
                startDate,
                endDate,
            },
        ]);
    };

    const deleteTodo = (id: number) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    );
};


export const useTodoContext = (): TodoContextType => {
    const context = useContext(TodoContext);
    if (!context) {

        throw new Error('error');
    }
    return context;
};
