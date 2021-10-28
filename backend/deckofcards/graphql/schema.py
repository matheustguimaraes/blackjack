"""GraphQL schema specific to this app."""

import graphene

from .types.logout_user import LogoutUser
from .types.user import User as UserNode


class Query(graphene.ObjectType):
    """Queries specific to deckofcards app."""

    class Meta:
        abstract = True

    me = graphene.Field(UserNode)

    def resolve_me(self, info, **kwargs):
        """Return the current logged in user."""
        return info.context.user


class Mutation(graphene.ObjectType):
    """Mutations specific to deckofcards app."""

    class Meta:
        abstract = True

    logout_user = LogoutUser.Field(description="Log the user out.")
