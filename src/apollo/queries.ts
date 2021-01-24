import { gql } from "@apollo/client";

export const COUNTRY_DATA = gql`
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