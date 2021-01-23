import React from "react";
import { useQuery, gql } from "@apollo/client";
import Grid from "@material-ui/core/Grid";

import DisplayCard from "../../atoms/DisplayCard/DisplayCard";

const COUNTRY_DATA = gql`
  query GetCountryData {
    Country {
      name
      nativeName
      population
      capital
      officialLanguages {
        iso639_1
        iso639_2
        name
        nativeName
      }
      flag {
        emoji
        emojiUnicode
        svgFile
      }
    }
  }
`;

interface Country {
  capital: string;
  flag: Record<string, string>;
  name: string;
  nativeName: string;
  officialLanguages: Record<string, string>[];
  population: number;
  __typename: string;
}

const Main: React.FC = (): JSX.Element => {
  const { loading, error, data } = useQuery(COUNTRY_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {data.Country.map((country: Country) => {

            return (
              <Grid item>
                <DisplayCard
                  name={country.name}
                  capital={country.capital}
                  population={country.population}
                  nativeName={country.nativeName}
                  flag={country.flag.svgFile}
                  languages={country.officialLanguages}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;
