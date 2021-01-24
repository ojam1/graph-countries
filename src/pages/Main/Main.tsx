import React, { FC } from "react";
import { useQuery, gql } from "@apollo/client";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

import DisplayCard from "../../components/atoms/DisplayCard/DisplayCard";

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

const Main: FC = (): JSX.Element => {
  const { loading, data, error } = useQuery(COUNTRY_DATA);

  if (loading)
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Box>
    );
  if (error) return <p>Error :(</p>;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {data.Country.map((country: Country) => {
            return (
              <Grid item key={country.name}>
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
