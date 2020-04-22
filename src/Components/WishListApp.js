import React, { useEffect } from 'react';
import WishForm from './WishForm';
import WishList from './WishList';
import useWishesState from '../hooks/useWishesState';
import { WishesProvider } from '../context/wishes.context';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import uuid from 'uuid/v4';

export default function WishListApp() {
  const initialWishesArray = [
    {
      id: uuid(),
      content: 'Audio-Technica ATH-M50x Headphones',
      done: false,
      link: 'https://www.audio-technica.com/cms/headphones/99aff89488ddd6b1/index.html'
    },
    {
      id: uuid(),
      content: 'Celeste Mountain on Steam',
      done: false,
      link: 'https://store.steampowered.com/app/504230/Celeste/'
    },

    {
      id: uuid(),
      content: 'Dreamland Alaskan Husky Faux Fur Heated Throw',
      done: false,
      link: 'http://www.dreamlandworld.com/products/relaxwell-faux-fur-heated-throw/'
    },
    {
      id: uuid(),
      content: 'House of Leaves',
      done: true,
      link: 'https://www.barnesandnoble.com/w/house-of-leaves-mark-z-danielewski/1103027816#/'
    }
  ];

  // const wishesLength = JSON.parse(localStorage.getItem('wishes')).length;
  const wishesLength = 0;

  const initialWishes =
    wishesLength > 0
      ? // if there are any wishes, render them
        JSON.parse(window.localStorage.getItem('wishes'))
      : // otherwise, in case the user deleted all, reload hardcoded wishes from
        // initialWishesArray upon refresh so it won't start as empty
        initialWishesArray;

  const { wishes, addWish, deleteWish, toggleWish, editWish } = useWishesState(initialWishes);

  useEffect(
    () => {
      // sync wishes to localStorage by saving them under the key of "wishes"
      // since wishes are objects, and localStorage needs a string,
      // we need to explicitly convert them into strings, in order to avoid
      // the JS Engline implicitly calling .toString() on the objects
      window.localStorage.setItem('wishes', JSON.stringify(wishes));
    },
    [ wishes ]
  );

  return (
    <Paper
      style={{
        height: '100vh',
        backgroundImage: 'linear-gradient(to right top, #d1bebc, #d2c0c1, #c5b0ba, #b2a3b6, #9798b2, #768faa)',
        padding: 0,
        margin: 0
      }}
      elevation={0}
    >
      {/* use Paper Component as a reusable container to provide us with a background color */}
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        {/* AppBar, Toolbar, and Typography Components are from the material-ui docs */}
        <Toolbar>
          <Typography color='inherit'>Wishes</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={9} lg={5}>
          <WishesProvider>
            <WishForm addWish={addWish} />
            <WishList wishes={wishes} toggleWish={toggleWish} deleteWish={deleteWish} editWish={editWish} />
          </WishesProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}
