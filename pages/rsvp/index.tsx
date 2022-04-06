import styles from '../../styles/rsvp.module.css';
import { RadioButtonGroup, Select } from 'grommet';
import React from 'react';
import { FormField } from 'grommet';
import { TextInput } from 'grommet';
import { Box } from 'grommet';
import { Button } from 'grommet';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Spinner } from 'grommet';




const RSVP = () => {
    const router = useRouter();
    
    //if (Cookies.get('rsvpblock') == 'submitted') {
    //router.push('/error')
    //}
    
    const [first, setFirst] = React.useState('');
    const [last, setLast] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [kids, setKids] = React.useState('');
    const [meal, setMeal] = React.useState('');
    const [attending, setAttending] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    
    
    
    
    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        setLoading(true);
        const body = {
            first: first,
            last: last,
            email: email,
            kids: kids,
            meal: meal,
            attending: attending
        }
        console.log(body)
        axios.post('/api/rsvp', {
            first: first,
            last: last,
            email: email,
            kids: kids,
            meal: meal,
            attending: attending
        })
        .then(function (response) {
            console.log(response);
            router.push('/thankyou')
        })
        .catch(function (error) {
            console.log(error);
            router.push('/thankyou')
        })
        
    }

    if (loading == true) {
        return (
            <div>
                <Box direction='row' justify='center' margin='large' basis='1/2' alignContent='center'  alignSelf='center'>
                    <Spinner size='large'/>
                </Box>
            </div>
        )
    }
    
    return (
        <div>
            <Box direction='column' round='medium' align='left' elevation='small' justify='start' alignSelf='center' pad='medium' className={styles.container}>
                <Box direction='row' pad='medium' justify='center' gap='small'>
                    <RadioButtonGroup
                      options={['I will be attending', 'I will not be attending']}
                      name='attending'
                      onChange={(event) => setAttending(event.target.value)}
                      direction='row'
                    />
                </Box>
                <FormField label='First Name' name='first' required={true}  onChange={(event) => { setFirst(event.target.value)}}>
                    <TextInput />
                </FormField>
                <FormField label='Last Name' name='last' required={true} onChange={(event) => { setLast(event.target.value)}}>
                    <TextInput />    
                </FormField>
                <FormField label='Email Address' name='email'  required={(attending == 'I will be attending' ? true : false)} onChange={(event) => { setEmail(event.target.value)}}  disabled={attending == 'I will be attending' ? false : true}>
                    <TextInput />
                </FormField>
                <FormField label='Meal Choice' name='meal' required={(attending == 'I will be attending' ? true : false)}  onChange={(event) => { setMeal(event.target.value)}}  disabled={attending == 'I will be attending' ? false : true}>
                    <Select options={['Garlic & Rosemary Prime Rib w/ Garlic Whipped Potatoes', 'Roasted Chicken Breast with Basil & Shrimp Stuffing, Pesto Whipped Potatoes, and Tomato Cream Sauce', '*I have a dietary restriction* (We will contact you)']} />
                </FormField>
                <FormField label='Number of Children coming with' required={(attending == 'I will be attending' ? true : false)}  name='kids' onChange={(event) => { setKids(event.target.value)}}  disabled={attending == 'I will be attending' ? false : true}>
                    <Select options={[0, 1, 2, 3]}/>   
                </FormField>
                <Box direction='row' align='center' justify='center' gap='medium' pad='medium' alignContent='center'>
                    <Button primary color='black' className={styles.button} onClick={handleSubmit} label='Submit'/>    
                </Box>
            </Box>
        </div>
    )
}

    export default RSVP;



