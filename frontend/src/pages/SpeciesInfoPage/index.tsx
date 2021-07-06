import React, { useState, useEffect } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import { useAppSelector } from '../../store/hooks';

type SpeciesInfoPageProps = {
  match: any
}

const SpeciesInfoPage = ({ match }: SpeciesInfoPageProps) => {
  const [formData, setFormData] = useState({});

  const species = useAppSelector((state) => state.species);

  useEffect(() => {
    ValidatorForm.addValidationRule('maxLength', (value) => {

      if (value.length > 12) {
          return false;
      }
      return true;
  });
  }, []);

  const handleSubmit = () => {
    const { 
      email,
      name,
      password
    }: {email?: string, name?: string, password?: string} = formData;
    
    console.log(email, name, password);
  };

  const handleChange = (name: string) => (event: any) => {
    setFormData({
      ...formData, 
      [name]: event.target.value 
    });
  };

  const {
    info = []
  }: {info: object[]} = species;

  const foundSpecies = info.find((elem: any) => elem.name === match.params.name) || {}

  const {
    name = ''
  }: {name? : string} = foundSpecies || {}

  const { 
    email = '',
    name: formDataName = '',
    password = ''
  }: {email?: string, name?: string, password?: string} = formData;

  const helperClasses = { classes: { error: 'shake' } };

  return (
    <div>
      <h2>{name} Species Page</h2>

      <ValidatorForm
        onSubmit={handleSubmit}
      >
        <TextValidator
          name="name"
          variant="standard"
          type="text"
          label="Name"
          value={formDataName}
          onChange={handleChange('name')}
          validators={[
            'required', 
            'matchRegexp:^[A-Z][a-z]+[ ][A-Z][a-z]+$'
          ]}
          FormHelperTextProps={helperClasses}
          errorMessages={[
            'This field is required.', 
            "Invalid input. Must contain 2 words, each one starting with an uppercase character!"
          ]}
        />
        <TextValidator
          name="email"
          variant="standard"
          type="text"
          label="E-Mail"
          value={email}
          onChange={handleChange('email')}
          validators={['required', 'isEmail']}
          FormHelperTextProps={helperClasses}
          errorMessages={['This field is required.', 'E-Mail is not valid.']}
        />
        <TextValidator
          name="password"
          variant="standard"
          type={'password'}
          label="Password"
          value={password}
          onChange={handleChange('password')}
          validators={[
            'required', 
            'minStringLength:5', 
            'maxLength'
          ]}
          FormHelperTextProps={helperClasses}
          errorMessages={[
            'This field is required.',
            'This field does not contain the minimum number of characters required! (5)',
            'This field exceeds the maximum number of characters allowed! (12)'
          ]}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          style={{ width: 'auto', marginTop: '1rem', marginLeft: '3rem' }}
        >
          Submit
        </Button>
      </ValidatorForm>
    </div>
  );
}

export default SpeciesInfoPage;