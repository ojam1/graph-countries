import React, { useState, useEffect, FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 300,
    minHeight: 300,
  },
});

interface Props {
  name: string;
  nativeName: string;
  population: number;
  capital: string;
  flag: string;
  languages: Record<string, string>[];
}

const DisplayCard: FC<Props> = ({
  name,
  nativeName,
  population,
  capital,
  flag,
  languages,
}) => {
  const { root } = useStyles();
  const [officialLanguages, setOfficialLanguages] = useState(languages);

  useEffect(() => {
    if (languages.length > 5) {
      setOfficialLanguages(languages.slice(0, 5));
    }
  }, [languages]);

  const names = nativeName === name ? name : `${name}, ${nativeName}`;
  const languageHeader = officialLanguages.length === 1 ? 'Official Language' : 'Official Languages'

  return (
    <Card variant="outlined" raised className={root}>
      <CardContent>
        <Typography
          variant="h4"
          color="textPrimary"
          gutterBottom
          component="h1"
        >
          {names}
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <img
            style={{
              height: "40px",
              width: "60px",
            }}
            src={flag}
            alt={`${name} flag`}
          />
        </Box>
        <Typography variant="h5" component="h2" color="textPrimary">
          Population: {population}
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          color="textPrimary"
          gutterBottom
        >
          Capital: {capital}
        </Typography>
        <Typography
          variant="subtitle1"
          component="h3"
          color="textPrimary"
          align="center"
        >
         {languageHeader}
        </Typography>
        {officialLanguages.map((language) => {
          return (
            <Typography
              variant="body1"
              component="p"
              color="textSecondary"
              key={language.name}
            >
              {language.name}
            </Typography>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default DisplayCard;
