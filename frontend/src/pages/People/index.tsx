import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { useStyles } from "../../components/Template/default/styles";
import { PeopleCard } from "../../components";

interface IPeople {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: [];
  species: [];
  starships: [];
  vehicles: [];
  url: string;
  created: string;
  edited: string;
}

interface IPeopleCardData {
  birth_year: string;
  height: string;
  mass: string;
  created: string;
  edited: string;
}

const People = () => {
  const [peopleData, setPeopleData] = useState<IPeople[]>([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      let result = await axios.get("https://swapi.dev/api/people/?page=1");
      setPeopleData(result.data.results);
    };

    fetchData();
  }, []);

  const prepareDataForCard = (person: IPeople) => {
    return {
      birth_year: person.birth_year,
      height: person.height,
      mass: person.mass,
      created: format(new Date(person.created), "dd/MM/yyyy"),
      edited: format(new Date(person.edited), "dd/MM/yyyy"),
    };
  };

  const createPeopleCards = peopleData.map((person, index) => {
    const cardData: IPeopleCardData = prepareDataForCard(person);
    return (
      <PeopleCard
        key={`${person.name}-${index}`}
        cardTitle={person.name}
        cardContent={cardData}
      />
    );
  });

  return (
    <div className={classes.defaultPageContainer}>
      <h3>First Page of People from StarWars API</h3>
      <div className={classes.defaultGridView}>{createPeopleCards}</div>
    </div>
  );
};

export default People;
