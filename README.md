# deck of cards

Blackjack built using Django, React, Docker and PostgreSQL.

<img src="./assets/game.png" alt="drawing" width="500"/>
<img src="./assets/win.png" alt="drawing" width="500"/>
<img src="./assets/game.png" alt="drawing" width="500"/>

## Requirements

### Frontend

1. Assuming a standard deck (52 cards of 4 suits: ♣ Clubs, ♦ Diamonds, ♥ Hearts, ♠ Spades).
2. Press a "Deal" button to deal 5 random cards.
3. Pressing the button again should deal 5 unique, random cards. Within the same game, you should never get the same cards again that you got in the past (just like a physical deck).
4. Add a card counter which shows how many cards are dealt/left.
5. Add an ace counter which shows how many aces are left.
6. Add a button to reset the game.
7. When all the cards have been dealt, Game Over should be displayed. If no aces are left, Game Over should be displayed.
8. If there is an ace in the last draw, display Winner, otherwise display You Lose. Better luck next time!

### Backend

1. Assuming a standard deck (52 cards of 4 suits: ♣ Clubs, ♦ Diamonds, ♥ Hearts, ♠ Spades).
2. Press a "Deal" button to deal 5 random cards (mutation).
3. Pressing the button again should deal 5 unique, random cards. Within the same game, you should never get the same cards again that you got in the past (just like a physical deck).
4. API for a card counter which shows how many cards are dealt/left.
5. API to reset the game.
6. API to show the game is over.
7. API for win/lose. If there is an ace in the last draw, display You Win, otherwise display You Lose, Sucker.
10. Streak of wins/loses/games played
11. Storing user details, login/out
12. Rig the game (e.g. player always wins)
13. Custom deck support (e.g. other deck images, other lengths of decks, not just 52 cards)


## Installing

### Frontend

To install frontend, go to frontend folder:

    cd ./frontend
    yarn install

Then:

    yarn start

### Backend

Then install Python dependencies:

    cd backend/
    pyenv install 3.9.5
    poetry env use ~/.pyenv/versions/3.9.5/bin/python
    poetry install

Copy example env vars to `.env`. You might need to change `DATABASE_URL` based on your environment.

    cp .env.example .env

Create the `deckofcards` database:

    createdb deckofcards

Load the sample user data:

    poetry run ./manage.py migrate
    poetry run ./manage.py loaddata deckofcards/fixtures/users.json
    poetry run ./manage.py runserver 5000
