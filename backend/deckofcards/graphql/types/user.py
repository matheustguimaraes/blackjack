"""User GraphQL types."""

from django.contrib.auth.models import User as UserModel

from graphene_django import DjangoObjectType


class User(DjangoObjectType):
    """GraphQL type for the User model."""

    class Meta:
        model = UserModel
        only_fields = ("email", "username")

    def resolve_email(self, info, **kwargs):
        """Keep email private except if you're the current user."""
        if info.context.user == self:
            return self.email
        return ""
