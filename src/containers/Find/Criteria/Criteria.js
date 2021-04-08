import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import styles from './Criteria.module.css';

class Criteria extends Component {
    state = {
        list: ["lions", "tigers", "bears"]
    }

    onDragEnd = (result, provided) => {
        console.log(result);
    }

    render() {
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
                <Droppable 
                    droppableId="criteria-1"
                >
                    {(provided, snapshot) => (
                        <div
                            className={styles.Droppable}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {this.state.list.map((item, index) => (
                                <Draggable
                                    key={index}
                                    draggableId={item}
                                    index={index}    
                                >
                                    {(provided, snapshot) => (
                                        <div
                                            className={styles.Draggable}
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            {item}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

export default Criteria;