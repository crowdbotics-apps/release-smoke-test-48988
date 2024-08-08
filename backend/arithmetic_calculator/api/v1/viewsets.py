from rest_framework import authentication
from arithmetic_calculator.models import (
    CloudSetting,
    UserPreference,
    SecuritySetting,
    CalculationHistory,
    Operation,
)
from .serializers import (
    CalculationHistorySerializer,
    CloudSettingSerializer,
    OperationSerializer,
    SecuritySettingSerializer,
    UserPreferenceSerializer,
)
from rest_framework import viewsets


class UserPreferenceViewSet(viewsets.ModelViewSet):
    serializer_class = UserPreferenceSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = UserPreference.objects.all()


class CloudSettingViewSet(viewsets.ModelViewSet):
    serializer_class = CloudSettingSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = CloudSetting.objects.all()


class SecuritySettingViewSet(viewsets.ModelViewSet):
    serializer_class = SecuritySettingSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = SecuritySetting.objects.all()


class CalculationHistoryViewSet(viewsets.ModelViewSet):
    serializer_class = CalculationHistorySerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = CalculationHistory.objects.all()


class OperationViewSet(viewsets.ModelViewSet):
    serializer_class = OperationSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Operation.objects.all()
