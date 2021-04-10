import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import styles from './Criteria.module.css';

class Criteria extends Component {
    state = {
        criteria: ["Price", "Looks", "Range", "Charging Time", "Horsepower", "Seating", "Luxury", "Cargo Capacity"]
    }

    onDragEnd = (result) => {
        let newCriteria = [...this.state.criteria];
        newCriteria.splice(result.source.index, 1);
        newCriteria.splice(result.destination.index, 0, result.draggableId);
        this.setState({ criteria: newCriteria });
    }

    render() {
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
                <Droppable 
                    droppableId="criteria"
                >
                    {provided => (
                        <div
                            className={styles.Droppable}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {this.state.criteria.map((criteria, index) => (
                                <Draggable
                                    key={criteria}
                                    draggableId={criteria}
                                    index={index}    
                                >
                                    {(provided, snapshot) => (
                                        <div
                                            className={styles.Draggable}
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            {criteria}
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