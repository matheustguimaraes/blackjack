import random
from datetime import datetime
from random import SystemRandom

SUITS_LIST = ["Spade", "Diamond", "Clover", "Heart"]
RANKS_LIST = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]


def get_random_num(deck_length=52):
    cryptogen = SystemRandom()
    # return math.floor(random.randint(0, deck_length - 1))
    return cryptogen.randrange(deck_length - 1)


def shuffle_deck(deck):
    deck_len = len(deck)
    for i in range(1000):
        num1 = get_random_num(deck_len)
        num2 = get_random_num(deck_len)
        tmp = deck[num1]
        deck[num1] = deck[num2]
        deck[num2] = tmp
    return deck


def create_deck():
    # deck = []
    # for i in ranks_list:
    #     for j in suits_list:
    #         card = (i, j)
    #         deck.append(card)
    # shuffled_deck = shuffle_deck(deck)
    # return shuffled_deck
    new_deck = [(i, j) for j in SUITS_LIST for i in RANKS_LIST]
    random.shuffle(new_deck)
    return new_deck


def is_minute_even():
    now = datetime.today().minute
    is_even = now % 2 == 0
    return True if is_even else False


def has_user_won(cards):
    for card in cards:
        for rank in card:
            if rank == "A":
                return True
    return False
