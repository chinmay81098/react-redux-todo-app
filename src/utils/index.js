export const getSortedList = (todoList) => {
    return [...todoList].sort((prev, next) => { 
        if (prev.text > next.text) {
            return 1;
        }
        else if (prev.text < next.text) { 
            return -1;
        }
        return 0;
    })
 }