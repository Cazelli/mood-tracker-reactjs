import React, { useState } from 'react';

import Activity from "./ActivityModel";


type ActivityContextObj = {
    items: Activity[]
    addItem: (name: string) => void;
    removeItem: (id: string) => void;
};

export const ActivityContext = React.createContext<ActivityContextObj>({
    items: [],
    addItem: () => { },
    removeItem: () => { }
});


const ActivityContextProvider: React.FC = (props) => {
    const [items, setItems] = useState<Activity[]>([])

    const addItemHandler = (name: string) => {
        console.log('foi');
        setItems((prevItems) => {
            return prevItems.concat({ id: Math.random().toString(), name });
        });
    }

    const removeItemHandler = (id: string) => {

    }

    const contextValue: ActivityContextObj = {
        items,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    console.log(contextValue);

    return (
        <ActivityContext.Provider value={contextValue}  >
            {props.children}
        </ActivityContext.Provider>
    );
}


export default ActivityContextProvider;
