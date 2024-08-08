from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    CalculationHistoryViewSet,
    CloudSettingViewSet,
    OperationViewSet,
    SecuritySettingViewSet,
    UserPreferenceViewSet,
)

router = DefaultRouter()
router.register("userpreference", UserPreferenceViewSet)
router.register("cloudsetting", CloudSettingViewSet)
router.register("securitysetting", SecuritySettingViewSet)
router.register("calculationhistory", CalculationHistoryViewSet)
router.register("operation", OperationViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
