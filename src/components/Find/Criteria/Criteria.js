import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import styles from './Criteria.module.css';

import { scrollToTop } from '../../../shared/utility';

const Criteria = props => {
    useEffect(() => {
        scrollToTop();
    }, []);

    const onDragEnd = result => {
        if (result.destination) {
            props.dispatchCriteria(result);
        }
    };

    return (
        <React.Fragment>
            <p className={styles.Text}>Drag and arrange the following vehicle qualities in order of importance, with the most important on top and least important at the bottom.</p>
            <DragDropContext
            onDragEnd={onDragEnd}
            >
                <Droppable 
                    droppableId="criteria"
                >
                    {provided => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {props.criteria.map((criteria, index) => (
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
            <Link className={styles.Link} to={'/find/questionnaire'}>Next</Link>
        </React.Fragment>
    );
}

export default Criteria;