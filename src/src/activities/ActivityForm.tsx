import React, { useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";


import classes from './ActivityForm.module.css';
import { ActivityContext } from './ActivityStore';

const ActivityForm: React.FC = () => {
  const activityContext = useContext(ActivityContext);
  const [name, setName] = useState('');

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (name !== '') {
      activityContext.addItem(name);
      console.log(activityContext.items);
    }

  };

  const onChangeNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <Form onSubmit={onSubmitHandler}>

      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Name" maxLength={30} required value={name} onChange={onChangeNameHandler} />
      </Form.Group>



      <Button variant="primary" type="submit" className={classes['save-button']}>
        Save
      </Button>
      {activityContext.items.map((i) => (
        <span key={i.id}>{i.name}</span>
      ))}
    </Form>
  );
};




export default ActivityForm;