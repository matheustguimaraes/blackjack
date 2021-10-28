"""Here be our GraphQL API views."""

from django.http import HttpResponse, HttpResponseNotAllowed

from graphene_django.views import GraphQLView as BaseGraphQLView
from graphene_django.views import HttpError


class GraphQLView(BaseGraphQLView):
    """Unauthenticated GraphQL view."""

    def dispatch(self, request, *args, **kwargs):
        """Dispatch method to  allow OPTIONS requests.

        This fixes Apollo's graphql client hanging on OPTIONS requests.
        """
        if request.method.lower() not in ("get", "post", "options"):
            raise HttpError(
                HttpResponseNotAllowed(
                    ["GET", "POST", "OPTIONS"],
                    "GraphQL only supports GET, POST and OPTIONS requests.",
                )
            )

        if request.method.lower() == "options":
            return HttpResponse(status=200, content="", content_type="application/json")

        return super().dispatch(request, *args, **kwargs)
