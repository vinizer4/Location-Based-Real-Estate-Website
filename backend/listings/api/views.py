from .serializers import listingSerializer
from listings.models import Listing
from rest_framework import generics

class listinglist(generics.ListAPIView):
	queryset = Listing.objects.all()
	serializer_class = listingSerializer
