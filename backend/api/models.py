from django.db import models

from .helper import create_deck, has_user_won, is_minute_even


# Create your models here.
class Deck(models.Model):
    """Model used for the API"""

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # The cards that haven't been drawn yet
    stack = models.JSONField(null=True, blank=True)
    # Current cards dealt
    dealt_cards = models.JSONField(null=True, blank=True)
    # Current cards count
    deck_count = models.IntegerField(default=52)

    # Keep track of wins/loses and total games count
    win_count = models.IntegerField(default=0)
    lose_count = models.IntegerField(default=0)
    total_rounds_count = models.IntegerField(default=0)

    def create(self):
        """Create new deck"""
        self._add_fields()
        self.win_count = 0
        self.lose_count = 0

    def reset(self):
        """Reset existing deck"""
        self._add_fields()

    def deal(self, deck):
        """Fill all fields (including dealing the cards)"""
        self._fill_deck(deck)

    def _add_fields(self):
        """Helper method to fill Deck fields"""
        deck = create_deck()
        self.total_rounds_count = self.total_rounds_count + 1
        self._fill_deck(deck)

    def _fill_deck(self, deck):
        self.stack = deck
        self.dealt_cards = self.stack[0:5]
        self.stack = self.stack[5:]
        self.deck_count = len(self.stack)

        self.cheat_game()
        self._has_user_won()

        self.save()

    def get_deck(self):
        """Return Deck model in Object (JSON-like) format"""
        return {
            "id": self.id,
            "stack": self.stack,
            "dealt_cards": self.dealt_cards,
            "deck_count": self.deck_count,
        }

    def get_stats(self):
        return {
            "win_count": self.win_count,
            "lose_count": self.lose_count,
            "rounds_count": self.total_rounds_count,
        }

    def cheat_game(self):
        """Cheat if datetime minute is even"""
        if is_minute_even() and len(self.dealt_cards) == 2:
            self.dealt_cards[0] = ("A", "Spade")

    def _has_user_won(self):
        if len(self.dealt_cards) > 2:
            return
        if has_user_won(self.dealt_cards):
            self.win_count += 1
        else:
            self.lose_count += 1

    def view_has_user_won(self):
        if len(self.dealt_cards) > 2:
            return "Not last draw"
        if has_user_won(self.dealt_cards):
            return "Win"
        else:
            return "You Lose, Sucker"
