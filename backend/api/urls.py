from django.urls import path

from . import views

urlpatterns = [
    # GET: returns all created decks
    # POST: create new deck
    path("", views.index, name="index"),
    # get the deck by id
    path("deck/<int:deck_id>", views.read, name="read"),
    # deal five cards of existing deck
    path("deck/<int:deck_id>/deal", views.deal, name="deal"),
    # reset cards in the deck
    path("deck/<int:deck_id>/reset", views.reset, name="reset"),
    # count cards in the deck
    path("deck/<int:deck_id>/count_deck", views.count_deck, name="count_deck"),
    # win/lose
    path("deck/<int:deck_id>/win_lose", views.win_lose, name="win_lose"),
    # keeping track of win/loss
    path("deck/<int:deck_id>/stats", views.stats, name="stats"),
    # get images of each deck suit
    path("deck/<str:suit>/photo", views.suit_img, name="suit_img"),
]
