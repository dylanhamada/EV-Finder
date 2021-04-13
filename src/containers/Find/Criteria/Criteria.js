import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import styles from './Criteria.module.css';

class Criteria extends Component {
    state = {
        criteria: ["Price", "Looks", "Range", "Charging Time", "Horsepower", "Seating", "Luxury", "Cargo Capacity"]
    }

    onDragEnd = (result) => {
        if (result.destination) {
            let newCriteria = [...this.state.criteria];
            newCriteria.splice(result.source.index, 1);
            newCriteria.splice(result.destination.index, 0, result.draggableId);
            this.setState({ criteria: newCriteria });
        }
    }

    render() {
        return (
            <React.Fragment>
                <p className={styles.Text}>Drag and arrange the following vehicle qualities in order of importance, with the most important on top and least important at the bottom.</p>
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
                                        {(provided, snapshot) => {
                                            const style = {
                                                backgroundColor: snapshot.isDragging ? '#00A9EF' : '#DADADA',
                                                color: snapshot.isDragging ? '#EEE' : '#444',
                                                ...provided.draggableProps.style,
                                            };

                                            return (
                                                <div
                                                    className={styles.Draggable}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={style}
                                                >
                                                    {criteria}
                                                </div>
                                            );
                                        }}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </React.Fragment>
        );
    }
}

export default Criteria;