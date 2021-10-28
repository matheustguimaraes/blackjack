"""Main GraphQL schema file. Only one for this project."""

import graphene

from .graphql import schema as main_schema


class Query(main_schema.Query, graphene.ObjectType):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    """Query wrapper for all queries."""


class Mutation(main_schema.Mutation, graphene.ObjectType):
    # This class will inherit from multiple Mutations
    # as we begin to add more apps to our project
    """Mutation wrapper for all mutations."""


schema = graphene.Schema(query=Query, mutation=Mutation)
