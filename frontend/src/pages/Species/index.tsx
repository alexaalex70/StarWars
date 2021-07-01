import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useAppDispatch } from '../../store/hooks';
import { saveInformation } from '../../store/slices/species';

import axios from 'axios';

interface Custom {
  name: string
}

const Species = () => {
  const dispatch = useAppDispatch();

  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let result = await axios.get('https://swapi.dev/api/species/?page=1');
      setInfo(result.data.results);
      dispatch(saveInformation(result.data.results));
    }

    fetchData();
  }, []);

  return (
    <div>
      Results from the first page of the species API

      <ul>
        {
          info.map((element: Custom) => (
            <li key={element.name}>
              <Link to={`/species/${element.name}`}>
                <Button color="inherit">
                  {element.name}
                </Button>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Species;