import styles from '../styles/rsvp.module.css'
import { CheckBox, CheckBoxGroup, Form, RadioButtonGroup, Select } from 'grommet';
import React from 'react';
import { FormField } from 'grommet';
import { TextInput } from 'grommet';
import { Box } from 'grommet';
import { Button } from 'grommet';
import { useState } from 'react';


const RSVP = () => {
    const [first, setFirst] = React.useState('');
    const [last, setLast] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [kids, setKids] = React.useState(0);
    const [meal, setMeal] = React.useState('tbd');
    const [attending, setAttending] = React.useState('')
    
    return (
        <div>
            <Box direction='column' round='medium' align='left' elevation='small' justify='start' alignSelf='center' pad='medium' className={styles.container}>
                <Box direction='row' pad='medium' gap='small'>
                    <RadioButtonGroup
                      options={['I will be attending', 'I will not be attending']}
                      name='attending'
                      onChange={(event) => setAttending(event.target.value)}
                      value={attending}
                      direction='row'
                    />
                </Box>
                <FormField label='First Name' name='first'>
                    <TextInput />
                </FormField>
                <FormField label='Last Name' name='last'>
                    <TextInput />    
                </FormField>
                <FormField label='Email Address' name='email'>
                    <TextInput />
                </FormField>
                <FormField label='Meal Choice' name='meal'>
                    <Select options={['tbd']} />
                </FormField>
                <FormField label='Number of Children' name='kids'>
                    <Select options={[0, 1, 2, 3]}/>   
                </FormField>
                <Box direction='row' align='center' gap='medium' pad='medium' alignContent='center'>
                    <Button label='Submit'/>
                    <Button label='Reset' />    
                </Box>
            </Box>
        </div>
    )
}

    export default RSVP;



