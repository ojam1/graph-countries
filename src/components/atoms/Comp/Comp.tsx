import React from "react";
import { useQuery, gql } from "@apollo/client";

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

const Data: React.FC = (): JSX.Element => {
  const { loading, error, data } = useQuery(COUNTRY_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);
  return <div>data here</div>;
};

export default Data;