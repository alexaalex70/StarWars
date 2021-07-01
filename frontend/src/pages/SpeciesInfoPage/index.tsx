import React from 'react';
import { useAppSelector } from '../../store/hooks';

type SpeciesInfoPageProps = {
  match: any
}

const SpeciesInfoPage = ({ match }: SpeciesInfoPageProps) => {
  const species = useAppSelector((state) => state.species);

  const {
    info = []
  }: {info: object[]} = species;

  const foundSpecies = info.find((elem: any) => elem.name === match.params.name) || {}

  const {
    name = ''
  }: {name? : string} = foundSpecies || {}
  
  return (
    <div>
      <h2>{name} Species Page</h2>
    </div>
  );
}

export default SpeciesInfoPage;