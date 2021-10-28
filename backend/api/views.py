import json

from django.core import serializers
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

from .helper import SUITS_LIST
from .models import Deck

# Create your views here.


@csrf_exempt
@require_http_methods(["GET", "POST"])
def index(request):
    """
    Return all decks or create a new deck
    parameters: request
    returns: Deck model in JSON format
    """

    if request.method == "GET":
        "Get all decks created"
        all_decks = Deck.objects.all()
        decks = serializers.serialize("json", all_decks)
        return HttpResponse(decks, content_type="application/json; charset=utf8")

    elif request.method == "POST":
        "Create new deck"
        deck = Deck()
        deck.create()

        return HttpResponse(
            json.dumps(deck.get_deck()), content_type="application/json; charset=utf8"
        )


def read(request, deck_id):
    """Read deck by id"""
    deck = Deck.objects.get(pk=deck_id)
    return HttpResponse(json.dumps(deck.get_deck()), content_type="application/json; charset=utf8")


@csrf_exempt
@require_http_methods(["POST"])
def deal(request, deck_id):
    """Deal cards in existing deck"""
    deck = Deck.objects.get(pk=deck_id)
    deck.deal(deck.stack)
    return HttpResponse(json.dumps(deck.dealt_cards), content_type="application/json; charset=utf8")


@csrf_exempt
@require_http_methods(["POST"])
def reset(request, deck_id):
    """Reset deck to 52 cards again"""
    deck = Deck.objects.get(pk=deck_id)
    deck.create()

    return HttpResponse(json.dumps(deck.get_deck()), content_type="application/json; charset=utf8")


def count_deck(request, deck_id):
    """Count number of cards left in the stack"""
    deck = Deck.objects.get(pk=deck_id)
    return HttpResponse(deck.deck_count, content_type="application/json; charset=utf8")


def win_lose(request, deck_id):
    """Check if user did win or lose"""
    deck = Deck.objects.get(pk=deck_id)
    return HttpResponse(deck.view_has_user_won(), content_type="application/json; charset=utf8")


def stats(request, deck_id):
    """Count number of cards left in the stack"""
    deck = Deck.objects.get(pk=deck_id)
    return HttpResponse(json.dumps(deck.get_stats()), content_type="application/json; charset=utf8")


def suit_img(request, suit):
    if any(suit in s.lower() for s in SUITS_LIST):
        image_path = f"../assets/{suit.title()}.svg"
        img = open(image_path)
        return HttpResponse(img, content_type="image/svg+xml")
    return HttpResponse("Suit not found", content_type="application/json; charset=utf8")
