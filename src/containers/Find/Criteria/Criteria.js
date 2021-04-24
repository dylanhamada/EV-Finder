import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import styles from './Criteria.module.css';

import { updateCriteria } from '../../../store/actions/find';
import { scrollToTop } from '../../../shared/utility';

class Criteria extends Component {
    componentDidMount () {
        scrollToTop();
    }

    onDragEnd = (result) => {
        if (result.destination) {
            let newCriteria = [...this.props.criteria];
            newCriteria.splice(result.source.index, 1);
            newCriteria.splice(result.destination.index, 0, result.draggableId);
            this.props.onUpdateCriteria(newCriteria);
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
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {this.props.criteria.map((criteria, index) => (
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
}

const mapStateToProps = state => {
    return {
        criteria: state.find.criteria
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateCriteria: (criteria) => dispatch(updateCriteria(criteria))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Criteria);